import PostServices from "@/services/postServices";
import { useAuthStore } from "@/store/useAuthStore";
import { Post } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface LikePostParams {
  postId: number;
}
export const useLikePost = () => {
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();

  return useMutation<Post, Error, LikePostParams>({
    mutationFn: ({ postId }) => PostServices.likeByPostId({ postId }),
    onSuccess: () => {
      if (user?.id) {
        queryClient.invalidateQueries({
          queryKey: ["user-posts", { userId: user.id }],
        });
      }
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
};
