import { Request, Response, NextFunction } from 'express';
export declare module ProvidersController {
    function getProviders(req: Request, res: Response, next: NextFunction): Promise<void>;
    function getProvider(req: Request, res: Response, next: NextFunction): Promise<void>;
    function updateProvider(req: Request, res: Response, next: NextFunction): Promise<void>;
}
