import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://athenamedia.co.za";

  // Define all routes in the application
  const routes = [
    "",
    "/company",
    "/contact",
    "/digital-marketing",
    "/location",
    "/web-development",
    "/website-analytics",
  ];

  // Get the current date for lastModified
  const date = new Date();

  // Create sitemap entries for each route
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: date,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  })) as MetadataRoute.Sitemap;
}
