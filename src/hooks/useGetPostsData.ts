import PostServices from "@/services/postServices";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetPostsData = () => {
  const query = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam = 1 }) =>
      PostServices.getPostsByPagination({ page: pageParam }),
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
