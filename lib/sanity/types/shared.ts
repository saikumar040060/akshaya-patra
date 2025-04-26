export interface ApiResponse<T> {
    data: T;
    error?: string;
    success: boolean;
    statusCode: number;
  }
  
  export interface Pagination {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
  }