import React, { useState, useEffect } from 'react'

import Header from '@/components/header'
import Information from '@/components/landing-page/information'
import { text } from '@/data/LandingPage'
import toast from 'react-hot-toast'
import { theme } from '@/styles/theme'
import * as style from './LandingPage.style'

interface LandingPageProps {
  children?: React.ReactNode
}

const DAY = 24 * 60 * 60 * 1000

const LandingPage = ({ children }: LandingPageProps) => {
  // 현재 시간부터 2023/05/18 00:00:00 까지의 카운트다운
  const [time, setTime] = useState('')
  const countDown = () => {
    const now = new Date().getTime()
    const festival = new Date(2023, 5, 18).getTime()
    const distance = festival - now
    const day = Math.floor(distance / (60 * 60 * 1000 * 24))
    const hour = Math.floor((distance % DAY) / (60 * 60 * 1000))
    const minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000))
    const second = Math.floor((distance % (60 * 1000)) / 1000)
    setTime(`${day}일 ${hour}시간 ${minute}분 ${second}초`)
  }

  useEffect(() => {
    countDown()
    setInterval(countDown, 1000)
  }, [])

  const handleStartButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    toast.error('준비중입니다.', {
      style: {
        fontSize: theme.fonts.size.xs,
      },
    })
  }

  return (
    <style.Container>
      <style.Background src="images/Background.svg" alt="background image" />
      <Header />
      {children}
      <style.Main>
        <style.Logo>
          <style.Image src="images/Logo.svg" alt="logo" />
        </style.Logo>
        <style.Description>
          Fast!val 과 함께하는 유니들의 대학축제
        </style.Description>
        <style.Description>D-{time}</style.Description>
        <style.StartButton onClick={handleStartButton}>
          지금 바로 시작하기
        </style.StartButton>
        {text.map((item, index) => (
          <Information
            key={index}
            title={item.title}
            description={item.description}
            position={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
        {/* TODO */}
        {/* <Torch src="images/CherryBlossomTorch.png" alt="횃불이" /> */}
        <style.StartButton onClick={handleStartButton}>
          지금 바로 시작하기
        </style.StartButton>
      </style.Main>
    </style.Container>
  )
}

export default LandingPage
