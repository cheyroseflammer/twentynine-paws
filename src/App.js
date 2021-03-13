import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/ui/Navbar/Navbar'
// import ContactUs from './components/pages/ContactUs/ContactUs'
import Home from './components/pages/Home/Home'
import Grooming from './components/pages/Grooming/Grooming'
import OurServices from './components/pages/OurServices/OurServices'
import Footer from './components/ui/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/grooming' component={Grooming} />
        {/*<Route path='/products' component={Products} /> 
        <Route path='/contact-us' component={ContactUs} />
         <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} /> */}
        <Route path='/services' component={OurServices} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
