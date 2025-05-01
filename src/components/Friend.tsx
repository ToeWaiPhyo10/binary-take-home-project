import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { User } from "@/types/user";

const Friend = ({ friend }: { friend: User }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-2">
      <h2 className="font-semibold">Friend ID: {friend.id}</h2>
      <div className="flex flex-row items-center gap-2">
        <Avatar className="size-6">
          <AvatarFallback className="bg-blue-400 text-white">
            {friend.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span>{friend.name}</span>
      </div>
    </div>
  );
};

export default Friend;
