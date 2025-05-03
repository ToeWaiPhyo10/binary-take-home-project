"use client";

import Post from "@/components/Post";
import { useAuthStore } from "@/store/useAuthStore";
import { usePostsStore } from "@/store/usePostsStore";
import InfiniteScroll from "react-infinite-scroll-component";
import { Post as PostType } from "@/types/post";
import { useGetUserPost } from "@/hooks/userGetUserPosts";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function MyPosts() {
  const user = useAuthStore((state) => state.user);
  const posts = usePostsStore((state) => state.userPosts);
  const { fetchNextPage, hasNextPage, isLoading } = useGetUserPost({
    userId: user?.id!,
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">My Posts</h1>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <InfiniteScroll
            data-infinite-scroll
            data-posts-count={posts.length}
            dataLength={posts.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={
              <div className="text-center py-4">Loading more posts...</div>
            }
            endMessage={
              <div className="text-center py-4 text-gray-500">
                No more posts to load
              </div>
            }
          >
            <div className="space-y-6">
              {posts.map((post: PostType) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}
