import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cadastroEspecialistaEnderecoSchema, type CadastroEspecialistaEnderecoSchemaType } from '@/schemas/cadastroEspecialistaEnderecoSchema'
import { buscarEndereco } from '@/services/endereco'
import { supabase } from '@/libs/supabase'

export const useCadastroEspecialistaEndereco = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
        watch,
        control,
    } = useForm<CadastroEspecialistaEnderecoSchemaType>({
        mode: 'all',
        resolver: zodResolver(cadastroEspecialistaEnderecoSchema),
        defaultValues: {
            endereco: {
                avatar: new File([''], 'dummy.jpg', { type: 'image/jpeg' }),
                cep: '',
                rua: '',
                numero: 0,
                bairro: '',
                localidade: '',
            },
        },
    })

    const cepDigitado = watch('endereco.cep')

    const fetchEndereco = async (cep: string) => {
        try {
            const dados = await buscarEndereco(cep)

            setValue('endereco.rua', dados.logradouro)
            setValue('endereco.bairro', dados.bairro)
            setValue('endereco.localidade', `${dados.localidade}, ${dados.uf}`)
        } catch {
            setError('endereco.cep', {
                type: 'manual',
                message: 'CEP inválido',
            })
        }
    }

    const aoSubmeter = async (dados: CadastroEspecialistaEnderecoSchemaType) => {
        await supabase.storage
            .from('react-forms')
            .upload(dados.endereco.avatar.name, dados.endereco.avatar)

        console.log(dados)
    }

    return {
        register,
        handleSubmit,
        errors,
        control,
        cepDigitado,
        fetchEndereco,
        aoSubmeter,
    }
}
