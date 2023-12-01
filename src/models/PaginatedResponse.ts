export type PaginatedResponse<T> = {
  currentPage: number;
  hasMore: boolean;
  pageCount: number;
  data: T[];
  total: number;
};
