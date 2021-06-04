import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-left: 3px solid ${props =>props.active ? props.theme.activeMenu : "transparent"};
`

const MenuItem = ({ title, active, icon }) => {
    return (
        <Container>
            item
        </Container>
    )
}

export default MenuItem
