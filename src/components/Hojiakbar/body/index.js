import React from 'react'
import {Header, Title, Container,Content, Img,Line } from './style' 

export default () => {
  return (
    <Container>
      <Header>
        <Header.Left>
          <Title>Abduvaxobov Xojiakbar</Title>
          <Content>Full-stack web and mobile develoer. Graduated Indian
first coding bootcamp called “The Hacking School”</Content>
        </Header.Left>
          <Img />

      </Header>
      <Line />
    </Container>
  )
}