import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Page/Home';
import Product from './Page/Product';
import Services from './Page/Services';
import Sign from './Page/Sign';

function App() {

 
  return (
    <>
  <Router>
    <Navbar/>
    <Switch>
     <Route  path='/' exact component={Home} />
      <Route  path='/product' component={Product}/> 
      <Route path='/service' component={Services}/>
      <Route path='/signup' component={Sign}/>
    </Switch>
  </Router>
    </>
  );
}

export default App;
