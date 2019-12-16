import React from 'react'
import { Switch, HashRouter as Router, Route } from 'react-router-dom'
import A from './views/A'
import B from './views/B'

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/a" exact component={A} />
        <Route path="/b" exact component={B} />
      </Switch>
    </Router>
  )
}

export default App

