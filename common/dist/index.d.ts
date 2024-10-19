import { z } from "zod";
export declare const singInput: z.ZodObject<{
    name: z.ZodString;
    class: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    class: number;
}, {
    name: string;
    class: number;
}>;
export type SingupParams = z.infer<typeof singInput>;
