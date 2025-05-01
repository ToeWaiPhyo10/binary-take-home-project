"use client";
import Friend from "@/components/Friend";
import { useGetFriendsData } from "@/hooks/useFriendData";
import { User } from "@/types/user";

export default function FriendsPage() {
  const { data } = useGetFriendsData();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Friends</h1>
      <div className="space-y-6">
        {data?.data.map((friend: User) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
