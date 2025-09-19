import { z } from 'zod'

export const cadastroEspecialistaSchema = z.object({
    crm: z
        .string()
        .min(1, 'O campo não pode ser vazio'),
    especialidades: z
        .array(
            z.object({
                especialidade: z
                    .string()
                    .min(1, 'Preencha a sua especialidade'),
                anoConclusao: z
                    .number()
                    .min(1, 'Preencha o seu ano de conclusão'),
                instituicao: z
                    .string()
                    .min(1, 'Preencha a sua instituição de ensino'),
            })
        ),
})

export type CadastroEspecialistaSchemaType = z.infer<typeof cadastroEspecialistaSchema>
