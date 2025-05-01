import PostServices from "@/services/postServices";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post } from "@/types/post";

interface UpdatePostParams {
  postId: number;
  content: string;
}

export const useUpdatePost = () => {
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();

  return useMutation<Post, Error, UpdatePostParams>({
    mutationFn: ({ postId, content }) =>
      PostServices.updatePostById({ postId, content }),
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
