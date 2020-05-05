export declare module ClientService {
    function findAll(): Promise<Pick<import("../model/client").IClient, "_id" | "email" | "password" | "name" | "photo" | "phone" | "address" | "type">[]>;
    function findOne(client_id: string): Promise<Pick<import("../model/client").IClient, "_id" | "email" | "password" | "name" | "photo" | "phone" | "address" | "type">[]>;
    function updateOne(client_id: string, clientData: any): Promise<{
        success: boolean;
        message: string;
    }>;
    function remove(client_id: string): Promise<import("../model/client").IClient>;
}
