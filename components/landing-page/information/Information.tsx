import React from 'react'
import styled from '@emotion/styled'

interface InformationProps {
  title: React.ReactNode
  description: React.ReactNode
  position: 'left' | 'right'
}

const Information = ({ title, description, position }: InformationProps) => {
  return (
    <Container position={position}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default Information

const Container = styled.div<{ position: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${({ position }) =>
    position === 'left' ? 'flex-start' : 'flex-end'};
  gap: 2rem;
  margin-top: 8rem;
  text-align: ${({ position }) => (position === 'left' ? 'left' : 'right')};
`

const Title = styled.p`
  color: ${({ theme }) => theme.colors.text.primary.default};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.title};
`

const Description = styled.span`
  color: ${({ theme }) => theme.colors.text.primary.opacity[50]};
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`
