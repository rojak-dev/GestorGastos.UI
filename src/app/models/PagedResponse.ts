export interface PagedResponse<T>{
    total: number;
    items: T[];
}