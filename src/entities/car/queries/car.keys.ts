export const CAR_QUERY_KEYS = {
  all: ['cars'] as const,
  carDetail: (id: number) => [...CAR_QUERY_KEYS.all, 'detail', id] as const
};
