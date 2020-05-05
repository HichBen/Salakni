import Provider from "../model/provider";
import bcrypt from 'bcrypt'
import Client from "../model/client";

export module ProvidersService {
    export async function getProviders() {
        let providers = await Provider.find({})
        return { success: true, data: providers }
    }

    export async function getProvider(id:any) {
        let provider = await Provider.findOne({ _id: id})
        return { success: true, data: provider }
    }

    export async function updateProvider(id:any, providerData: any) {
        try {
            let { name, password, email, confirm } = providerData
            const provider = await Provider.findOne({ _id: id })
            if(!provider) return { success: false, message: 'No provider with this id'}

            if(!name || !email) return { success: false, message: 'Please add email and name'}

            let providerFound = await Provider.findOne({ email: email, _id: { $ne: id } })
            let clientFound = await Client.findOne({ email: email, _id: { $ne: id } })

            if(clientFound || providerFound) return { success: false, message: 'Email already used'} 

            if(password && confirm){
                if(password !== confirm) return { success: false, message: 'Passwords not the same'}

                const salt = await bcrypt.genSalt(10);
                password = await bcrypt.hash(password, salt);

                await Provider.updateOne({ _id: id }, {
                    password,
                    email,
                    name
                })
            } else {
                await Provider.updateOne({ _id: id }, {
                    email,
                    name
                })
            }

            return { success: true, message: 'Client updated' };
        } catch (error) {
            console.log(error);
        }
    }
}
