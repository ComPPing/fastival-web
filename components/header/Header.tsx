import React from 'react'
import styled from '@emotion/styled'

const Header = () => {
  return (
    <Container>
      <MenuButton className="material-symbols-outlined">menu</MenuButton>
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuButton = styled.button`
  color: ${({ theme }) => theme.colors.menubar.primary};
`
