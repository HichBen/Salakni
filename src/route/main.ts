import * as express from "express";
import { Request, Response, NextFunction} from 'express'
import path from 'path'
import { isAuthenticated, isGuest } from '../config/passport'

export module MainRouter {
    export function buildRoutes(app: express.Application): void {

        /**
         * GET
         */
        app.get('/', (req:Request, res:Response, next:NextFunction) => {
            // console.log(req.user)
            res.sendFile(path.join(__dirname+'../../../views/index.html'));
        });

        app.get('/login', isGuest, (req:Request, res:Response, next:NextFunction) => {
            res.sendFile(path.join(__dirname+'../../../views/login.html'));
        });

        app.get('/register', isGuest, (req:Request, res:Response, next:NextFunction) => {
            res.sendFile(path.join(__dirname+'../../../views/signup.html'));
        });

        app.get('/providers', isAuthenticated, (req:Request, res:Response, next:NextFunction) => {
            res.sendFile(path.join(__dirname+'../../../views/providers.html'));
        });

        app.get('/provider', (req:Request, res:Response, next:NextFunction) => {
            res.sendFile(path.join(__dirname+'../../../views/providerPage.html'));
        });

        app.get('/user', isAuthenticated, (req:Request, res:Response, next:NextFunction) => {
            res.sendFile(path.join(__dirname+'../../../views/user.html'));
        });
    }
}