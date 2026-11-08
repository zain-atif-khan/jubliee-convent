const { spawn } = require("child_process");
const http = require("http");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchRoute(path, method = "GET", postData = null) {
  return new Promise((resolve) => {
    const options = {
      hostname: "127.0.0.1",
      port: 3100,
      path: path,
      method: method,
      headers: postData
        ? {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData),
          }
        : {},
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({ status: res.statusCode, data: data.substring(0, 100) });
      });
    });

    req.on("error", (err) => {
      resolve({ status: "ERR", error: err.message });
    });

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function runTests() {
  console.log("Starting Next.js production server on port 3100...");
  const server = spawn("node", ["node_modules/next/dist/bin/next", "start", "-p", "3100"], {
    stdio: "pipe",
  });

  server.stdout.on("data", (d) => console.log(`[Next] ${d.toString().trim()}`));
  server.stderr.on("data", (d) => console.error(`[Next Err] ${d.toString().trim()}`));

  // Wait for server to be ready
  let ready = false;
  for (let i = 0; i < 20; i++) {
    await sleep(500);
    const test = await fetchRoute("/");
    if (test.status === 200) {
      ready = true;
      break;
    } else {
      console.log(`Polling attempt ${i + 1}: status = ${test.status}, error = ${test.error || 'none'}`);
    }
  }

  if (!ready) {
    console.error("Server did not become ready in 10 seconds.");
    server.kill();
    process.exit(1);
  }

  console.log("Server is ready. Testing routes...");

  const routes = [
    "/",
    "/about/",
    "/academics/",
    "/admissions/",
    "/gallery/",
    "/faqs/",
    "/faqs/admissions/",
    "/faqs/academics/",
    "/faqs/general/",
    "/contact/",
    "/resources/",
    "/resources/choosing-the-right-school/",
    "/resources/supporting-children-learning-at-home/",
    "/resources/understanding-school-curriculum-options/",
    "/privacy-policy/",
    "/terms/",
    "/sitemap.xml",
    "/robots.txt",
  ];

  let passed = 0;
  for (const route of routes) {
    const res = await fetchRoute(route);
    const ok = res.status === 200;
    console.log(`${ok ? "PASS" : "FAIL"}: ${route} -> Status ${res.status}`);
    if (ok) passed++;
  }

  // Test POST API /api/enquiry/
  const enquiryPayload = JSON.stringify({
    parentName: "Verified Test Parent",
    email: "parent@example.com",
    phone: "+91 98765 43210",
    studentName: "Child Name",
    gradeApplying: "Grade 1",
    academicYear: "2027–2028",
  });
  const enquiryRes = await fetchRoute("/api/enquiry/", "POST", enquiryPayload);
  console.log(`Enquiry API -> Status ${enquiryRes.status} (Response: ${enquiryRes.data})`);
  if (enquiryRes.status === 200) passed++;

  // Test POST API /api/contact/
  const contactPayload = JSON.stringify({
    fullName: "Verified Test Visitor",
    email: "visitor@example.com",
    phone: "+91 98765 00000",
    subject: "General Enquiry",
    message: "This is a test message to verify the contact API works perfectly.",
  });
  const contactRes = await fetchRoute("/api/contact/", "POST", contactPayload);
  console.log(`Contact API -> Status ${contactRes.status} (Response: ${contactRes.data})`);
  if (contactRes.status === 200) passed++;

  console.log(`\nTests Completed: ${passed} / ${routes.length + 2} passed.`);

  server.kill();
  process.exit(passed === routes.length + 2 ? 0 : 1);
}

runTests();
