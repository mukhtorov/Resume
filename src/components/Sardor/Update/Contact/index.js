import React from 'react'
import { Container } from './style'
export default (props) => {
  console.log(props.data)
  return (
    <Container>

      <h1>Contact</h1>
      <h1>data {props.data}</h1>
      <input placeholder="email" value={props.data} onChange={(e) => props.onChange(e.target.value)} />
      <button primary onClick={() => props.goToStep(1)}>go back</button>
    </Container>
  )
}

