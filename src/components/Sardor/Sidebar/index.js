import React from 'react'
import { Container, Title, Line, Content, SubTitle } from './style'
export default (props) => {
  return (
    <Container>
      <Title>{props.data.contact}</Title>
      <Line />
      <SubTitle>Email</SubTitle>
      <Content>sardor@gmail.com</Content>
      <SubTitle>Address</SubTitle>
      <Content>Uchkurgan city, Namangan Region, Uzbekistan</Content>
      <SubTitle>Virsion Control</SubTitle>
      <Content>github.com/mukhtorov</Content>
      <Content>github.com/mukhtorov</Content>
      <SubTitle>Phone</SubTitle>
      <Content>998 99 321 1226</Content>
      <Title>Skills</Title>
      <button>more lang</button>
      {
        props.data.lang.map((lan) => {
          return (
            <div style={{ display: "flex", color: 'white' }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>{lan.lang}</h1> <h3>{lan.lev}</h3>
              </div>
            </div>
          )
        })
      }
      <Line />
      <Content>HTML, CSS, Bootstrap, JavaScript, Reactjs, React-Natave, RestAPI, Apollo GraphQL, Redux, Angularjs, Nodejs, Expressjs, MongoDB, Docker, AWS, Cloudinary,</Content>
    </Container>
  )
}