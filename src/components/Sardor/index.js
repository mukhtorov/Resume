import React, { Component } from 'react'
import { Container, Wrapper, Div, DivContainer, FormContainer, Left, Right, Input, LangContainer } from './style'
import Sidebar from './Sidebar'
import Body from './Body'
import Nav from './Nav'
import Form from './Form'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailTitle: '',
      lang: []
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
  render() {
    return (
      <Wrapper>
        <Nav />
        <Container>
          <Left>
            <Sidebar data={this.state} />
            <Body />
          </Left>
          <Right>
            <Form />
          </Right>
        </Container>
        {/*
        </Container>
        <Form>
          <Input placeholder="Contact" onChange={(e) => this.setState({ contact: e.target.value })} />
          <LangContainer>
            {
              this.state.lang.map((lan, index) => {
                return (
                  <div style={{ display: 'flex' }}>
                    <Input placeholder="Language" name="lang" value={lan.lang} onChange={(e) => this.onChange(e, index + 1)} />
                    <Input placeholder="Level" name="lev" value={lan.lev} onChange={(e) => this.onChange(e, index + 1)} />
                  </div>
                )
              })
            }
            <button onClick={() => this.Add()}>more lang</button>
          </LangContainer>
        </Form> */}
      </Wrapper>
    )
  }
}


export default App