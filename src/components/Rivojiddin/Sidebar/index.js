import React from 'react'
import {Container} from './style'
import {Title, Line, Subtitle, Content} from  './style'



export default (props) => {
  return (
    <Container>Sidebar
      <Title>Contacts</Title>
      <Line></Line>
      <Subtitle>Email</Subtitle>
      <Content>{props.email}</Content>
      <Subtitle>Address</Subtitle>
      <Content>{props.address}</Content>
      <Subtitle>Phone</Subtitle>
      <Content>{props.number}</Content>
      <Subtitle>Version Control</Subtitle>
      <Content><a href={props.link}>{props.link}</a></Content>
      <Title>Skills</Title>
      <Line/>
      <Content>{props.skills}</Content>
      <Subtitle>Learned in Unver</Subtitle>
      <Content>{props.added}</Content>
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