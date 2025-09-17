import type { InputProps } from '@/types/InputProps'
import styled from 'styled-components'

const Input = styled.input<InputProps>`
    background: #f0f0f0;
    border: ${(props) => (props.$error ? ' 1px solid #a71e1e' : 'none')};
    border-radius: 8px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    font-size: 16px;
    font-weight: normal;
    line-height: 19px;
    margin: 0.5em 0;
    padding: 16px;
    width: 100%;

    &::placeholder {
        color: rgba(107, 110, 113, 1);
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
    }

    &:focus {
        outline-color: ${(props) => (props.$error ? '#a71e1e' : '')};
    }
`

export default Input
