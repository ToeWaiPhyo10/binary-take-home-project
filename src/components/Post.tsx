import React, { useState } from "react";

import { Button } from "./ui/button";
import { Heart, Pencil, X } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Post as PostType } from "@/types/post";
import { useUpdatePost } from "@/hooks/useUpdatePost";
import { set } from "react-hook-form";
import { useAuthStore } from "@/store/useAuthStore";
import { useLikePost } from "@/hooks/useLikePost";

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const userData = useAuthStore((state) => state.user);
  const { content, likes, user } = post;
  const userInitial = user.name.charAt(0).toUpperCase();
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const updatePost = useUpdatePost();
  const likePost = useLikePost();

  const handleSave = () => {
    updatePost.mutate({ postId: post.id, content: editContent });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow relative">
      <div className="absolute top-4 right-4">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          {!isEditing ? (
            <Pencil className="h-4 w-4" />
          ) : (
            <X className="h-4 w-4" />
          )}
        </Button>
      </div>

      {isEditing ? (
        <div className="mb-2">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-2 border rounded-md mb-2 min-h-[100px]"
          />
          <Button onClick={handleSave} className="w-full">
            Save
          </Button>
        </div>
      ) : (
        <p className="text-gray-800 mb-2 pr-8">{editContent}</p>
      )}

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => likePost.mutate({ postId: post.id })}
        >
          <Heart
            color="red"
            fill={likes.includes(userData?.id ?? 0) ? "red" : "white"}
            size={18}
          />
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
