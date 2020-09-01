import React from 'react'
import { Container, Title, Line, Content, SubTitle, LangContainer } from './style'
export default (props) => {
  return (
    <Container>
      <Title>Contacts</Title>
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
      <Content>
        HTML, CSS, Bootstrap, JavaScript, Reactjs, React-Natave, RestAPI, Apollo GraphQL, Redux, Angularjs, Nodejs, Expressjs, MongoDB, Docker, AWS, Cloudinary,
      </Content>
      <SubTitle>Language </SubTitle>
      <Line />
      {
        props.data.lang.map((lan, index) => {
          return (
            <LangContainer key={lan.id}>
              <SubTitle>{lan.lang}</SubTitle>
              <Content>{lan.lev}</Content>
            </LangContainer>
          )
        })
      }
      }

    </Container>
  )
}