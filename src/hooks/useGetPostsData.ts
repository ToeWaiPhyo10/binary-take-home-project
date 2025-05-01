import PostServices from "@/services/postServices";
import { useInfiniteQuery } from "@tanstack/react-query";

interface UseGetPostsDataProps {
  userId?: number;
}

export const useGetPostsData = ({ userId }: UseGetPostsDataProps = {}) => {
  const query = useInfiniteQuery({
    queryKey: ["posts", { userId }],
    queryFn: async ({ pageParam = 1 }) =>
      userId
        ? PostServices.getUserPostList({ userId, page: pageParam })
        : PostServices.getPostsByPagination({ page: pageParam }),
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
