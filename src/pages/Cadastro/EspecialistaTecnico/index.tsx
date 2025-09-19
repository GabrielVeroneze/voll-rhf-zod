import { useFieldArray, useForm } from 'react-hook-form'
import type { CadastroEspecialistaSchemaType } from '@/schemas/cadastroEspecialistaSchema'
import Button from '@/components/Button'
import ButtonContainer from '@/components/ButtonContainer'
import Divisor from '@/components/Divisor'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import FormContainer from '@/components/FormContainer'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Titulo from '@/components/Titulo'

const EspecialistaTecnico = () => {
    const {
        register,
        handleSubmit,
        control,
    } = useForm<CadastroEspecialistaSchemaType>()

    const { fields, append } = useFieldArray({
        name: 'especialidades',
        control: control,
    })

    const aoSubmeter = (dados: CadastroEspecialistaSchemaType) => {
        console.log(dados)
    }

    return (
        <>
            <Titulo className="titulo">Agora, seus dados técnicos:</Titulo>
            <Form onSubmit={handleSubmit(aoSubmeter)}>
                <Fieldset>
                    <Label>CRM</Label>
                    <Input
                        id="campo-crm"
                        type="text"
                        placeholder="Insira seu número de registro"
                        {...register('crm')}
                    />
                </Fieldset>
                <Divisor />
                {fields.map((field, index) => (
                    <div key={field.id}>
                        <Fieldset>
                            <Label>Especialidade</Label>
                            <Input
                                id="campo-especialidade"
                                type="text"
                                placeholder="Qual sua especialidade?"
                                {...register(
                                    `especialidades.${index}.especialidade`
                                )}
                            />
                        </Fieldset>
                        <FormContainer>
                            <Fieldset>
                                <Label>Ano de conclusão</Label>
                                <Input
                                    id="campo-ano-conclusao"
                                    type="text"
                                    placeholder="2005"
                                    {...register(
                                        `especialidades.${index}.anoConclusao`
                                    )}
                                />
                            </Fieldset>
                            <Fieldset>
                                <Label>Instituição de ensino</Label>
                                <Input
                                    id="campo-instituicao-ensino"
                                    type="text"
                                    placeholder="USP"
                                    {...register(
                                        `especialidades.${index}.instituicao`
                                    )}
                                />
                            </Fieldset>
                        </FormContainer>
                        <Divisor />
                    </div>
                ))}
                <ButtonContainer>
                    <Button type="button" $variante="secundario">
                        Adicionar Especialidade
                    </Button>
                </ButtonContainer>
                <Button type="submit">Avançar</Button>
            </Form>
        </>
    )
}

export default EspecialistaTecnico
