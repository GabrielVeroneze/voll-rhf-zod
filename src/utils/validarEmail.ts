export const validarEmail = (valor: string) => {
    const formatoEmail = /^[^\s@]+@alura\.com\.br$/

    if (!formatoEmail.test(valor)) {
        console.error('Endereço de email é inválido para este domínio')

        return false
    }

    return true
}
