import React, { Component, useState } from 'react'
import { Container, Wrapper, Div, DivContainer, FormContainer, Left, Right, Input, LangContainer } from './style'
import Sidebar from './Sidebar'
import Body from './Body'
import Nav from './Nav'
import Form from './Update/Form'
import Skill from './Update/Skills'
import Contact from './Update/Contact'
import Language from './Update/Language'
import Education from './Update/Education'
import Experience from './Update/Experience'
import Personal from './Update/Personal'
import Projects from './Update/Projects'
import StepWizard from 'react-step-wizard';
import { useParams } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      email: 'example.com',
      lang: [
        {
          lang: "Uzbek",
          lev: "native"
        },
        {
          lang: "English",
          lev: "native"
        },
        {
          lang: "Korean",
          lev: "native"
        }
      ]
    }
  }


  Add = (params) => {
    this.setState({
      lang: this.state.lang.concat({
        id: this.state.lang.length + 1,
        lang: "",
        lev: ''
      })
    })
  }


  onChange = (e, id) => {
    const { target: { value, name } } = e;
    this.setState((state) => {
      const list = state.lang.map((item) => {
        if (item.id == id) {
          if (name === 'lang') {
            item.lang = value
          }
          if (name === 'lev') {
            item.lev = value;
          }
        }
      })
      return {
        list
      }
    }
    )
  }
  onStepChange = (e) => {
    console.log(e)
    this.setState({
      step: e
    })
  }
  render() {

    return (
      <Wrapper >
        <Nav />
        <Container>
          <Left>
            <Sidebar data={this.state} />
            <Body />
          </Left>
          <Right>
            <StepWizard initialStep={this.state.step}>
              <Form goToStep={(e) => this.onStepChange(e)} />
              <Personal goToStep={(e) => this.onStepChange(e)} />


              <Contact onChange={(e) => console.log("input",
                this.setState({ email: e }))} data={this.state.email}
                goToStep={(e) => this.onStepChange(e)} />
              <Skill goToStep={(e) => this.onStepChange(e)} />
              <Language goToStep={(e) => this.onStepChange(e)} />
              <Education goToStep={(e) => this.onStepChange(e)} />
              <Experience goToStep={(e) => this.onStepChange(e)} />
              <Projects goToStep={(e) => this.onStepChange(e)} />
            </StepWizard>
          </Right>
        </Container>
      </Wrapper >
    )
  }
}


export default App