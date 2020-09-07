import React from 'react'
import { Container, Content, Left, Description, Status, Wrapper, Fregment, Right, Title } from './style'

const company = [
  {
    id: 1,
    name: 'Woojin:',
    description: ' Bus Tracking system(Source private)'
  },
  {
    id: 2,
    name: 'Boonpod:',
    description: ' Q&A (Source private)'
  },
  {
    id: 3,
    name: 'Pringtingcider:',
    description: ' Commercial (Source private)(demo) '
  },
  {
    id: 4,
    name: '3D:',
    description: ' 3D sharing android app (Source private)'
  }
]
const personal = [
  {
    id: 1,
    name: 'DXB Bazar:',
    description: ' Commercial (Source link) demo'
  },
  {
    id: 2,
    name: 'Quran:',
    description: ' Audi music (Source link)'
  },
  {
    id: 3,
    name: 'NeedHouse:',
    description: ' Rent house, ios and android app (Source private)'
  },
  {
    id: 4,
    name: 'React Tag:',
    description: ' Moderen Visit Card (Source private) demo'
  }
]
export default () => {
  return (
    <Container>
      <Title>Company Projects</Title>
      <Wrapper>
        {
          company.map((item) => (
            <Fregment key={item.id}>
              <Left>
                <Status>{item.name}</Status>
                <Content>{item.description}</Content>
              </Left>
            </Fregment>
          ))
        }
      </Wrapper>
      <Title>Personal Projects</Title>
      <Wrapper>
        {
          personal.map((item) => (
            <Fregment key={item.id}>
              <Left>
                <Status>{item.name}</Status>
                <Content>{item.description}</Content>
              </Left>
            </Fregment>
          ))
        }
      </Wrapper>
    </Container>
  )
}