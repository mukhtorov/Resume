import React from 'react'
import {Container, Wrapper, Input} from './style'
import Sidebar from './Sidebar'
import Body from './Body'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      address: "Address",
      email: "Email",
      number: "Phone Number",
      link: "Web-Link",
      skills: "Skills",
      added: "Unversity"
    }
  }
render ()  {
  return (
    <Wrapper>
      <Container >
        <Sidebar address ={this.state.address} email={this.state.email} number={this.state.number} link={this.state.link} skills={this.state.skills}
                added ={this.state.added}
        />
        <Body/>
      </Container>
      <Container.Form>
       <Input placeholder="Your Email"onChange = {(e)=>this.setState({email: e.target.value})}></Input> 
       <Input placeholder="Your Address" onChange = {(e)=>this.setState({address: e.target.value})}></Input> 
       <Input placeholder="Your Phone number" onChange = {(e)=>this.setState({number: e.target.value})}></Input> 
       <Input placeholder="Your Link" onChange ={(e)=>{this.setState({link: e.target.value})}}></Input>
       <Input placeholder="Skills" onChange={(e)=>{this.setState({skills:e.target.value})}}></Input>
       <Input placeholder="Unversity" onChange={(e)=>{this.setState({added:e.target.value})}}></Input>

      </Container.Form>
   </Wrapper> 
   )
  }
}
export default App