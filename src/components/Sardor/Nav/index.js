import React from 'react'
import { Container, Title } from './style'
import { NavLink } from 'react-router-dom'
export default () => {
  return (
    <Container>
      <Title>WebBrain Academy</Title>
      {/* <NavLink activeStyle={{
        fontWeight: "bold",
        color: "red"
      }} to="/hojiakbar"> Hojiakbar</NavLink>
      <NavLink activeStyle={{
        fontWeight: "bold",
        color: "red"
      }} to="/"> Sardor</NavLink>
      <NavLink activeStyle={{
        fontWeight: "bold",
        color: "red"
      }} to="/rivojiddin"> Rivojiddin</NavLink> */}
    </Container>
  )
}