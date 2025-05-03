import PostServices from "@/services/postServices";
import { useAuthStore } from "@/store/useAuthStore";
import { usePostsStore } from "@/store/usePostsStore";
import { useMutation } from "@tanstack/react-query";
import { UpdatePostResponse } from "@/types/post";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

interface CreatePostParams {
  content: string;
}

export const useCreatePost = () => {
  const user = useAuthStore((state) => state.user);
  const addPost = usePostsStore((state) => state.addPost);

  return useMutation<UpdatePostResponse, Error, CreatePostParams>({
    mutationFn: ({ content }) => PostServices.createPost({ content }),
    onSuccess: (newPost) => {
      if (user?.id) {
        toast.success("Post created successfully");
        addPost(newPost.data);
      }
    },
    onError: (error) => {
      toast.error("Failed to create post");
    },
  });
};
