import React from 'react'
import { Container, Title, Header, Line, Content, Img } from './style'

export default () => {
  return (
    <Container>
      <Header>
        <Header.Left>
          <Title>Sardorbek Muhtorov</Title>
          <Content>Full-stack web and mobile develoer. Graduated Indian
           first coding bootcamp called “The Hacking School”</Content>
        </Header.Left>
        <Img />
      </Header>
      <Line />
    </Container>
  )
}