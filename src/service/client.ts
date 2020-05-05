/**
 * @author: El Mehdi Moumni
 */

import * as faker from "faker";

export module ClientService {

    //https://github.com/Marak/faker.js/wiki/Person

    let clients = [];

    export async function generateFakeClients(){
        for(let i = 0 ; i < 100 ; i++) {
            const fakeClient = {
                id: faker.random.number(faker.random.number({min:1, max:15})),
                name: faker.name.findName(),
                email: faker.internet.email()
            }
            clients.push(fakeClient);
        }
    }

    export async function findAll() {
        return clients;
    }

    export async function findOne(client_id: string){

        //Check if client exists
        for(let client of clients) {
            if(client.id == client_id){
                return client;
            }
        }

        //If client does not exist, return fake client
        const fakeClient = {
            id: client_id,
            name: faker.name.findName(),
            username: faker.random.alphaNumeric(faker.random.number({min:4, max:10})),
            email: faker.internet.email()
        }

        return fakeClient;
    }

    export async function create(clientData: any) {
        clients.push(clientData);
        return clientData;
    }

    export async function update(client_id: string, clientData: any) {
        for(let client of clients) {
            if(client.id == client_id){
                client.name = clientData.name;
                client.email = clientData.email;
                client.password = clientData.password;
                return  client;
            }
        }

        return {};

    }

    export async function remove(client_id: string) {
        return {id: client_id};
    }

}
