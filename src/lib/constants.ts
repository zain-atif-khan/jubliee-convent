import { FaqItem, GalleryItem, NavItem, ResourceArticle } from "@/types";

export const SITE_METADATA = {
  name: "JUBLIE",
  title: "JUBLIE School | English Medium State Board School, Aghapura, Hyderabad",
  description:
    "JUBLIE is a private unaided English-medium school in Aghapura, Nampally, Hyderabad, established in 1997. Offering education from Nursery to Class X under the Telangana State Board (SSC) syllabus.",
  url: "https://jublie-school.edu",
  verifiedPhone: "+91 92474 20386",
  verifiedPhoneTel: "tel:+919247420386",
  verifiedAddress:
    "Shop No. 11-1-307, New Aghapura X Road, Near Darus Salam, Agapura Road, Aghapura, Nampally, Hyderabad – 50000 (PIN code to be confirmed)",
  shortAddress: "New Aghapura X Road, Near Darus Salam, Aghapura, Nampally, Hyderabad",
  mapUrl:
    "https://maps.google.com/?q=Shop+No.+11-1-307,+New+Aghapura+X+Road,+Near+Darus+Salam,+Aghapura,+Nampally,+Hyderabad",
  curriculum: "Telangana State Board (SSC syllabus)",
  mediumOfInstruction: "English Medium",
  gradesOffered: "Nursery to Class X",
  educationalStages: "Nursery, Primary, Upper Primary, Secondary",
  establishedYear: 1997,
  schoolType: "Private Unaided",
  management: "Under new management since 2023",
  workingHours: "Monday to Friday: 8:00 AM – 4:00 PM; Saturday: 8:30 AM – 1:00 PM",
};

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Academics", href: "/academics/" },
  { label: "Admissions", href: "/admissions/" },
  { label: "Contact Us", href: "/contact/" },
];

export const FOOTER_NAV_ITEMS: { category: string; links: NavItem[] }[] = [
  {
    category: "Explore JUBLIE",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Academic Approach", href: "/academics/" },
      { label: "Admissions Procedure", href: "/admissions/" },
      { label: "Campus Gallery", href: "/gallery/" },
    ],
  },
  {
    category: "Family Resources",
    links: [
      { label: "All Frequently Asked Questions", href: "/faqs/" },
      { label: "Admissions Questions", href: "/faqs/admissions/" },
      { label: "Academics Questions", href: "/faqs/academics/" },
      { label: "General Information Questions", href: "/faqs/general/" },
      { label: "Educational Resources & Articles", href: "/resources/" },
    ],
  },
  {
    category: "Legal & Information",
    links: [
      { label: "Contact Us", href: "/contact/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms of Use", href: "/terms/" },
    ],
  },
];

