declare module 'express-session' {
  export interface SessionData {
    isAuth?: boolean;
  }
}

export interface SessionData {
  isAuth?: boolean;
}
