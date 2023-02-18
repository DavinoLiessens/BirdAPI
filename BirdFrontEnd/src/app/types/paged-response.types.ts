import { IPagination } from './pagination.types';

export interface PagedResponse<T> {
    pagination: IPagination;
    results: T[];
}