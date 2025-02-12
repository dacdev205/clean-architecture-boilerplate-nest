import { z } from 'zod';

export const ShippingTypeSchema = z.enum(['METHOD_1','METHOD_2']);

export type ShippingTypeType = `${z.infer<typeof ShippingTypeSchema>}`

export default ShippingTypeSchema;
