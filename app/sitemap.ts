import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://www.hossein-sotoudeh.ir/_next/image?url=%2Fimages%2Fprofile.png&w=1920&q=75",
        "https://www.hossein-sotoudeh.ir/_next/image?url=%2Fimages%2F%D8%AD%D8%B3%DB%8C%D9%86_%D8%B3%D8%AA%D9%88%D8%AF%D9%87.jpg&w=1920&q=75",
      ],
    },
  ];
}
