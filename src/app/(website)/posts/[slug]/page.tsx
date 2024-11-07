import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { postPagesSlugs, postQuery } from "@/sanity/lib/queries";

import { MorePosts } from "@/components/Posts";
import Container from "@/components/ui/container";

type Props = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: {
    template: "%s | Posts",
    default: "Posts",
  },
  description: "Posts",
  twitter: {
    title: "Posts",
    description: "Posts",
    card: "summary_large_image",
  },
};

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: postPagesSlugs,
    perspective: "published",
    stega: false,
  });
  return data;
}

export default async function PostPage(props: Props) {
  const params = await props.params;
  const [{ data: post }] = await Promise.all([
    sanityFetch({
      query: postQuery,
      params: { slug: params.slug },
    }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <>
      <article className="py-20">
        <Container>
          <div>{post.title}</div>
        </Container>
      </article>

      <section className="border-t border-gray-100">
        <Container className="my-12 grid gap-12 lg:my-24">
          <aside>
            <Suspense>
              <MorePosts skip={post._id} limit={2} />
            </Suspense>
          </aside>
        </Container>
      </section>
    </>
  );
}
