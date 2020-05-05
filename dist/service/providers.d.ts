export declare module ProvidersService {
    function getProviders(): Promise<{
        success: boolean;
        data: import("../model/provider").IProvider[];
    }>;
    function getProvider(id: any): Promise<{
        success: boolean;
        data: import("../model/provider").IProvider;
    }>;
    function updateProvider(id: any, providerData: any): Promise<{
        success: boolean;
        message: string;
    }>;
}
