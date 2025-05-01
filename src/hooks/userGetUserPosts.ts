import PostServices from "@/services/postServices";
import { useInfiniteQuery } from "@tanstack/react-query";

interface UseGetPostsDataProps {
  userId: number;
}

export const useGetUserPost = ({ userId }: UseGetPostsDataProps) => {
  const query = useInfiniteQuery({
    queryKey: ["user-posts", { userId }],
    queryFn: async ({ pageParam = 1 }) =>
      await PostServices.getUserPostList({ userId, page: pageParam }),

    getNextPageParam: (lastPage) => {
      if (lastPage.meta.currentPage < lastPage.meta.totalPageCount) {
        return lastPage.meta.currentPage + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
  return query;
};
