import { z } from 'zod'

export const cadastroPessoalSchema = z
    .object({
        nome: z.string().min(5, 'O nome deve ter pelo menos 5 caracteres'),
        email: z
            .email('O email não é válido')
            .min(1, 'O campo é obrigatório')
            .transform((val) => val.toLowerCase()),
        telefone: z
            .string()
            .min(1, 'O telefone é obrigatório')
            .regex(/^\(\d{2,3}\) \d{5}-\d{4}$/, 'Formato de telefone inválido'),
        senha: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
        senhaVerificada: z.string().min(1, 'Este campo não pode ser vazio'),
    })
    .refine((dados) => dados.senha === dados.senhaVerificada, {
        message: 'As senhas não coincidem',
        path: ['senhaVerificada'],
    })

export type CadastroPessoalSchemaType = z.infer<typeof cadastroPessoalSchema>
