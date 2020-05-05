import * as express from "express";
import {ClientController} from "../controller/client";

export module ClientRouter {
    export function buildRoutes(app: express.Application): void {

        /**
         * GET
         */
        app.get('/clients', ClientController.findAll);

        app.get('/clients/:client_id', ClientController.findOne);

        /**
         * POST
         */
        app.post('/clients', ClientController.create);

        /**
         * PUT
         */
        app.put('/clients/:client_id', ClientController.update);

        /**
         * DELETE
         */
        app.delete('clients/:client_id', ClientController.remove);



    }
}