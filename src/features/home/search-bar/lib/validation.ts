import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

const searchBarSchemaRaw = z.object({
  startDate: z.string().date(),

  endDate: z.string().date(),

  search: z.string()
});

export const searchBarSchema = toTypedSchema(searchBarSchemaRaw);
export type SearchBarValues = z.infer<typeof searchBarSchemaRaw>;
