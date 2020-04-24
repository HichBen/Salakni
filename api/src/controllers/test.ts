/**
 * @author: El Mehdi Moumni
 */

import {TestService} from "../services/test";


export module TestController {

    export async function getMeSomething(req, res, next) {
        try {
            const countryData = await TestService.getMeSomething();
            res.status(201).json(countryData);
        } catch (err) {
            next(err);
        }
    }

    export async function getAllPeopleFromFaker(req, res, next) {
        try {
            const fakerData = await TestService.getAllPeopleFromFaker();
            res.status(201).json(fakerData);
        } catch (err) {
            next(err);
        }
    }

    export async function getRandomPersonFromFaker(req, res, next) {
        try {
            const fakerData = await TestService.getRandomPersonFromFaker();
            res.status(201).json(fakerData);
        } catch (err) {
            next(err);
        }
    }

    export async function postClientFaker(req, res, next) {
        try {
            const fakerData = await TestService.postClientFaker();
            res.status(201).json(fakerData);
        } catch (err) {
            next(err);

        }
    }

    export async function addPerson(req, res, next) {
        try {
            const fakerData = await TestService.addPerson(req.body);
            res.status(201).json(fakerData);
        } catch (err) {
            next(err);

        }
    }

    export async function updatePerson(req, res, next) {
        try {
            const updatedPerson = await TestService.updatePerson(req.params.user_id, req.body);
            res.status(201).json(updatedPerson);
        } catch (err) {
            next(err);

        }
    }

    export async function deletePerson(req, res, next) {
        try {
            await TestService.deletePerson(req.params.user_id);
            res.status(201).json({});
        } catch (err) {
            next(err);

        }
    }
}
