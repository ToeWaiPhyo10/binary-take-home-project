import { AxiosResponse } from "axios";
import api from "@/lib/api";
import { Post, PostsResponse, UpdatePostResponse } from "@/types/post";

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
  getUserPostList: async ({
    userId,
    page,
  }: {
    userId: number;
    page: number;
  }) => {
    const res: AxiosResponse<PostsResponse> = await api.get(
      `/users/${userId}/posts?page=${page}`
    );
    return res.data;
  },
  updatePostById: async ({
    postId,
    content,
  }: {
    postId: number;
    content: string;
  }) => {
    const res: AxiosResponse<UpdatePostResponse> = await api.post(
      `/posts/${postId}`,
      {
        content,
      }
    );
    return res.data;
  },

  likeByPostId: async ({ postId }: { postId: number }) => {
    const res: AxiosResponse<Post> = await api.post(`/posts/${postId}/like`);
    return res.data;
  },
};

export default PostServices;
