import { Posts } from "@/components/ui/Blog/Posts";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY);

  console.log(posts);

  return <Posts posts={posts} />;
}
