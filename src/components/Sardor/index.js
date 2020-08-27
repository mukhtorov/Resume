import React from 'react'
import { Container, Wrapper, Form, Input, LangContainer } from './style'
import Sidebar from './Sidebar'
import Body from './Body'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: "",
      emailTitle: '',
      lang: [
        {
          lang: "English",
          lev: "Native"
        },
        {
          lang: "Uzbek",
          lev: "Native"
        }
      ]
    }
  }
  Add = (params) => {
    this.setState({
      lang: this.state.lang.concat({
        lang: "",
        lev: ''
      })
    })
  }
  render() {
    return (
      <Wrapper>
        <Container>
          <Sidebar data={this.state} />
          <Body />
        </Container>
        {/* FORM */}
        <Form>
          <Input placeholder="Contact" onChange={(e) => this.setState({ contact: e.target.value })} />
          <LangContainer>
            {
              this.state.lang.map((lan) => {
                return (
                  <div style={{ display: 'flex', flexDirection: "column" }}>
                    <Input placeholder="Language" onChange={(e) => this.setState({ contact: e.target.value })} />
                    <Input placeholder="Level" onChange={(e) => this.setState({ contact: e.target.value })} />
                  </div>
                )
              })
            }
            <button onClick={() => this.Add()}>more lang</button>
          </LangContainer>
        </Form>

      </Wrapper>
    )
  }
}

export default App