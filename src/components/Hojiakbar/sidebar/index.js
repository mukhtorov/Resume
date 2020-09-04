import React from 'react'
import {Container} from './style'
import {Title, Title1, Line, Content, Content1, Content2, Content3, Content4, Content5,} from './style'
import {Minititle, Bigtitle} from './style'

export default (props) => {
  return (
    <Container>
        <Title>{props.contact}</Title>
        <Line />
         <Title1>Address</Title1>
        <Content>{props.address}</Content>
        <Title>Phone</Title>
        <Content1>{props.number}</Content1>
        <Title>Virsion Control</Title>
        <Content3>{props.git}</Content3>
        <Title>Skills</Title>
        <Line />
         <Content2>{props.skills}</Content2>
        <Minititle>learned in Univ</Minititle>
        <Content4>C, C++, python, multimedia, datastructure</Content4>
        <Bigtitle>Languages</Bigtitle>
        <Line />
        <Bigtitle>Uzbek</Bigtitle>
        <Content5>Native</Content5>
        <Bigtitle>English</Bigtitle>
        <Content5>Intermediate</Content5>
        <Bigtitle>Russian</Bigtitle>
        <Content5>Intermediate</Content5>


        
    </Container>
  )
}