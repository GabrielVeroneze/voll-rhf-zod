import { Outlet } from 'react-router'
import styled from 'styled-components'
import backgroundImage from './ImagemDeFundo.png'

const Container = styled.main`
    align-items: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

const Content = styled.div`
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50vw;
`

function Layout() {
    return (
        <Container>
            <Content>
                <Outlet />
            </Content>
        </Container>
    )
}

export default Layout
