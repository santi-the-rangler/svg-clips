import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Ambitious from './demos/ambitious'
import MainHero from './demos/main-hero'
import MediaModule from './demos/media-module'
import MediaCard from './demos/media-card'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main-hero" render={() => <MainHero />} />

        <Route path="/media-module" render={() => <MediaModule />} />

        <Route path="/media-card" render={() => <MediaCard />} />

        <Route path="/" render={() => <Ambitious />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
