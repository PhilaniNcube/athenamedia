import { z } from "zod";

type Email = {
  email: string;
  name: string;
  message: string;
  phone: string;
};

export const EmailSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  message: z.string(),
  phone: z.string(),
});
