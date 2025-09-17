import styled from 'styled-components'

interface ButtonProps {
    $variante?: 'secundario'
}

const Button = styled.button<ButtonProps>`
    background-color: ${(props) =>
        props.$variante === 'secundario'
            ? 'var(--branco)'
            : 'var(--azul-escuro)'};
    border: ${(props) =>
        props.$variante === 'secundario'
            ? '2px solid var(--azul-escuro)'
            : 'none'};
    border-radius: 8px;
    color: ${(props) =>
        props.$variante === 'secundario'
            ? 'var(--azul-escuro)'
            : 'var(--branco)'};
    cursor: pointer;
    font-weight: 700;
    line-height: 19px;
    margin-top: 1em;
    padding: 12px 16px;
    width: 50%;
`

export default Button
