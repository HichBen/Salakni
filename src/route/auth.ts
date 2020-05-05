import * as express from "express";
import {AuthController} from "../controller/auth";

export module AuthRouter {
    export function buildRoutes(app: express.Application): void {
        /**
         * POST
         */
        app.post('/register', AuthController.create);

        /**
         * POST
         */
        app.post('/login', AuthController.login);
        
        app.get('/logout', AuthController.logout);

        /**
         * GET
         */
        app.get('/getuser', AuthController.getUser);

        /**
         * GET
         */
        app.get('/addpic', AuthController.addPic);
    }
}