import { Controller, useForm } from 'react-hook-form'
import { buscarEndereco } from '@/services/endereco'
import type { CadastroEnderecoForm } from '@/types/CadastroEnderecoForm'
import Button from '@/components/Button'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import FormContainer from '@/components/FormContainer'
import Input from '@/components/Input'
import InputMask from '@/components/InputMask'
import Label from '@/components/Label'
import Titulo from '@/components/Titulo'
import ErrorMessage from '@/components/ErrorMessage'

const Endereco = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
        watch,
        control,
    } = useForm<CadastroEnderecoForm>({
        mode: 'all',
        defaultValues: {
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            localidade: '',
        },
    })

    const cepDigitado = watch('cep')

    const aoSubmeter = (dados: CadastroEnderecoForm) => {
        console.log(dados)
    }

    const fetchEndereco = async (cep: string) => {
        try {
            const data = await buscarEndereco(cep)

            setValue('rua', data.logradouro)
            setValue('bairro', data.bairro)
            setValue('localidade', `${data.localidade}, ${data.uf}`)

            console.log(data)
        } catch (error) {
            setError('cep', {
                type: 'manual',
                message: 'CEP inválido',
            })

            console.error(error)
        }
    }

    return (
        <>
            <Titulo>Agora, mais alguns dados sobre você:</Titulo>
            <Form onSubmit={handleSubmit(aoSubmeter)}>
                <Controller
                    control={control}
                    name="cep"
                    rules={{
                        required: 'O campo de CEP é obrigatório',
                    }}
                    render={({ field }) => (
                        <Fieldset>
                            <Label htmlFor="campo-cep">CEP</Label>
                            <InputMask
                                format="#####-###"
                                mask="_"
                                id="campo-cep"
                                placeholder="Insira seu CEP"
                                type="text"
                                $error={!!errors.cep}
                                {...field}
                                onBlur={() => fetchEndereco(cepDigitado)}
                            />
                            {errors.cep && (
                                <ErrorMessage>{errors.cep.message}</ErrorMessage>
                            )}
                        </Fieldset>
                    )}
                />
                <Fieldset>
                    <Label htmlFor="campo-rua">Rua</Label>
                    <Input
                        id="campo-rua"
                        placeholder="Rua Agarikov"
                        type="text"
                        $error={!!errors.rua}
                        {...register('rua', {
                            required: 'O campo de rua é obrigatório',
                        })}
                    />
                    {errors.rua && (
                        <ErrorMessage>{errors.rua.message}</ErrorMessage>
                    )}
                </Fieldset>
                <FormContainer>
                    <Fieldset>
                        <Label htmlFor="campo-numero-rua">Número</Label>
                        <Input
                            id="campo-numero-rua"
                            placeholder="Ex: 1440"
                            type="text"
                            $error={!!errors.numero}
                            {...register('numero', {
                                required: 'O campo de numero é obrigatório',
                            })}
                        />
                        {errors.numero && (
                            <ErrorMessage>{errors.numero.message}</ErrorMessage>
                        )}
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor="campo-bairro">Bairro</Label>
                        <Input
                            id="campo-bairro"
                            placeholder="Vila Mariana"
                            type="text"
                            $error={!!errors.bairro}
                            {...register('bairro', {
                                required: 'O campo de bairro é obrigatório',
                            })}
                        />
                        {errors.bairro && (
                            <ErrorMessage>{errors.bairro.message}</ErrorMessage>
                        )}
                    </Fieldset>
                </FormContainer>
                <Fieldset>
                    <Label htmlFor="campo-localidade">Localidade</Label>
                    <Input
                        id="campo-localidade"
                        placeholder="São Paulo, SP"
                        type="text"
                        $error={!!errors.localidade}
                        {...register('localidade', {
                            required: 'O campo de localidade é obrigatório',
                        })}
                    />
                    {errors.localidade && (
                        <ErrorMessage>{errors.localidade.message}</ErrorMessage>
                    )}
                </Fieldset>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </>
    )
}

export default Endereco
