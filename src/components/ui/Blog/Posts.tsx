"use client";

import { useState } from "react";
import PostCard from "../Cards/PostCard";
import { Button } from "../Button";
import Container from "../container";
import { PostProps } from "@/types";

export default function Posts({ posts }: { posts: PostProps[] }) {
  const articlesShown = 3;
  const [loadMore, setLoadMore] = useState(articlesShown);
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown);
  };

  return (
    <section className="h-full py-12">
      <Container>
        <ul className="grid grid-cols-3 gap-8">
          {posts?.length > 0 ? (
            posts.slice(0, loadMore).map((post, index) => (
              <li key={index}>
                <PostCard post={post} />
              </li>
            ))
          ) : (
            <h2 className="p-4 text-red-500">No posts created</h2>
          )}
        </ul>

        {posts?.length > 3 && (
          <div className="mt-8 flex flex-col items-center text-center">
            {loadMore < posts?.length ? (
              <Button onClick={showMoreArticles}>Load More Articles</Button>
            ) : (
              <p className="mt-8 flex justify-center">No more articles.</p>
            )}

            {loadMore < posts?.length && (
              <p className="mt-8 flex justify-center">
                Showing {loadMore} of {posts?.length} articles
              </p>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
