import { Post } from "@/types/post";
import { create } from "zustand";

interface PostsState {
  posts: Post[];
  userPosts: Post[];
  appendPosts: (newPosts: Post[]) => void;
  appendUserPosts: (newPosts: Post[]) => void;
  updatePost: (updatedPost: Post) => void;
  likePost: (postId: number, userId: number) => void;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  userPosts: [],
  appendPosts: (newPosts) =>
    set((state) => {
      const uniquePosts = newPosts.filter(
        (newPost) => !state.posts.some((post) => post.id === newPost.id)
      );
      return {
        posts: [...state.posts, ...uniquePosts],
      };
    }),
  appendUserPosts: (newPosts) =>
    set((state) => {
      const uniquePosts = newPosts.filter(
        (newPost) => !state.userPosts.some((post) => post.id === newPost.id)
      );
      return {
        userPosts: [...state.userPosts, ...uniquePosts],
      };
    }),
  updatePost: (updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      ),
      userPosts: state.userPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      ),
    })),
  likePost: (postId, userId) =>
    set((state) => {
      const updatePostLikes = (post: Post) => {
        if (post.id !== postId) return post;
        
        const likes = new Set(post.likes);
        if (likes.has(userId)) {
          likes.delete(userId);
        } else {
          likes.add(userId);
        }
        
        return {
          ...post,
          likes: Array.from(likes),
        };
      };

      return {
        posts: state.posts.map(updatePostLikes),
        userPosts: state.userPosts.map(updatePostLikes),
      };
    }),
}));
