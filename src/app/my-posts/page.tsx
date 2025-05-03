"use client";

import Post from "@/components/Post";
import { useAuthStore } from "@/store/useAuthStore";
import { usePostsStore } from "@/store/usePostsStore";
import InfiniteScroll from "react-infinite-scroll-component";
import { Post as PostType } from "@/types/post";
import { useGetUserPost } from "@/hooks/userGetUserPosts";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useCreatePost } from "@/hooks/useCreatePost";

export default function MyPosts() {
  const user = useAuthStore((state) => state.user);
  const posts = usePostsStore((state) => state.userPosts);
  const { fetchNextPage, hasNextPage, isLoading } = useGetUserPost({
    userId: user?.id!,
  });
  const createPost = useCreatePost();
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleCreatePost = async () => {
    try {
      await createPost.mutateAsync({ content });
      setContent("");
      setIsOpen(false);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Posts</h1>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button>Create Post</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a new post</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Textarea
                  placeholder="What's on your mind?"
                  value={content}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setContent(e.target.value)
                  }
                  className="min-h-[100px]"
                />
                <Button
                  onClick={handleCreatePost}
                  className="w-full"
                  disabled={createPost.isPending}
                >
                  {createPost.isPending ? "Posting..." : "Post"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
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
