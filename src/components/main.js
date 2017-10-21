import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './hello-world'
import Map from './map'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HelloWorld}/>
      <Route exact path='/map' component={Map}/>
    </Switch>
  </main>
)

export default Main
