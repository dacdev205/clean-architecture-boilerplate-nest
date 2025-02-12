import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { StatusSchema } from './StatusSchema';
import { EnumStatusFieldUpdateOperationsInputSchema } from './EnumStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AffiliateUpdateManyWithoutUserNestedInputSchema } from './AffiliateUpdateManyWithoutUserNestedInputSchema';
import { OrderUpdateManyWithoutUserNestedInputSchema } from './OrderUpdateManyWithoutUserNestedInputSchema';
import { CartUpdateManyWithoutUserNestedInputSchema } from './CartUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutAddressesInputSchema: z.ZodType<Prisma.UserUpdateWithoutAddressesInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  twoFAEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusSchema),z.lazy(() => EnumStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  affiliates: z.lazy(() => AffiliateUpdateManyWithoutUserNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutUserNestedInputSchema).optional(),
  carts: z.lazy(() => CartUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutAddressesInputSchema;
