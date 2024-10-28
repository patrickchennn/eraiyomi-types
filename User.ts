export interface User{
  _id: string
  userId: string,
  username: string,
  name:string|undefined,
  email: string,
  profilePictureUrl: string,
  statusReq?:"fail"|"success"|"loading"
}
export type HTTPGetUserRes = Omit<User, "statusReq">;


export interface ReqBodyLoginTraditional {
  username: string;
  email: string;
  password: string
}

export interface ReqBodyRegisterUser{
  username: string;
  email: string;
  password: string
}