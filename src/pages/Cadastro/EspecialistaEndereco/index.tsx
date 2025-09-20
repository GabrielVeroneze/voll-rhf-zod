import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

const EspecialistaEndereco = () => {
    const {
        register,
        handleSubmit,
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
                <Fieldset>
                    <Label htmlFor="campo-cep">CEP</Label>
                    <InputMask
                        format="#####-###"
                        mask="_"
                        id="campo-cep"
                        placeholder="Insira seu CEP"
                        type="text"
                        {...register('endereco.cep')}
                    />
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="campo-rua">Rua</Label>
                    <Input
                        id="campo-rua"
                        placeholder="Rua Agarikov"
                        type="text"
                        {...register('endereco.rua')}
                    />
                </Fieldset>
                <FormContainer>
                    <Fieldset>
                        <Label htmlFor="campo-numero-rua">Número</Label>
                        <Input
                            id="campo-numero-rua"
                            placeholder="Ex: 1440"
                            type="text"
                            {...register('endereco.numero')}
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor="campo-bairro">Bairro</Label>
                        <Input
                            id="campo-bairro"
                            placeholder="Vila Mariana"
                            type="text"
                            {...register('endereco.bairro')}
                        />
                    </Fieldset>
                </FormContainer>
                <Fieldset>
                    <Label htmlFor="campo-localidade">Localidade</Label>
                    <Input
                        id="campo-localidade"
                        placeholder="São Paulo, SP"
                        type="text"
                        {...register('endereco.localidade')}
                    />
                </Fieldset>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </>
    )
}

export default EspecialistaEndereco
