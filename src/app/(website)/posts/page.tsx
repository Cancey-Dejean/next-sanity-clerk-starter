import Posts from "@/components/ui/Blog/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { allPostsQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: posts } = await sanityFetch({
    query: allPostsQuery,
  });

  console.log(posts.length);

  if (posts.length < 1) return <div>No posts</div>;

  return <Posts posts={posts} />;
}
