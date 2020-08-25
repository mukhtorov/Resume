import React from 'react'
import {Container} from './style'
import Sidebar from './Sidebar'
import Body from './Body'

export default () => {
  return (
    <Container>
      <Sidebar/>
      <Body/>
    </Container>
  )
}