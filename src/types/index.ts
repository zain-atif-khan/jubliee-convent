export interface NavItem {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: "admissions" | "academics" | "general";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Campus & Architecture" | "Classrooms & Labs" | "Arts & Culture" | "Sports & Athletics";
  src: string;
  alt: string;
  caption: string;
}

export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  publishedDate: string;
  category: string;
}

export interface EnquiryFormData {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  gradeApplying: string;
  academicYear: string;
  notes?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
