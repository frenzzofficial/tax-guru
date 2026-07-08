import type { MetadataRoute } from "next";
import { BASE_URL } from "@/packages/configs/app.config";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/thank-you"],
    },
  ],
  sitemap: `${BASE_URL}/sitemap.xml`,
});

export default robots;
