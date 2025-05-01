import { AxiosResponse } from "axios";
import api from "@/lib/api";

import { UserResponse } from "@/types/user";

const FriendServices = {
  getFriendList: async (): Promise<UserResponse> => {
    const res: AxiosResponse<UserResponse> = await api.get("/users");
    return res.data;
  },
};

export default FriendServices;
