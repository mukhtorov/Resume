import React from 'react'
import { Container, Title, Line, Content, SubTitle } from './style'
export default (props) => {
  return (
    <Container>
      <Title>{props.contact}</Title>
      <Line />
      <SubTitle>Email</SubTitle>
      <Content>sardor@gmail.com</Content>
    </Container>
  )
}