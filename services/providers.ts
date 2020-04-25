const axios = require('axios');
const faker = require('faker');

module.exports = {
     fetchProvider:  async function(provider_id : string) {
            const fakeProvider = {
                id: provider_id,
                name: faker.name.findName(),
                username: faker.random.alphaNumeric(faker.random.number({min:4, max:10})),
                email: faker.internet.email()
            }

        return fakeProvider;
    },

    createProvider: async function (providerData: object) {
        return providerData;
    },

    updateProvider: async function (provider_id: string, providerData: object) {
        return {id: provider_id, ...providerData};
    },

    deleteProvider: async function (provider_id: string) {
        return {id: provider_id};
    }
}