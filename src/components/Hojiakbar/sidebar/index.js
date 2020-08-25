import React from 'react'
import {Container} from './style'
import {Title, Title1, Line, Content, Content2,} from './style'
import {Minititle, Bigtitle} from './style'

export default () => {
  return (
    <Container>
        <Title>Contacts</Title>
        <Line />
        <Title1>Address</Title1>
        <Content>Uchkurgan, Namangan city, Uzbekistan(zip:160900)</Content>
        <Title>Phone</Title>
        <Content>+998936703572</Content>
        <Title>Virsion Control</Title>
        <Content>https://github.com/abduvaxobovxojiakbar7007</Content>
        <Title>Skills</Title>
        <Line />
        <Content2>HTML, CSS, Bootstrap, JavaScript, Reactjs, React-Natave,RestAPI, Apollo GraphQL, Redux, Angularjs, Nodejs, Expressjs, MongoDB, Docker, AWS, Cloudinary, xullas xammasi inshaolloh</Content2>
        <Minititle>learned in Univ</Minititle>
        <Content2>C, C++, python, multimedia, datastructure</Content2>
        <Bigtitle>Languages</Bigtitle>
        <Line />
        <Bigtitle>Uzbek</Bigtitle>|
        <Content2>Native</Content2>
        <Bigtitle>English</Bigtitle>
        <Content2>Intermediate</Content2>
        <Bigtitle>Russian</Bigtitle>
        <Content2>Intermediate</Content2>


        
    </Container>
  )
}