import React from 'react'
import {Container} from './style'
import Sidebar from './sidebar'
import Body from './body'

export default () => {
  return (
   <Container>
     <Sidebar />
     <Body />
   </Container>
  )
}