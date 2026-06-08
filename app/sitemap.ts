import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.hossein-sotoudeh.ir",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://www.hossein-sotoudeh.ir/images/profile.png",
        "https://www.hossein-sotoudeh.ir/images/حسین_ستوده.jpg",
      ],
    },
  ];
}
