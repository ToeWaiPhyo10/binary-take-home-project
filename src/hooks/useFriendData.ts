import FriendServices from "@/services/friendServices";
import { useQuery } from "@tanstack/react-query";

export const useGetFriendsData = () => {
  const query = useQuery({
    queryKey: ["friends"],
    queryFn: async () => FriendServices.getFriendList(),
  });
  return query;
};
