import styled from '@emotion/styled'

export const Container = styled.div<{ position: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${({ position }) =>
    position === 'left' ? 'flex-start' : 'flex-end'};
  gap: 2rem;
  margin-top: 8rem;
  text-align: ${({ position }) => (position === 'left' ? 'left' : 'right')};
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text.primary.default};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.title};
`

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.text.primary.opacity[50]};
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`
