import { Request, Response, NextFunction } from 'express';
export declare const isAuthenticated: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => void;
export declare const isGuest: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => void;
