import * as faker from "faker";

export module ProvidersService {
    export async function fetchProvider(provider_id : string) {
            const fakeProvider = {
                id: provider_id,
                name: faker.name.findName(),
                username: faker.random.alphaNumeric(faker.random.number({min:4, max:10})),
                email: faker.internet.email()
            }

        return fakeProvider;
    }

    export async function createProvider(providerData: object) {
        return providerData;
    }

    export async function updateProvider(provider_id: string, providerData: object) {
        return {id: provider_id, ...providerData};
    }

    export async function deleteProvider(provider_id: string) {
        return {id: provider_id};
    }
}
