export class Login {
  email: string;
  password: string;
}

export class LoginResponse {
  token: string;
  refreshToken: string;
  expiresAt: string;
  email: string;
}
