import { POSTS_QUERYResult } from "../../../../sanity.types";

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts.map(({ title, slug }) => (
        <li key={title}>
          <a
            className="block p-4 hover:bg-blue-50"
            href={`/posts/${slug?.current}`}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
