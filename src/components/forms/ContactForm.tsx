"use client";

import React, { useState } from "react";
import { ContactFormData } from "@/types";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
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

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Full Name, Email, and Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to deliver message. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "A network error occurred. Please try again or telephone the school office directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#FAF6F0] border border-[#4A3028] p-8 sm:p-12 text-center rounded-3xl shadow-sm">
        <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase px-3.5 py-1.5 bg-[#4A3028] text-[#F3EBDD] rounded-md mb-4">
          Confirmed
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#171416] mb-3">
          Message Sent Successfully
        </h3>
        <p className="text-base text-[#4A4340] max-w-lg mx-auto mb-6">
          Thank you for contacting JUBLIE. A member of our administration office will review your note
          and reply to <strong>{formData.email}</strong> promptly.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              subject: "General Enquiry",
              message: "",
            });
          }}
          className="px-7 py-3.5 bg-[#4A3028] text-[#F3EBDD] hover:bg-[#5A3B31] font-medium text-sm rounded-md transition-colors"
        >
          Send Another Message
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

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-[#171416] mb-2">
          Your Full Name <span className="text-[#8B1E1E]">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="e.g. Priyanshu Varma"
          className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-[#171416] mb-2">
            Email Address <span className="text-[#8B1E1E]">*</span>
          </label>
          <input
            type="email"
            id="contactEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="e.g. name@domain.com"
            className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contactPhone" className="block text-sm font-medium text-[#171416] mb-2">
            Telephone Number (Optional)
          </label>
          <input
            type="tel"
            id="contactPhone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 00000"
            className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#171416] mb-2">
          Subject of Message
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
        >
          <option value="General Enquiry">General Information</option>
          <option value="Admissions Consultation">Admissions Consultation</option>
          <option value="Campus Tour Request">Campus Tour Scheduling</option>
          <option value="Academic Question">Academic Program Inquiry</option>
          <option value="Administrative Office">Administration & Records</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#171416] mb-2">
          Your Message <span className="text-[#8B1E1E]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Please share your message or inquiry..."
          className="w-full px-4 py-3.5 bg-[#FAF6F0] border border-[#D9C8B5] focus:border-[#4A3028] focus:bg-white text-[#171416] rounded-md text-sm transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#4A3028] text-[#F3EBDD] hover:bg-[#5A3B31] font-medium text-base rounded-md transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
      >
        {status === "loading" ? "Transmitting Message..." : "Send Message to Administration"}
      </button>
    </form>
  );
};
