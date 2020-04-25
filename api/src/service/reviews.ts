/**
 * @author: Mostafa Elebiary
 */

import * as faker from "faker";

export module ReviewsService {

    //https://github.com/Marak/faker.js/wiki/Person


    export async function findAll() {
        const reviewsArray = [];
        for(let i = 0 ; i < 100 ; i++) {
            const fakeClient = {
                id: faker.random.number(faker.random.number({min:1, max:15})),
                clientid: faker.random.number(faker.random.number({min:1, max:15})),
                body: faker.lorem.paragraph(),
                rating: faker.random.number({min:1, max:5}),
            }
            reviewsArray.push(fakeClient);
        }

        return reviewsArray;
    }

    export async function findOne(review_id: string){

        const fakeClient = {
            id: faker.random.number(faker.random.number({min:1, max:15})),
            clientid: faker.random.number(faker.random.number({min:1, max:15})),
            body: faker.lorem.paragraph(),
            rating: faker.random.number({min:1, max:5}),
        }

        return fakeClient;
    }

    export async function create(reviewData: object) {
        return reviewData;
    }

    export async function update(review_id: string, reviewData: object) {
        return {id: review_id, ...reviewData};
    }

    export async function remove(client_id: string) {
        return {id: client_id};
    }

}
