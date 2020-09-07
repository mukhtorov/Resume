import React from 'react'
import { Container, Content, Left, Description, Status, Wrapper, Fregment, Right, Title } from './style'

const ex = [
  {
    id: 1,
    location: "Sejong, Seoul, South Korea",
    period: 'march 2019 - precent',
    title: "Sejong University",
    description: ' Bachelor of Computer science and engineering',
  },
  {
    id: 2,
    location: "Hyderabad, India ",
    period: 'march 2019 - precent',
    title: "The Hacking School",
    description: '  Full-stack web development',
  },
  {
    id: 3,
    location: "Sejong, Seoul, South Korea",
    period: 'march 2019 - precent',
    title: "Sejong University",
    description: '  Korean language and culture',
  },
]
export default () => {
  return (
    <Container>
      <Title>Education</Title>
      <Wrapper>
        {
          ex.map((item) => (
            <Fregment key={item.id}>
              <Left>
                <Content>{item.location}</Content>
                <Content>{item.period}</Content>
              </Left>
              <Right>
                <Status>{item.title}</Status>
                <Description>{item.description}</Description>
              </Right>
            </Fregment>
          ))
        }
      </Wrapper>
    </Container>
  )
}