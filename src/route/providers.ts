import * as express from "express";
import {ProvidersController} from "../controller/providers";

export module ProvidersRouter {
    export function buildRoutes(app: express.Application): void {

        /**
         * GET
         */
        app.get('/api/providers', ProvidersController.getProviders);

        app.get('/api/providers/:provider_id', ProvidersController.getProvider);
        
        app.post('/api/providers/:provider_id/update', ProvidersController.updateProvider);
    }
}