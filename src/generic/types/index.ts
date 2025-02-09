

export interface UserServerResponse {
    status: number
    message: string
    data: UserInfo
}

export interface UserInfo {
    id: string
    email: string
    phoneNumber: string
    firstName: string
    lastName: string
    isActive: boolean
    shippingAddress: string
    currency: string
    roles: Role[]
}

export interface Role {
    id: string
    name: string
    createdAt: string
    updatedAt: string
}

export interface ServerResponseError {
    message: string[]
    statusCode: number
    status?: number
    error: string
}

export type UserSignUp = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export type UserLogin = {
    email: string
    password: string
}

export interface ServerAuthResponse {
    status: number
    message: string
    data: Data
  }
  
  export interface Data {
    accessToken: string
    refreshToken: string
  }

export type RefleshtToken = {
    token: string
}