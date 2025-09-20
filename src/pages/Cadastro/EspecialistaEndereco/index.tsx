import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { buscarEndereco } from '@/services/endereco'
import { cadastroEspecialistaEnderecoSchema, type CadastroEspecialistaEnderecoSchemaType } from '@/schemas/cadastroEspecialistaEnderecoSchema'
import Button from '@/components/Button'
import Divisor from '@/components/Divisor'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import FormContainer from '@/components/FormContainer'
import Input from '@/components/Input'
import InputMask from '@/components/InputMask'
import Label from '@/components/Label'
import Titulo from '@/components/Titulo'
import UploadDescription from '@/components/UploadDescription'
import UploadIcon from '@/components/UploadIcon'
import UploadInput from '@/components/UploadInput'
import UploadLabel from '@/components/UploadLabel'
import UploadTitulo from '@/components/UploadTitulo'
import ErrorMessage from '@/components/ErrorMessage'

const EspecialistaEndereco = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
    } = useForm<CadastroEspecialistaEnderecoSchemaType>({
        mode: 'all',
        resolver: zodResolver(cadastroEspecialistaEnderecoSchema),
        defaultValues: {
            endereco: {
                cep: '',
                rua: '',
                numero: 0,
                bairro: '',
                localidade: '',
            },
        },
    })

    const fetchEndereco = async (cep: string) => {
        const dados = await buscarEndereco(cep)

        setValue('endereco.rua', dados.logradouro)
        setValue('endereco.bairro', dados.bairro)
        setValue('endereco.localidade', `${dados.localidade}, ${dados.uf}`)
    }

    const aoSubmeter = (dados: CadastroEspecialistaEnderecoSchemaType) => {
        console.log(dados)
    }

    return (
        <>
            <Titulo className="titulo">
                Para finalizar, só alguns detalhes!
            </Titulo>
            <Form onSubmit={handleSubmit(aoSubmeter)}>
                <>
                    <UploadTitulo>Sua foto</UploadTitulo>
                    <UploadLabel htmlFor="campo-upload">
                        <UploadIcon />
                        <UploadDescription>
                            Clique para enviar
                        </UploadDescription>
                        <UploadInput
                            accept="image/*"
                            id="campo-upload"
                            type="file"
                        />
                    </UploadLabel>
                </>
                <Divisor />
                <Controller
                    control={control}
                    name="endereco.cep"
                    render={({ field }) => (
                        <Fieldset>
                            <Label htmlFor="campo-cep">CEP</Label>
                            <InputMask
                                format="#####-###"
                                mask="_"
                                id="campo-cep"
                                placeholder="Insira seu CEP"
                                type="text"
                                $error={!!errors.endereco?.cep}
                                {...field}
                            />
                            {errors.endereco?.cep && (
                                <ErrorMessage>
                                    {errors.endereco.cep.message}
                                </ErrorMessage>
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
                        $error={!!errors.endereco?.rua}
                        {...register('endereco.rua')}
                    />
                    {errors.endereco?.rua && (
                        <ErrorMessage>
                            {errors.endereco.rua.message}
                        </ErrorMessage>
                    )}
                </Fieldset>
                <FormContainer>
                    <Fieldset>
                        <Label htmlFor="campo-numero-rua">Número</Label>
                        <Input
                            id="campo-numero-rua"
                            placeholder="Ex: 1440"
                            type="text"
                            $error={!!errors.endereco?.numero}
                            {...register('endereco.numero')}
                        />
                        {errors.endereco?.numero && (
                            <ErrorMessage>
                                {errors.endereco.numero.message}
                            </ErrorMessage>
                        )}
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor="campo-bairro">Bairro</Label>
                        <Input
                            id="campo-bairro"
                            placeholder="Vila Mariana"
                            type="text"
                            $error={!!errors.endereco?.bairro}
                            {...register('endereco.bairro')}
                        />
                        {errors.endereco?.bairro && (
                            <ErrorMessage>
                                {errors.endereco.bairro.message}
                            </ErrorMessage>
                        )}
                    </Fieldset>
                </FormContainer>
                <Fieldset>
                    <Label htmlFor="campo-localidade">Localidade</Label>
                    <Input
                        id="campo-localidade"
                        placeholder="São Paulo, SP"
                        type="text"
                        $error={!!errors.endereco?.localidade}
                        {...register('endereco.localidade')}
                    />
                    {errors.endereco?.localidade && (
                        <ErrorMessage>
                            {errors.endereco.localidade.message}
                        </ErrorMessage>
                    )}
                </Fieldset>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </>
    )
}

export default EspecialistaEndereco
