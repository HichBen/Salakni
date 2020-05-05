/**
 * @author: Mostafa Elebiary
 */
export declare module ReviewsService {
    function findAll(): Promise<any[]>;
    function findOne(review_id: string): Promise<{
        id: number;
        clientid: number;
        body: string;
        rating: number;
    }>;
    function create(reviewData: object): Promise<object>;
    function update(review_id: string, reviewData: object): Promise<{
        id: string;
    }>;
    function remove(client_id: string): Promise<{
        id: string;
    }>;
}
