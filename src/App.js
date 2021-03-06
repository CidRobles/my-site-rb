import { React } from 'react'

// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import About from './components/about/About'
import Technologies from './components/technologies/Techonologies'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

// Bootsrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

// Custom theming
import './scss/custom.scss'

const App = () => {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main className="bg-dark py-5" >
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Technologies} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App