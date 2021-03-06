import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './hello-world'
import JMap from './map'
import Story from './story'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HelloWorld}/>
      <Route exact path='/map' component={JMap}/>
      <Route exact path='/story' component={Story}/>
    </Switch>
  </main>
)

export default Main
