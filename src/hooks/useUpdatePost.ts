import PostServices from "@/services/postServices";
import { usePostsStore } from "@/store/usePostsStore";
import { useMutation } from "@tanstack/react-query";
import { Post, UpdatePostResponse } from "@/types/post";

interface UpdatePostParams {
  postId: number;
  content: string;
}

export const useUpdatePost = () => {
  const updatePost = usePostsStore((state) => state.updatePost);

  return useMutation<UpdatePostResponse, Error, UpdatePostParams>({
    mutationFn: ({ postId, content }) =>
      PostServices.updatePostById({ postId, content }),
    onSuccess: (updatedPost) => {
      // Update both posts and userPosts in the store
      updatePost(updatedPost.data);
    },
  });
};
