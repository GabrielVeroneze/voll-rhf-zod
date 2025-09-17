import type { CadastroPessoalForm } from '@/types/CadastroPessoalForm'

export const validarSenha = {
    obrigatorio: (valor: string) => (
        !!valor || 'Por favor, insira a senha novamente'
    ),
    tamanhoMinimo: (valor: string) => (
        valor.length >= 6 || 'A senha deve ter pelo menos 6 caracteres'
    ),
    senhasIguais: (valor: string, formValues: CadastroPessoalForm) => (
        valor === formValues.senha || 'As senhas não correspondem'
    ),
}
