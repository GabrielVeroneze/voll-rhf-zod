import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cadastroPessoalSchema, type CadastroPessoalSchemaType } from '@/schemas/cadastroPessoalSchema'
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
        formState: { errors },
        control,
    } = useForm<CadastroPessoalSchemaType>({
        mode: 'all',
        resolver: zodResolver(cadastroPessoalSchema),
        defaultValues: {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
            senhaVerificada: '',
        },
    })

    const aoSubmeter = (dados: CadastroPessoalSchemaType) => {
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
                        {...register('nome')}
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
                        {...register('email')}
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
                        {...register('senha')}
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
                        {...register('senhaVerificada')}
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
