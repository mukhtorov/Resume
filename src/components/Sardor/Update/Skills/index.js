import React from 'react'
import { Container } from './style'
export default ({ goToStep }) => (
  <Container>
    <h1>Skill</h1>
    <button primary onClick={() => goToStep(1)}>go back</button>
  </Container>
)