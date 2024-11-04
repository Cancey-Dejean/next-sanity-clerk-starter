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

// import Avatar from "@/app/components/Avatar";
// import CoverImage from "@/app/components/CoverImage";
// import { MorePosts } from "@/app/components/Posts";
// import PortableText from "@/app/components/PortableText";
// import { sanityFetch } from "@/sanity/lib/live";
// import { postPagesSlugs, postQuery } from "@/sanity/lib/queries";
// import { resolveOpenGraphImage } from "@/sanity/lib/utils";

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

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params;
  const { data: post } = await sanityFetch({
    query: postQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors:
      post?.author?.firstName && post?.author?.lastName
        ? [{ name: `${post.author.firstName} ${post.author.lastName}` }]
        : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function PostPage(props: Props) {
  const params = await props.params;
  const [{ data: post }] = await Promise.all([
    sanityFetch({ query: postQuery, params }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <>
      <div className="">
        <div className="container my-12 grid gap-12 lg:my-24">
          <div>
            <div className="mb-6 grid gap-6 border-b border-gray-100 pb-6">
              <div className="flex max-w-3xl flex-col gap-6">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
                  {post.title}
                </h2>
              </div>
              <div className="flex max-w-3xl items-center gap-4">
                {post.author &&
                  post.author.firstName &&
                  post.author.lastName && (
                    <Avatar person={post.author} date={post.date} />
                  )}
              </div>
            </div>
            <article className="grid max-w-4xl gap-6">
              <div className="">
                <CoverImage image={post.coverImage} priority />
              </div>
              {post.content?.length && (
                <PortableText
                  className="max-w-2xl"
                  value={post.content as PortableTextBlock[]}
                />
              )}
            </article>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="container my-12 grid gap-12 lg:my-24">
          <aside>
            <Suspense>
              <MorePosts skip={post._id} limit={2} />
            </Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
