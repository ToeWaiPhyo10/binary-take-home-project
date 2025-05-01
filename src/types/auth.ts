export interface AuthResponse {
  data: {
    id: number;
    name: string;
    picture: string;
    token: string;
  };
}

export interface LoginCredentials {
  name: string;
  password: string;
}
