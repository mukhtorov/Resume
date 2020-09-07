import React from 'react'
import { Container } from './style'
export default ({ goToStep }) => (

  <Container>
    <h1>Language</h1>
    <button primary onClick={() => goToStep(1)}>go back</button>

  </Container>
)