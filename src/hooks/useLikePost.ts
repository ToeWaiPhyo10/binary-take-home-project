import PostServices from "@/services/postServices";
import { useAuthStore } from "@/store/useAuthStore";
import { usePostsStore } from "@/store/usePostsStore";
import { useMutation } from "@tanstack/react-query";
import { Post } from "@/types/post";

interface LikePostParams {
  postId: number;
}

export const useLikePost = () => {
  const user = useAuthStore((state) => state.user);
  const likePost = usePostsStore((state) => state.likePost);

  return useMutation<Post, Error, LikePostParams>({
    mutationFn: ({ postId }) => PostServices.likeByPostId({ postId }),
    onSuccess: (updatedPost, { postId }) => {
      if (user?.id) {
        // Update both posts and userPosts in the store
        likePost(postId, user.id);
      }
    },
  });
};
