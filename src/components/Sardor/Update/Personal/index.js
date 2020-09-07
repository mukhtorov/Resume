import React from 'react'
import { Container } from './style'
import { useParams, useHistory, HashRouter, Link, NavLink } from "react-router-dom";

export default ({ goToStep }) => {
  const { slug } = useParams();
  const history = useHistory()
  console.log(slug)
  return (
    <Container>
      <h1>Personal</h1>
      <h1 onClick={() => history.push('/rivojiddin')}>Rivojiddin</h1 >
      <h1 onClick={() => history.push('/hojiakbar')}>Hojiakbar</h1 >
      <button primary onClick={() => goToStep(1)}>go back</button>
    </Container>
  )
}