import * as express from "express";
import {ClientController} from "../controller/client";

export module ClientRouter {
    export function buildRoutes(app: express.Application): void {

        /**
         * GET
         */
        app.get('/clients', ClientController.findAll);

        app.get('/clients/:client_id', ClientController.findOne);

        app.post('/clients/:client_id/update', ClientController.updateOne);

        /**
         * DELETE
         */
        app.delete('clients/:client_id', ClientController.remove);



    }
}