"use client";

import React, { useState } from "react";
import { EnquiryFormData } from "@/types";

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    parentName: "",
    email: "",
    phone: "",
    studentName: "",
    gradeApplying: "Nursery",
    academicYear: "2027–2028",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Validate inputs
    if (!formData.parentName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Parent Name, Email, and Phone).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit enquiry. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "A network error occurred. Please try again or call the school office directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#FAF6F0] border border-[#4A3028] p-8 sm:p-12 text-center rounded-3xl shadow-sm">
        <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase px-3.5 py-1.5 bg-[#4A3028] text-[#F3EBDD] rounded-md mb-4">
          Confirmed
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#171416] mb-3">
          Admissions Enquiry Received
        </h3>
        <p className="text-base text-[#4A4340] max-w-lg mx-auto mb-6">
          Thank you for reaching out to JUBLIE. Our admissions coordinator has received your enquiry
          for <strong>{formData.studentName || "your child"}</strong> and will contact you at{" "}
          <strong>{formData.email}</strong> within two working days to schedule a campus walkthrough.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              parentName: "",
              email: "",
              phone: "",
              studentName: "",
              gradeApplying: "Nursery",
              academicYear: "2027–2028",
              notes: "",
            });
          }}
          className="px-7 py-3.5 bg-[#4A3028] text-[#F3EBDD] hover:bg-[#5A3B31] font-medium text-sm rounded-md transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#E2D5C3] p-8 sm:p-12 rounded-3xl space-y-6 shadow-sm"
      noValidate
    >
      {status === "error" && (
        <div className="p-4 bg-[#FBEBEB] border border-[#E8A5A5] text-[#901D1D] text-sm rounded-md">
          <span className="font-semibold block mb-0.5">Notice:</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="parentName" className="block text-sm font-medium text-[#171416] mb-2">
            Parent or Guardian Full Name <span className="text-[#8B1E1E]">*</span>
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
            placeholder="e.g. Anand Sharma"
            className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#171416] mb-2">
            Email Address <span className="text-[#8B1E1E]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="e.g. parent@example.com"
            className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#171416] mb-2">
            Contact Telephone Number <span className="text-[#8B1E1E]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="e.g. +91 98765 43210"
            className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
          />
        </div>

        <div>
          <label htmlFor="studentName" className="block text-sm font-medium text-[#171416] mb-2">
            Student Full Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="e.g. Rohan Sharma"
            className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="gradeApplying" className="block text-sm font-medium text-[#171416] mb-2">
            Class Seeking Admission For
          </label>
          <select
            id="gradeApplying"
            name="gradeApplying"
            value={formData.gradeApplying}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
          >
            <option value="Nursery">Nursery</option>
            <option value="Class 1">Class 1 (Primary)</option>
            <option value="Class 2">Class 2 (Primary)</option>
            <option value="Class 3">Class 3 (Primary)</option>
            <option value="Class 4">Class 4 (Primary)</option>
            <option value="Class 5">Class 5 (Primary)</option>
            <option value="Class 6">Class 6 (Upper Primary)</option>
            <option value="Class 7">Class 7 (Upper Primary)</option>
            <option value="Class 8">Class 8 (Upper Primary)</option>
            <option value="Class 9">Class 9 (Secondary - SSC)</option>
            <option value="Class 10">Class 10 (Secondary - SSC)</option>
          </select>
        </div>

        <div>
          <label htmlFor="academicYear" className="block text-sm font-medium text-[#171416] mb-2">
            Intended Academic Session
          </label>
          <select
            id="academicYear"
            name="academicYear"
            value={formData.academicYear}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
          >
            <option value="2027–2028">2027–2028 Academic Year</option>
            <option value="2028–2029">2028–2029 Academic Year</option>
            <option value="Immediate Mid-Term Transfer">Immediate Mid-Term Transfer</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-[#171416] mb-2">
          Specific Questions or Educational Notes (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Please mention any specific questions or areas of interest regarding curriculum, support, or campus visits."
          className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#4A3028] text-[#F3EBDD] hover:bg-[#5A3B31] font-medium text-base rounded-md transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
        >
          {status === "loading" ? "Transmitting Enquiry..." : "Submit Admissions Enquiry"}
        </button>
      </div>

      <p className="text-xs text-[#685F58] leading-normal">
        Your enquiry details are handled directly by the JUBLIE Admissions Office. We never share
        family contact information with outside entities.
      </p>
    </form>
  );
};
