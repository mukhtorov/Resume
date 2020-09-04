import React from 'react'
import {Container,Wrapper, Input, Left, Right, Title} from './style'
import Sidebar from './sidebar'
import Body from './body'
import Nav from './nav'
import Form from './Form'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      contact:"",
      address:"",
      number:"",
      git:"", 
      skills:""
    }
}


render() {
  return (
    <Wrapper>
   {/* <Container>
   </Container>
   
   <Container>
   <Input  placeholder="Contact" onChange={(e) => this.setState({ contact: e.target.value})} />
   <Input  placeholder="Your address please" onChange={(e) => this.setState({ address: e.target.value})}/ >
   <Input  placeholder="Your phone number" onChange={(e) => this.setState({ number: e.target.value})} />
   <Input placeholder="GitHub or GitLab please" onChange={(e) => this.setState({git: e.target.value})} />
   <Input placeholder="your skills please" onChange={(e) => this.setState({skills: e.target.values})} />
  </Container> */}
    <Nav />
    <Container>
      <Left>
        <Sidebar contact={this.state.contact} address={this.state.address} number={this.state.number} git={this.state.git} skills={this.state.skills} />
        <Body />
      </Left>
      <Right>
        <Form>
          
        </Form>
      </Right>
    </Container>
</Wrapper>
   
  )
}
}
export default App