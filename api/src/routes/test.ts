import * as express from "express";
import {TestController} from "../controllers/test";

export module TestRouter {
    export function buildRoutes(app: express.Application): void {

        /**
         * GET
         */
        app.get('/test',
            TestController.getMeSomething);

        app.get('/get-all-people',
            TestController.getAllPeopleFromFaker);

        app.get('/get-random-person',
            TestController.getRandomPersonFromFaker);

        /**
         * POST
         */
        app.post('/add',
            TestController.addPerson);

        /**
         * PUT
         */
        app.put('/update/:user_id',
            TestController.updatePerson);

        /**
         * DELETE
         */
        app.delete('/delete/:user_id',
            TestController.deletePerson);

    }
}