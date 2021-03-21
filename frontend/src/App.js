import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css'

import HomeScreen from './components/screens/HomeScreen'
import Header from './components/layout/Header'

import Footer from './components/layout/Footer'
import LoginScreen from './components/screens/LoginScreen'
import useToken from './useToken'
import BeerScreen from './components/screens/BeerScreen'
import BrewingScreen from './components/screens/BrewingScreen'
import HistoryScreen from './components/screens/HistoryScreen'
import IpaScreen from './components/screens/IpaScreen'
import LagerScreen from './components/screens/LagerScreen'
import AleScreen from './components/screens/AleScreen'

function App() {
  const { token, setToken } = useToken()

  if (!token) {
    return <LoginScreen setToken={setToken} />
  }
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/ale' component={AleScreen} />
            <Route path='/lager' component={LagerScreen} />
            <Route path='/ipa' component={IpaScreen} />
            <Route path='/brewing' component={BrewingScreen} />
            <Route path='/history' component={HistoryScreen} />
            <Route path='/beers/:id' component={BeerScreen} />
            <Route path='/' component={HomeScreen} exact />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
