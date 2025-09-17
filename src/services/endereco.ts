import type { EnderecoResponse } from '@/types/EnderecoResponse'

export async function buscarEndereco(cep: string): Promise<EnderecoResponse> {
    if (!cep) {
        throw new Error('CEP inválido')
    }

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    if (!resposta.ok) {
        throw new Error('Erro ao buscar o endereço')
    }

    return resposta.json()
}
