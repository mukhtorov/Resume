import React from 'react'
import { Container, Content, Left, Description, Status, Wrapper, Fregment, Right, Title } from './style'

const ex = [
  {
    id: 1,
    title: "Webbrain Academy | CEO",
    period: 'march 2019 - precent',
    location: "Sejong, Seoul, South Korea",
    description: 'Coding Bootcamp, specialized for web development'
  },
  {
    id: 2,
    title: "BounceCode | Team Leader",
    period: 'march 2019 - precent',
    location: "Sejong, Seoul, South Korea",
    description: 'Worked as a full-stack web and mobile developer'
  }, {
    id: 3,
    title: "HUB DNC Front End React.js developer",
    period: 'march 2019 - precent',
    location: "Sejong, Seoul, South Korea",
    description: 'Three months reactjs internship'
  },
  {
    id: 4,
    title: "Sejong University | Teacher assistant",
    period: 'march 2019 - precent',
    location: "Sejong, Seoul, South Korea",
    description: 'Teacher assistant on c and web programming language classes'
  }
]
export default () => {
  return (
    <Container>
      <Title>Experiene</Title>
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