export const ALL_FAQS: FaqItem[] = [
  {
    category: "academics",
    question: "Which curriculum does JUBLIE follow?",
    answer:
      "JUBLIE follows the Telangana State Board (SSC) syllabus. The curriculum provides structured, comprehensive preparation in languages, mathematics, general science, and social sciences, culminating in the Secondary School Certificate (SSC) examination at Class X.",
  },
  {
    category: "academics",
    question: "What is the medium of instruction at JUBLIE?",
    answer:
      "The medium of instruction is English across all grades, from Nursery through Class X. Language studies including first language, second language, and third language are taught in full compliance with Telangana State Board regulations.",
  },
  {
    category: "academics",
    question: "Which educational stages and classes are offered?",
    answer:
      "JUBLIE offers education from Nursery to Class X structured across four key stages: Nursery, Primary (Classes I to V), Upper Primary (Classes VI to VIII), and Secondary (Classes IX and X).",
  },
  {
    category: "general",
    question: "Where is JUBLIE located in Hyderabad?",
    answer:
      "The school is located at Shop No. 11-1-307, New Aghapura X Road, Near Darus Salam, Agapura Road, Aghapura, Nampally, Hyderabad – 50000 (PIN code to be confirmed from school records). The campus is easily accessible from central Hyderabad, Nampally, and surrounding neighbourhoods.",
  },
  {
    category: "general",
    question: "When was JUBLIE established and how is it managed?",
    answer:
      "JUBLIE was established in 1997 as a private unaided educational institution. Since 2023, the school operates under new management dedicated to disciplined academic foundations, reliable student guidance, and strong teacher-parent collaboration.",
  },
  {
    category: "general",
    question: "How can parents contact the school for information and visits?",
    answer:
      "Parents can reach the school office directly by telephone at +91 92474 20386 during working hours (Monday to Friday: 8:00 AM – 4:00 PM; Saturday: 8:30 AM – 1:00 PM). Families are also welcome to submit an online admissions enquiry form or visit the campus in person.",
  },
  {
    category: "admissions",
    question: "What is the admissions procedure at JUBLIE?",
    answer:
      "The admissions process begins with submitting an enquiry either online or in person at the school office. Parents are invited for a campus walkthrough to discuss their child's academic background and understand class placement.",
  },
  {
    category: "admissions",
    question: "Which documents are required for student admission?",
    answer:
      "Required documents include the student's official birth certificate issued by the competent authority, recent passport-sized photographs, previous academic progress records or report cards (for Class I upwards), and an official Transfer Certificate before final enrolment.",
  },
  {
    category: "admissions",
    question: "Can parents visit the school before applying?",
    answer:
      "Yes. We welcome parents to visit the campus during office hours to view our learning environment and discuss curriculum details with the admissions office. Please call +91 92474 20386 to arrange your visit.",
  },
  {
    category: "academics",
    question: "How does JUBLIE approach teaching and student assessment?",
    answer:
      "Teaching is centered on clear conceptual understanding, regular homework supervision, classroom discussion, and hands-on laboratory exercises. Assessment follows the continuous and comprehensive evaluation guidelines established by the Telangana State Board.",
  },
  {
    category: "academics",
    question: "How does the school support students needing academic reinforcement?",
    answer:
      "Subject teachers monitor student progress closely during regular lessons. Students who require extra support in core subjects like mathematics or English receive targeted guidance and practice during revision periods.",
  },
  {
    category: "general",
    question: "What are the school office working hours?",
    answer:
      "The school office is open Monday to Friday from 8:00 AM to 4:00 PM, and on Saturdays from 8:30 AM to 1:00 PM. The office is closed on Sundays and gazetted public holidays.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "campus-main",
    title: "School Campus Building",
    category: "Campus & Architecture",
    src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    alt: "Exterior view of JUBLIE School building in Aghapura, Hyderabad",
    caption: "The central school building serving Nursery through Class X students in Aghapura, Nampally.",
  },
  {
    id: "science-lab",
    title: "Science & Practical Demonstration Room",
    category: "Classrooms & Labs",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    alt: "Students working on equipment in a bright school laboratory",
    caption: "Dedicated workspace for physics, chemistry, and biology demonstrations under the State Board syllabus.",
  },
  {
    id: "library-reading",
    title: "Reading & Learning Resource Centre",
    category: "Classrooms & Labs",
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    alt: "Organised rows of books and wooden reading desks in a quiet library",
    caption: "Reference volumes, English reading collections, and textbooks supporting daily academic study.",
  },
  {
    id: "arts-studio",
    title: "Creative Arts & Expression Space",
    category: "Arts & Culture",
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    alt: "Art studio with drawing and creative materials",
    caption: "Space for student drawing, craft activities, and cultural event rehearsals.",
  },
  {
    id: "sports-ground",
    title: "Physical Education & Recreation Area",
    category: "Sports & Athletics",
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    alt: "Outdoor play and exercise area for school students",
    caption: "Recreation ground for morning assemblies, physical training drills, and outdoor games.",
  },
  {
    id: "music-auditorium",
    title: "Assembly & Cultural Activity Hall",
    category: "Arts & Culture",
    src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80",
    alt: "Hall for school assemblies and student presentations",
    caption: "Indoor hall used for morning assemblies, inter-house debates, and annual school celebrations.",
  },
  {
    id: "primary-classroom",
    title: "Active Primary Classroom",
    category: "Classrooms & Labs",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    alt: "Bright primary classroom with desks and blackboards",
    caption: "Structured primary classroom environment designed for focused learning and teacher guidance.",
  },
  {
    id: "campus-courtyard",
    title: "Central Assembly Courtyard",
    category: "Campus & Architecture",
    src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    alt: "Open courtyard area of school campus",
    caption: "Courtyard area where students gather during recess and morning assembly.",
  },
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    slug: "choosing-the-right-school",
    title: "How to Choose the Right School Environment for Your Child in Hyderabad",
    description:
      "A practical guide for parents evaluating state board curriculum, teaching discipline, school culture, and academic foundations in Hyderabad.",
    readingTime: "6 min read",
    publishedDate: "November 2026",
    category: "Admissions & School Selection",
  },
  {
    slug: "supporting-children-learning-at-home",
    title: "Establishing Healthy Learning Routines at Home Without Pressure",
    description:
      "Actionable recommendations for creating calm study spaces, encouraging daily reading habits, and balancing homework with physical well-being.",
    readingTime: "5 min read",
    publishedDate: "October 2026",
    category: "Parenting & Learning",
  },
  {
    slug: "understanding-school-curriculum-options",
    title: "Understanding the Telangana State Board (SSC) Curriculum: A Guide for Parents",
    description:
      "A clear overview of the Telangana State Board SSC syllabus structure from primary through secondary classes, assessment patterns, and educational benefits.",
    readingTime: "7 min read",
    publishedDate: "September 2026",
    category: "Educational Insights",
  },
];
