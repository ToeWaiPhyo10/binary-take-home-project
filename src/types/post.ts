export interface User {
  id: number;
  name: string;
  picture: string;
}

export interface Post {
  id: number;
  user_id: number;
  content: string;
  likes: number[];
  video_url: string;
  user: User;
}

export interface PostsResponse {
  data: Post[];
  meta: {
    total_post: number;
    currentPage: number;
    totalPageCount: number;
  };
}

export interface UpdatePostResponse {
  data: Post;
}
