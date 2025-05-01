import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Post as PostType } from "@/types/post";

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const { content, likes, user } = post;
  const userInitial = user.name.charAt(0).toUpperCase();

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="text-gray-800 mb-2">{content}</p>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Button variant={"outline"} size={"icon"}>
          <Heart color="red" fill={likes.length > 0 ? "red" : "white"} size={18} />
        </Button>
        <span>({likes.length}) Likes</span>
        <Avatar className="size-6">
          <AvatarFallback className="bg-blue-400 text-white">
            {userInitial}
          </AvatarFallback>
        </Avatar>
        <span>{user.name}</span>
      </div>
    </div>
  );
};

export default Post;
