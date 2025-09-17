import styled from 'styled-components'
import logo from './logo.png'

const Imagem = styled.img`
    margin-top: 1.5rem;
`

const Logotipo = () => {
    return <Imagem src={logo} alt="Logo da Voll" />
}

export default Logotipo
