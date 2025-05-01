"use client";
import Post from "@/components/Post";
import { useGetPostsData } from "@/hooks/useGetPostsData";
import InfiniteScroll from "react-infinite-scroll-component";
import { Post as PostType } from "@/types/post";

export default function Home() {
  const { data, fetchNextPage, hasNextPage } = useGetPostsData();

  const posts = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Home</h1>
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<div className="text-center py-4">Loading more posts...</div>}
          endMessage={
            <div className="text-center py-4 text-gray-500">
              No more posts to load
            </div>
          }
        >
          <div className="space-y-6">
            {posts.map((post: PostType, index: number) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
