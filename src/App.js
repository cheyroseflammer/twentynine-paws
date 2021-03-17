import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/ui/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import Grooming from './components/pages/Grooming/Grooming'
import Footer from './components/ui/Footer/Footer'
import Footer2 from './components/ui/Footer/Footer2'
import PriceList from './components/pages/Prices/PriceList'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/grooming' component={Grooming} />
        <Route path='/prices' component={PriceList} />
        {/*<Route path='/products' component={Products} /> 
        <Route path='/contact-us' component={ContactUs} />
         <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} /> */}
      </Switch>
      <Footer2 />
    </Router>
  )
}

export default App
