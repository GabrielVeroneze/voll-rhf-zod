import { z } from 'zod'

export const cadastroPessoalSchema = z.object({
    nome: z.string(),
    email: z.string(),
    telefone: z.string(),
    senha: z.string(),
    senhaVerificada: z.string(),
})
