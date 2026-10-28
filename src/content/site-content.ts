/**
 * Centralized demo content.
 *
 * Everything shown on the site reads from this file. The actual text lives in
 * JSON files under `/content` so a non-technical admin can edit it through
 * the Decap CMS UI at `/admin` (see `public/admin/config.yml`) — commits
 * would land on GitHub and Netlify would redeploy automatically, once this
 * project is actually deployed. This file is the single import surface the
 * rest of the app uses; it re-exports the JSON data under typed names, so no
 * component needs to change if the CMS schema evolves.
 *
 * Not everything is admin-editable: nav structure/hrefs, route structure, the
 * 3D scene's internal parameters, and the `brand`/demo-disclosure identity
 * stay hardcoded here — see MEMORY.md for why.
 *
 * This is a MHTSdigiXR capability-showcase DEMO. "Beacon Ridge Multispecialty
 * Hospital" is a fictional brand. Do not replace these placeholders with a
 * real hospital's name, staff, contact details, or claims without going
 * through MHTSdigiXR's discovery + approval process first.
 */

import heroContent from "../../content/hero.json";
import signatureExperienceContent from "../../content/signature-experience.json";
import aboutContent from "../../content/about.json";
import departmentsContent from "../../content/departments.json";
import doctorsContent from "../../content/doctors.json";
import servicesContent from "../../content/services.json";
import healthPackagesContent from "../../content/health-packages.json";
import blogContent from "../../content/blog.json";
import galleryContent from "../../content/gallery.json";
import faqContent from "../../content/faq.json";
import footerContent from "../../content/footer.json";
import appointmentContent from "../../content/appointment.json";
import contactContent from "../../content/contact.json";
import insuranceContent from "../../content/insurance.json";
import careersContent from "../../content/careers.json";
import legalContent from "../../content/legal.json";

export const brand = {
  name: "Beacon Ridge Multispecialty Hospital",
  shortName: "Beacon Ridge",
  tagline: "Care, composed around you.",
  city: "Coimbatore",
  demoDisclosure: "Concept Website Demo",
  demoNote:
    "Built by MHTSdigiXR to showcase Premium-tier website capabilities. “Beacon Ridge Multispecialty Hospital” is a fictional hospital — no real facility, staff, patients, or contact details are represented. Nothing on this site is medical advice.",
};

export type NavLink = { label: string; href: string };

export const nav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Health Packages", href: "/health-packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Patient Resources", href: "/patient-resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "Insurance & Billing", href: "/insurance-billing" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export type HeroSlide = {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export const hero: { slides: HeroSlide[] } = heroContent;

export type SignatureBeat = { label: string; heading: string; body: string };
export const signatureExperience: {
  eyebrow: string;
  heading: string;
  body: string;
  fallbackNote: string;
  beats: SignatureBeat[];
} = signatureExperienceContent;

export type AboutContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  mission: string;
  values: { title: string; description: string }[];
  milestones: { year: string; label: string; description: string }[];
  accreditationNote: string;
  disclaimer: string;
};
export const about: AboutContent = aboutContent;

export type Department = {
  id: string;
  slug: string;
  name: string;
  icon: string;
  summary: string;
  overview: string;
  commonlyManaged: string[];
  approach: string;
  relatedDoctorIds: string[];
  relatedBlogSlugs: string[];
};
export type MoreSpecialty = { name: string; icon: string };
export const departments: {
  hubEyebrow: string;
  hubHeading: string;
  hubIntro: string;
  departments: Department[];
  moreSpecialties: MoreSpecialty[];
  disclaimer: string;
} = departmentsContent;

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.departments.find((department) => department.slug === slug);
}

export type Doctor = {
  id: string;
  name: string;
  initials: string;
  department: string;
  role: string;
  experienceYears: string;
  bio: string;
  focusAreas: string[];
};
export const doctors: {
  eyebrow: string;
  heading: string;
  intro: string;
  doctors: Doctor[];
  disclaimer: string;
} = doctorsContent;

export function getDoctorsByIds(ids: string[]): Doctor[] {
  return doctors.doctors.filter((doctor) => ids.includes(doctor.id));
}

export type Service = { title: string; description: string; icon: string };
export const services: {
  eyebrow: string;
  heading: string;
  intro: string;
  services: Service[];
  disclaimer: string;
} = servicesContent;

export type HealthPackage = {
  id: string;
  name: string;
  priceFrom: string;
  recommendedFor: string;
  includes: string[];
};
export const healthPackages: {
  eyebrow: string;
  heading: string;
  intro: string;
  packages: HealthPackage[];
  disclaimer: string;
} = healthPackagesContent;

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedDate: string;
  reviewedDate: string;
  readTime: string;
  relatedDepartmentSlug: string | null;
  body: string[];
};
export const blog: {
  eyebrow: string;
  heading: string;
  intro: string;
  posts: BlogPost[];
  disclaimer: string;
} = blogContent;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blog.posts.find((post) => post.slug === slug);
}

export type GalleryItem = { id: string; title: string; category: string; caption: string };
export const gallery: {
  eyebrow: string;
  heading: string;
  intro: string;
  items: GalleryItem[];
  disclaimer: string;
} = galleryContent;

export type FaqItem = { question: string; answer: string };
export type FaqGroup = { category: string; items: FaqItem[] };
export const faq: {
  eyebrow: string;
  heading: string;
  intro: string;
  groups: FaqGroup[];
  disclaimer: string;
} = faqContent;

export const footer = {
  about: footerContent.about,
  contactPlaceholder: footerContent.contactPlaceholder,
  social: footerContent.social,
};

export const appointment: {
  eyebrow: string;
  heading: string;
  body: string;
  departmentOptions: string[];
  visitTypeOptions: string[];
  preferredTimeOptions: string[];
  successMessage: string;
} = appointmentContent;

export const contact: {
  eyebrow: string;
  heading: string;
  body: string;
  subjectOptions: string[];
  successMessage: string;
  mapNote: string;
  whatsappMessage: string;
} = contactContent;

export type Insurer = { name: string; note: string };
export const insurance: {
  eyebrow: string;
  heading: string;
  intro: string;
  insurers: Insurer[];
  billingFaq: FaqItem[];
  disclaimer: string;
} = insuranceContent;

export type CareerOpening = { title: string; type: string; description: string };
export const careers: {
  eyebrow: string;
  heading: string;
  intro: string;
  openings: CareerOpening[];
  disclaimer: string;
} = careersContent;

export const legal: {
  privacy: { heading: string; intro: string; sections: { title: string; body: string }[] };
  terms: { heading: string; intro: string; sections: { title: string; body: string }[] };
} = legalContent;
