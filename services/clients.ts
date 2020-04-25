/**
 * @author: El Mehdi Moumni
 */


const axios = require('axios');
const faker = require('faker');

module.exports = {
   
    fetchAllClients: async function () {
        //https://github.com/Marak/faker.js/wiki/Person
        const resultArray = [];
        for(let i = 0 ; i < 100 ; i++) {
           const fakePerson = {
                id: faker.random.number(faker.random.number({min:1, max:15})),
                name: faker.name.findName(),
                username: faker.random.alphaNumeric(faker.random.number({min:4, max:10})),
                email: faker.internet.email()
           }
           resultArray.push(fakePerson);
        }

        return resultArray;
    },

    fetchOneClient:  async function(client_id : string) {
        //https://github.com/Marak/faker.js/wiki/Person
        //const resultArray = [];

            const fakeClient = {
                id: client_id,
                name: faker.name.findName(),
                username: faker.random.alphaNumeric(faker.random.number({min:4, max:10})),
                email: faker.internet.email()
            }

        return fakeClient;
    },

    createClient: async function (clientData: object) {
        return clientData;
    },

    updateClient: async function (client_id: string, clientData: object) {
        return {id: client_id, ...clientData};
    },

    deleteClient: async function (client_id: string) {
        return {id: client_id};
    }
}