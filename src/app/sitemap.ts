import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: "https://seusite.com",
      lastModified: new Date(),
    },
    {
      url: "https://seusite.com/sobre",
      lastModified: new Date(),
    },
  ];

  return staticUrls;
}
