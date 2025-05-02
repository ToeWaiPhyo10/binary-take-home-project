import PostServices from "@/services/postServices";
import { usePostsStore } from "@/store/usePostsStore";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetPostsData = () => {
  const appendPosts = usePostsStore((state) => state.appendPosts);

  const query = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await PostServices.getPostsByPagination({ page: pageParam });
      // Append new posts to store
      appendPosts(response.data);
      return response;
    },
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
