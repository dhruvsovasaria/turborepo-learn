"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singInput = void 0;
const zod_1 = require("zod");
exports.singInput = zod_1.z.object({
    name: zod_1.z.string(),
    class: zod_1.z.number(),
});
