import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`

const DepositsCount = styled.div`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.header};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`

const Deposits = ({ title, data, count}) => {
    return (
        <div>
            <Title>{title}<DepositsCount>{count}</DepositsCount></Title>
        </div>
    )
}

export default Deposits
