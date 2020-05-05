import * as express from "express";
import {ProvidersController} from "../controller/providers";

export module ProvidersRouter {
    export function buildRoutes(app: express.Application): void {

        /**
         * GET
         */
        app.get('/providers/:provider_id', ProvidersController.getProvider);

        /**
         * POST
         */
        app.post('/providers', ProvidersController.postProvider);

        /**
         * PUT
         */
        app.put('/providers/:provider_id', ProvidersController.putProvider);

        /**
         * DELETE
         */
        app.delete('/providers/:provider_id', ProvidersController.deleteProvider);

    }
}