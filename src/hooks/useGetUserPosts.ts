import PostServices from "@/services/postServices";
import { usePostsStore } from "@/store/usePostsStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Post } from "@/types/post";

interface PaginatedResponse {
  data: Post[];
  meta: {
    currentPage: number;
    totalPageCount: number;
  };
}

interface UseGetUserPostsProps {
  userId: number;
}

export const useGetUserPosts = ({ userId }: UseGetUserPostsProps) => {
  const appendUserPosts = usePostsStore((state) => state.appendUserPosts);

  return useInfiniteQuery<PaginatedResponse, Error>({
    queryKey: ["user-posts", { userId }],
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const response = await PostServices.getUserPostList({ 
        userId, 
        page: pageParam as number 
      });
      // Append new user posts to store
      appendUserPosts(response.data);
      return response;
    },
    getNextPageParam: (lastPage: PaginatedResponse) => {
      if (lastPage.meta.currentPage < lastPage.meta.totalPageCount) {
        return lastPage.meta.currentPage + 1;
      }
      return undefined;
    },
  });
};
