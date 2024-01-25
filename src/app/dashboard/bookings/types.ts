export interface FilterOptions {
    // used for table searching
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    gender?: string;
    dateBooked?: string;
    bookedBy?: string;
    completeDetails?: string;
}

export interface SearchParams extends FilterOptions {
    page?: string;
    rowsPerPage?: string;
}

export interface PageProps {
    searchParams: SearchParams;
}
