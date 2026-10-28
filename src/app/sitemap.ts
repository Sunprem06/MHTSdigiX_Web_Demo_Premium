import type { MetadataRoute } from "next";
import { departments, blog } from "@/content/site-content";

// Required for static export (output: "export") — see MEMORY.md 2026-10-29.
export const dynamic = "force-static";

const BASE_URL = "https://beaconridgehospital.example";

const STATIC_ROUTES = [
  "",
  "/about",
  "/departments",
  "/doctors",
  "/services",
  "/health-packages",
  "/blog",
  "/gallery",
  "/patient-resources",
  "/appointment",
  "/contact",
  "/insurance-billing",
  "/careers",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const departmentEntries = departments.departments.map((department) => ({
    url: `${BASE_URL}/departments/${department.slug}`,
    lastModified: new Date(),
  }));

  const blogEntries = blog.posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
  }));

  // /admin is intentionally excluded — see RULES.md.
  return [...staticEntries, ...departmentEntries, ...blogEntries];
}
