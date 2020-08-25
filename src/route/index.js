import React from 'react'
import Hojiakbar from '../components/Hojiakbar'
import Rivojiddin from '../components/Rivojiddin'
import Habibullo from '../components/Habibullo'
import Sardor from '../components/Sardor'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/rivojiddin" component={Rivojiddin} />
        <Route path="/hojiakbar" component={Hojiakbar} />
        <Route path="/habibullo" component={Habibullo} />
        <Route path="/" component={Sardor} />
      </Switch>
    </Router>
  )
}