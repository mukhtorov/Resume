import React from 'react'
import {Container} from './style'
import {Title, Line, Subtitle, Content} from  './style'



export default () => {
  return (
    <Container>Sidebar
      <Title>Contacts</Title>
      <Line></Line>
      <Subtitle>Email</Subtitle>
      <Content>mr.rivojidin@gmail.com</Content>
      <Subtitle>Address</Subtitle>
      <Content>Turakurgan,Namangan city,Uzbekistan</Content>
      <Subtitle>Phone</Subtitle>
      <Content>+998996160697</Content>
      <Subtitle>Version Control</Subtitle>
      <Content><a href="https://github.com/din0497">GitHub.com</a></Content>
      <Title>Skills</Title>
      <Line/>
      <Content>HTML, CSS, Bootstrap, JavaScript, Reactjs, React-Natave, RestAPI, Apollo GraphQL, Redux, Angularjs, Nodejs, Expressjs, MongoDB, Docker, AWS, Cloudinary,</Content>
      <Subtitle>Learned in Unver</Subtitle>
      <Content>C, C++, python, multimedia, datastructure</Content>
      <Title>Languages</Title>
      <Line></Line>
      <Title>Uzbek</Title>
      <Content>Native</Content>
      <Title>English</Title>
      <Content>Advanced</Content>
      <Title>Korean</Title>
      <Content>Intermediate</Content>
      
    </Container>
    
  )
}