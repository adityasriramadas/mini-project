import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './nav';
import Footer from './Footer';
import About from './About';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/collapse.js";
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';




class MyNavbar extends React.Component{
  render() {
      return (
        <div> 
         <BrowserRouter>
         <Switch>
           <Route path='/'>
            <NavigationBar/>
            <Footer/>
          </Route>

          <Route path='/About'><About/></Route>
          </Switch>
          </BrowserRouter>

        </div>
      
      
      );
  }
}

ReactDOM.render(<MyNavbar />, document.getElementById('root'));