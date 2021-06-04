import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuItem title="Início" icon="home" />
            <MenuItem title="Depósitos" icon="file-multiple" active />
            <MenuItem title="Offertas" icon="gift" />
            <MenuItem title="Pagamentos" icon="bank" />
            <MenuItem title="Ajustes" icon="cog" />
        </Container>
    )
}

export default Menu
