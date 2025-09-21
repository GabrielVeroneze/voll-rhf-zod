import { Controller } from 'react-hook-form'
import { useCadastroEspecialistaEndereco } from '@/hooks/useCadastroEspecialistaEndereco'
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
        errors,
        control,
        cepDigitado,
        fetchEndereco,
        aoSubmeter,
    } = useCadastroEspecialistaEndereco()

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
                            {...register('endereco.avatar')}
                        />
                    </UploadLabel>
                    {errors.endereco?.avatar && (
                        <ErrorMessage>
                            {errors.endereco.avatar.message}
                        </ErrorMessage>
                    )}
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
                                onBlur={() => fetchEndereco(cepDigitado)}
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
