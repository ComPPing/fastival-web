import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

import Header from '@/components/header'
import Information from '@/components/landing-page/information'
import { text } from '@/data/LandingPage'

interface LandingPageProps {
  children?: React.ReactNode
}

const LandingPage = ({ children }: LandingPageProps) => {
  return (
    <Container>
      <Background src="images/Background.svg" alt="background image" />
      <Header />
      {children}
      <Main>
        <Logo>
          <Image src="images/Logo.svg" alt="logo" width="353" height="86" />
        </Logo>
        <Description>Fast!val 과 함께 즐기는 MZ의 대학축제</Description>
        <StartButton>지금 바로 시작하기</StartButton>
        {text.map((item, index) => (
          <Information
            key={index}
            title={item.title}
            description={item.description}
            position={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
        <StartButton>지금 바로 시작하기</StartButton>
      </Main>
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
  position: relative;
  height: fit-content;
  overflow: hidden;
  padding: 1.25rem;
`

const Background = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  filter: blur(4px);
  -webkit-filter: blur(4px);
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`

const Description = styled.span`
  color: ${({ theme }) => theme.colors.text.primary.default};
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`

const StartButton = styled.button`
  color: ${({ theme }) => theme.colors.text.white};
  background: ${({ theme }) => theme.colors.button.primary};
  background: linear-gradient(
    90deg,
    rgba(83, 0, 134, 1) 0%,
    rgba(232, 133, 222, 1) 100%
  );
  padding: 1.2rem 2rem;
  border-radius: 3rem;
  font-size: ${({ theme }) => theme.fonts.size.md};
  margin-top: 4rem;
`
