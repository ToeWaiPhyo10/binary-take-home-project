import { AxiosResponse } from "axios";
import api from "@/lib/api";
import { PostsResponse } from "@/types/post";

const PostServices = {
  getPostsByPagination: async ({
    page,
  }: {
    page: number;
  }): Promise<PostsResponse> => {
    const res: AxiosResponse<PostsResponse> = await api.get(
      `/posts?page=${page}`
    );
    return res.data;
  },
};

export default PostServices;
