import { z } from 'zod'

export const cadastroPessoalSchema = z.object({
    nome: z.string().min(5, 'O nome deve ter pelo menos 5 caracteres'),
    email: z.email('O email não é válido').min(1, 'O campo é obrigatório'),
    telefone: z.string(),
    senha: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    senhaVerificada: z.string().min(1, 'Este campo não pode ser vazio'),
})

export type CadastroPessoalSchemaType = z.infer<typeof cadastroPessoalSchema>
