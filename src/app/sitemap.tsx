import { sanityFetch } from "@/sanity/lib/live";
import { allPostsQuery, pagesSlugs } from "@/sanity/lib/queries";
import type { MetadataRoute } from "next";

export const revalidate = 3600; // revalidate at most every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [{ data: pages }, { data: posts }] = await Promise.all([
    sanityFetch({ query: pagesSlugs }),
    sanityFetch({ query: allPostsQuery }),
  ]);

  const page = pages.map((page: { slug: string | null }) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.5,
  }));

  const post = posts.map((post: { slug: string | null }) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/posts/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.5,
  }));

  return [
    {
      url: process.env.NEXT_PUBLIC_URL!,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...page,
    {
      url: `${process.env.NEXT_PUBLIC_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...post,
  ];
}
