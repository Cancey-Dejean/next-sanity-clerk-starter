import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { type PortableTextBlock } from "next-sanity";
import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { postPagesSlugs, postQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import Avatar from "@/components/Avatar";
import CoverImage from "@/components/CoverImage";
import PortableText from "@/components/PortableText";
import { MorePosts } from "@/components/Posts";
import Container from "@/components/ui/container";

type Props = {
  params: Promise<{ slug: string }>;
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
