import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { validarEmail } from '@/utils/validarEmail'
import { validarSenha } from '@/utils/validarSenha'
import type { CadastroPessoalForm } from '@/types/CadastroPessoalForm'
import Button from '@/components/Button'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import Input from '@/components/Input'
import InputMask from '@/components/InputMask'
import Label from '@/components/Label'
import Titulo from '@/components/Titulo'
import ErrorMessage from '@/components/ErrorMessage'

const Pessoal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        control,
        reset,
    } = useForm<CadastroPessoalForm>({
        mode: 'all',
        defaultValues: {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
            senhaVerificada: '',
        }
    })

    useEffect(() => {
        reset()
    }, [isSubmitSuccessful, reset])

    const aoSubmeter = (dados: CadastroPessoalForm) => {
        console.log(dados)
    }

    return (
        <>
            <Titulo>Insira alguns dados básicos:</Titulo>
            <Form onSubmit={handleSubmit(aoSubmeter)}>
                <Fieldset>
                    <Label htmlFor="campo-nome">Nome</Label>
                    <Input
                        id="campo-nome"
                        placeholder="Digite seu nome completo"
                        type="text"
                        $error={!!errors.nome}
                        {...register('nome', {
                            required: 'O campo de nome é obrigatório',
                            minLength: {
                                value: 5,
                                message: 'O nome deve ter pelo menos cinco caracteres',
                            },
                        })}
                    />
                    {errors.nome && (
                        <ErrorMessage>{errors.nome.message}</ErrorMessage>
                    )}
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="campo-email">E-mail</Label>
                    <Input
                        id="campo-email"
                        placeholder="Insira seu endereço de email"
                        type="email"
                        $error={!!errors.email}
                        {...register('email', {
                            required: 'O campo de email é obrigatório',
                            validate: validarEmail,
                        })}
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                </Fieldset>
                <Controller
                    control={control}
                    name="telefone"
                    rules={{
                        required: 'O campo de telefone é obrigatório',
                        pattern: {
                            value: /^\(\d{2,3}\) \d{5}-\d{4}$/,
                            message: 'O telefone inserido está no formato incorreto',
                        },
                    }}
                    render={({ field }) => (
                        <Fieldset>
                            <Label>Telefone</Label>
                            <InputMask
                                format="(##) #####-####"
                                mask="_"
                                id="campo-telefone"
                                type="text"
                                placeholder="Ex: (DDD) XXXXX-XXXX"
                                $error={!!errors.telefone}
                                {...field}
                            />
                            {errors.telefone && (
                                <ErrorMessage>{errors.telefone.message}</ErrorMessage>
                            )}
                        </Fieldset>
                    )}
                />
                <Fieldset>
                    <Label htmlFor="campo-senha">Crie uma senha</Label>
                    <Input
                        id="campo-senha"
                        placeholder="Crie uma senha"
                        type="password"
                        $error={!!errors.senha}
                        {...register('senha', {
                            required: 'O campo de senha é obrigatório',
                            minLength: {
                                value: 6,
                                message: 'A senha deve ter pelo menos seis caracteres',
                            },
                        })}
                    />
                    {errors.senha && (
                        <ErrorMessage>{errors.senha.message}</ErrorMessage>
                    )}
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="campo-senha-confirmacao">
                        Repita a senha
                    </Label>
                    <Input
                        id="campo-senha-confirmacao"
                        placeholder="Repita a senha anterior"
                        type="password"
                        $error={!!errors.senhaVerificada}
                        {...register('senhaVerificada', {
                            required: 'O campo de repita a senha é obrigatório',
                            validate: validarSenha,
                        })}
                    />
                    {errors.senhaVerificada && (
                        <ErrorMessage>{errors.senhaVerificada.message}</ErrorMessage>
                    )}
                </Fieldset>
                <Button type="submit">Avançar</Button>
            </Form>
        </>
    )
}

export default Pessoal
