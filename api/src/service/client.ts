/**
 * @author: El Mehdi Moumni
 */

import * as faker from "faker";
import {ClientModel} from "../model/client";


export module ClientService {

    //https://github.com/Marak/faker.js/wiki/Person

    export async function generateFakeClients(){
        for(let i = 0 ; i < 100 ; i++) {
            const fakeClient = {
                fullName: faker.name.findName(),
                email: faker.internet.email(),
                password: "123456"
            };

            const newClient =  new ClientModel.object(fakeClient);
            await newClient.save()
        }
    }

    export async function findAll() {
        try {
            const clients = ClientModel.object.find({}).lean().exec();
            return clients;
        } catch (error) {
            console.log(error);
        }
    }

    export async function findOne(client_id: string){
        try {
            const client = ClientModel.object.find({_id: client_id}).lean().exec();
            return client;
        } catch (error) {
            console.log(error);
        }
    }

    export async function create(clientData: any) {
        try {
            const newClient = new ClientModel.object(clientData)
            return newClient.save();
        } catch (error) {
            console.log(error);
        }
    }

    export async function update(client_id: string, clientData: any) {
        try {
            const updatedClient = await ClientModel.object.updateOne({_id: client_id}, { $set: clientData});
            return updatedClient;
        } catch (error) {
            console.log(error);
        }

    }

    export async function remove(client_id: string) {
        try {
            const remove = await ClientModel.object.findOneAndRemove({_id: client_id});
            return remove;
        } catch (error) {
            console.log(error);
        }
    }

}
