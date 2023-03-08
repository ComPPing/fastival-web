import React from 'react'

import * as style from './Information.style'

interface InformationProps {
  title: React.ReactNode
  description: React.ReactNode
  position: 'left' | 'right'
}

const Information = ({ title, description, position }: InformationProps) => {
  return (
    <style.Container position={position}>
      <style.Title>{title}</style.Title>
      <style.Description>{description}</style.Description>
    </style.Container>
  )
}

export default Information
