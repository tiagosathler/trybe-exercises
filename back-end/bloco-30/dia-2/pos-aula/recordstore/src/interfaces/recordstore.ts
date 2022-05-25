import { z } from 'zod';

const RecordStoreSchema = z.object({
  artist: z
    .string({
      required_error: 'Artist is required',
      invalid_type_error: 'Artist must be a string',
    })
    .min(3, { message: 'Color must be 3 or more characters long' }),
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    })
    .min(3, { message: 'Title must be 3 or more characters long' }),
  format: z
    .string({
      required_error: 'Format is required',
      invalid_type_error: 'Format must be a string',
    })
    .min(3, { message: 'Format must be 3 or more characters long' }),
  yearPublished: z
    .number({
      required_error: 'yearPublished is required',
      invalid_type_error: 'yearPublished must be a number',
    })
    .min(1900, { message: 'yearPublished must be greater than 1900' }),
  new: z
    .boolean({
      required_error: 'new is required',
      invalid_type_error: 'new must be a boolean',
    }),
});

type RecordStore = z.infer<typeof RecordStoreSchema>;

export default RecordStore;
export { RecordStoreSchema };