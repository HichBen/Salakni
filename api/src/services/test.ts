const axios = require('axios');
import * as faker from "faker";

export module TestService {
    export async function getMeSomething() {
        const response = await axios.get('https://restcountries.eu/rest/v2/name/morocco');
        return response.data;
    }


    export async function getAllPeopleFromFaker() {
        //https://github.com/Marak/faker.js/wiki/Person
        const resultArray = [];
        for(let i = 0 ; i < 100 ; i++) {
           const fakePerson = {
               firstName: faker.name.firstName(),
               lastName: faker.name.firstName()
           }
           resultArray.push(fakePerson);
        }

        return resultArray;
    }

    export async function getRandomPersonFromFaker() {
        //https://github.com/Marak/faker.js/wiki/Person
        //const resultArray = [];

            const fakeClient = {
                findName: faker.name.findName(),
                username: faker.name.username(),
                email: faker.internet.email()
            }

        return fakeClient;
    }

    export async function postClientFaker() {
        //https://github.com/Marak/faker.js/wiki/Person
        //const resultArray = [];

        const fakeClient = {
            findName: faker.name.findName(),
            username : faker.name.username(),
            email : faker.internet.email(),
            password : faker.internet.password(),
            password2 : faker.internet.password()
        }

        return fakeClient;
    }

    export async function addPerson(personData: any) {
        return personData;
    }

    export async function updatePerson(user_id: string, personData: any) {
        return personData;
    }

    export async function deletePerson(user_id: string) {
        return user_id;
    }
}