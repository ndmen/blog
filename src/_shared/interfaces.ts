export enum Role {
  User = 'user',
  Admin = 'admin',
}

export interface JwtPayload {
  username: string;
}
