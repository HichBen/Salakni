import { Request, Response, NextFunction } from 'express';
export declare module ClientController {
    function findAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    function findOne(req: Request, res: Response, next: NextFunction): Promise<void>;
    function updateOne(req: Request, res: Response, next: NextFunction): Promise<void>;
    function remove(req: Request, res: Response, next: NextFunction): Promise<void>;
}
