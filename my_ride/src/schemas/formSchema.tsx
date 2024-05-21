import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(3, "O número mínimo de caracteres é 3."),
  lastName: z.string().min(3, "O número mínimo de caracteres é 3."),

  email: z
    .string()
    .min(1, "O campo é obrigatório")
    .email("Utilize um e-mail válido."),

    country: z.string().min(10, "Escolha um o país"),
    city: z.string().min(10, "Escolha um a cidade"),
    referralCode: z.string().min(7, "Utilize um CEP válido."),
});

export type FormSchema = z.infer<typeof formSchema>;
