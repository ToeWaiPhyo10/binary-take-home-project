import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Friend = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-2">
      <h2 className="font-semibold">Friend ID: 1</h2>
      <div className="flex flex-row items-center gap-2">
        <Avatar className="size-6">
          <AvatarFallback className="bg-blue-400 text-white">A</AvatarFallback>
        </Avatar>
        <span>Alex</span>
      </div>
    </div>
  );
};

export default Friend;
