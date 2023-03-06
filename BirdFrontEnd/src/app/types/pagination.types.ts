export interface IPagination {
    currentPage: number;
    amountOfPages: number;
    pageSize: number;
    totalAmount: number;
}

export interface IPaginationRequest {
    page?: number;
    pageSize?: number;
}

export interface ISearchRequest {
    searchValue?: string;
}