import { Request, Response, NextFunction } from 'express';
export declare module AuthController {
    function create(req: Request, res: Response, next: NextFunction): Promise<void>;
    function login(req: Request, res: Response, next: NextFunction): Promise<void>;
    function getUser(req: Request, res: Response, next: NextFunction): Promise<Response<any>>;
    function addPic(req: Request, res: Response, next: NextFunction): Promise<void>;
    function logout(req: Request, res: Response, next: NextFunction): Promise<void>;
}
