import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './hello-world'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HelloWorld}/>
    </Switch>
  </main>
)

export default Main
