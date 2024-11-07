import { morePostsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Post as PostType } from "../../sanity.types";

export const Post = (post: PostType) => {
  const { _id, title } = post;

  return (
    <article
      key={_id}
      className="flex max-w-xl flex-col items-start justify-between"
    >
      <div className="text-sm text-gray-500">
        {/* <DateComponent dateString={date} />
         */}{" "}
        date
      </div>

      <h3 className="mt-3 text-2xl font-semibold">
        {title}
        {/* <Link
          className="underline transition-colors hover:text-red-500"
          href={`/posts/${slug}`}
        >

        </Link> */}
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
        {/* {excerpt} */}
        excerpt
      </p>
    </article>
  );
};

type PostsProps = {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
};

const Posts = ({ children, heading, subHeading }: PostsProps) => (
  <div>
    {heading && (
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>
    )}
    <div className="mt-6 space-y-12 border-t border-gray-200 pt-6">
      {children}
    </div>
  </div>
);

type MorePostsProps = {
  skip: string;
  limit: number;
};

export const MorePosts = async ({ skip, limit }: MorePostsProps) => {
  const { data } = await sanityFetch({
    query: morePostsQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts heading={`Recent blog posts from Sanity (${data?.length})`}>
      <div className="flex justify-between gap-4">
        {data?.map((post: PostProps) => (
          // <Link key={post._id} href={`/posts/${post.slug}`}>
          //   {post.title}
          // </Link>
          <p key={post._id}>{post.title}</p>
        ))}
      </div>
    </Posts>
  );
};
