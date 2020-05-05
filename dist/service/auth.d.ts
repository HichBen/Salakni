/**
 * @author: El Mehdi Moumni
 */
export declare module AuthService {
    function create(clientData: any): Promise<import("../model/client").IClient | import("../model/provider").IProvider | {
        success: boolean;
        message: string;
    }>;
}
