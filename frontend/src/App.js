import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css'

import HomeScreen from './components/screens/HomeScreen'
import Header from './components/layout/Header'
import DashboardScreen from './components/screens/DashboardScreen'
import PreferencesScreen from './components/screens/PreferencesScreen'
import Footer from './components/layout/Footer'
import LoginScreen from './components/screens/LoginScreen'
import useToken from './useToken'

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
            <Route path='/dashboard' component={DashboardScreen} />
            <Route path='/preferences' component={PreferencesScreen} />
            <Route path='/' component={HomeScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
