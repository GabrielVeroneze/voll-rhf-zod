import styled from 'styled-components'

const FormContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 16px;
    justify-content: space-between;
    width: 100%;

    & > *:first-child {
        flex: 0 0 30%;
    }

    & > *:last-child {
        flex: 1;
    }
`

export default FormContainer
