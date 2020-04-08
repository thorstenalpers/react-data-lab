import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/Navbar'
import { Live } from './pages/Live'
import { World } from './pages/World'
import { GermanDistricts } from './pages/GermanDistricts'
import { Dashboard } from './pages/Dashboard'

interface MyProps {
  chartLabels: any[]
  chartData: any[]
  data: string[]
  columns: number[]
}
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Route path="/">
        <Switch>
          <Route path="/live" component={Live} exact />
          <Route path="/world" component={World} />
          <Route
            path="/germandistricts"
            component={GermanDistricts}
            props={{
              chartLabels: ['1', '2'],
              chartData: [1, 2],
              data: ['', ''],
              columns: [1, 2, 3],
            }}
          />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Route>
    </BrowserRouter>
  )
}
