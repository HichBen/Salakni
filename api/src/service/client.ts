/**
 * @author: El Mehdi Moumni
 */

import * as faker from "faker";

export module ClientService {

    //https://github.com/Marak/faker.js/wiki/Person


    export async function findAll() {
        const clientsArray = [];
        for(let i = 0 ; i < 100 ; i++) {
            const fakeClient = {
                id: faker.random.number(faker.random.number({min:1, max:15})),
                name: faker.name.findName(),
                username: faker.random.alphaNumeric(faker.random.number({min:4, max:10})),
                email: faker.internet.email()
            }
            clientsArray.push(fakeClient);
        }

        return clientsArray;
    }

    export async function findOne(client_id: string){

        const fakeClient = {
            id: client_id,
            name: faker.name.findName(),
            username: faker.random.alphaNumeric(faker.random.number({min:4, max:10})),
            email: faker.internet.email()
        }

        return fakeClient;
    }

    export async function create(clientData: object) {
        return clientData;
    }

    export async function update(client_id: string, clientData: object) {
        return {id: client_id, ...clientData};
    }

    export async function remove(client_id: string) {
        return {id: client_id};
    }

}
