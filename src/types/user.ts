export interface UserResponse {
  data: User[];
  total_user: number;
}
export interface User {
  id: number;
  name: string;
  picture: string;
  password: string;
}
