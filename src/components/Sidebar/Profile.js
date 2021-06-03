import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

const ProfileImg = styled.img`

`

const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`

const Profile = () => {
    return (
        <div>
            <ProfileImg />
            <ProfileName>Guilherme Esdras</ProfileName>
        </div>
    )
}

export default Profile
