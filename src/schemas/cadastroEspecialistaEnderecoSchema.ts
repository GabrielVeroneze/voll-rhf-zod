import { z } from 'zod'

export const cadastroEspecialistaEnderecoSchema = z.object({
    endereco: z.object({
        avatar: z
            .any()
            .refine((valor) => valor instanceof FileList && valor.length > 0, {
                message: 'Informe um arquivo de avatar',
            })
            .transform((lista: FileList) => lista.item(0)!),
        cep: z
            .string()
            .min(9, 'Informe um CEP válido'),
        rua: z
            .string()
            .min(1, 'Informe uma rua válida'),
        numero: z
            .coerce
            .number<number>()
            .min(1, 'Informe um número válido'),
        bairro: z
            .string()
            .min(1, 'Informe um bairro válido'),
        localidade: z
            .string()
            .min(1, 'Informe uma localidade válida'),
    }),
})

export type CadastroEspecialistaEnderecoSchemaType = z.infer<typeof cadastroEspecialistaEnderecoSchema>
