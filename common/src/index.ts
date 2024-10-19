import { z } from "zod";

export const singInput = z.object({
  name: z.string(),
  class: z.number(),
});

export type SingupParams = z.infer<typeof singInput>;
