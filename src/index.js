import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact'
import Profile from './components/Profile'
import Service from './components/Services'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/collapse.js";
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';




class MyNavbar extends React.Component{
  render() {
      return (
        <div> 
         <BrowserRouter>
         <NavBar/>
         <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route path='/About' component={About}></Route>
         <Route path='/Contact' component={Contact}></Route>
         <Route path='/Service' component={Service}></Route>
         <Route path='/Profile' component={Profile}></Route>
          </Switch>
          <Footer/>

          </BrowserRouter>

        </div>
      
      
      );
  }
}

ReactDOM.render(<MyNavbar />, document.getElementById('root'));