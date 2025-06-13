import zod, { z } from "zod";

export const registerSchema = zod.object({
  email: z.string().email(),
  password: z.string(),
  username: z.string().trim().min(4),
});

export const loginShema = zod.object({
  email: z.string().email(),
  password: z.string(),
});
