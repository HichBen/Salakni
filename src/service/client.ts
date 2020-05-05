import Client from "../model/client";
import bcrypt from 'bcrypt'
import Provider from "../model/provider";

export module ClientService {

    export async function findAll() {
        try {
            const clients = Client.find({}).lean().exec();
            return clients;
        } catch (error) {
            console.log(error);
        }
    }

    export async function findOne(client_id: string) {
        try {
            const client = Client.find({ _id: client_id }).lean().exec();
            return client;
        } catch (error) {
            console.log(error);
        }
    }

    export async function updateOne(client_id: string, clientData: any) {
        try {
            let { name, password, email, confirm } = clientData
            const client = await Client.findOne({ _id: client_id })
            if(!client) return { success: false, message: 'No client with this id'}

            if(!name || !email) return { success: false, message: 'Please add email and name'}

            let providerFound = await Provider.findOne({ email: email, _id: { $ne: client_id } })
            let clientFound = await Client.findOne({ email: email, _id: { $ne: client_id } })

            if(clientFound || providerFound) return { success: false, message: 'Email already used'}

            if(password && confirm){
                if(password !== confirm) return { success: false, message: 'Passwords not the same'}

                const salt = await bcrypt.genSalt(10);
                password = await bcrypt.hash(password, salt);

                await Client.updateOne({ _id: client_id }, {
                    password,
                    email,
                    name
                })
            } else {
                await Client.updateOne({ _id: client_id }, {
                    email,
                    name
                })
            }

            return { success: true, message: 'Client updated' };
        } catch (error) {
            console.log(error);
        }
    }

    export async function remove(client_id: string) {
        try {
            const remove = await Client.findOneAndRemove({ _id: client_id });
            return remove;
        } catch (error) {
            console.log(error);
        }
    }

}
