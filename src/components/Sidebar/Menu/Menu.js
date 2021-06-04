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
            <MenuItem title="Início" icon="" />
            <MenuItem title="Depósitos" icon="" active />
            <MenuItem title="Offertas" icon="" />
            <MenuItem title="Pagamentos" icon="" />
            <MenuItem title="Ajustes" icon="" />
        </Container>
    )
}

export default Menu
