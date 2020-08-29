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
          id: 1,
          lang: "English",
          lev: "Native"
        },
        {
          id: 2,
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


  onChange=(e, id)=>{
    const {target:{value}} = e;
    this.setState((state) => {
      const list = state.lang.map((item) => {
        if(item.id == id){
         item.lang = value;
      }})
      return {
        list
      }
    }
    )
    console.log(this.state.lang)
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
              this.state.lang.map((lan, index)=>{
                // console.log("lang", this.state.lang[index].lang)
                return(
                      <div style={{ display: 'flex', flexDirection: "column" }}>
                        <Input placeholder="Level" onChange={(e)=>this.onChange(e,index)} />
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