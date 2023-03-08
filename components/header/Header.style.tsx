import styled from '@emotion/styled'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const MenuButton = styled.button`
  color: ${({ theme }) => theme.colors.menubar.primary};
`
