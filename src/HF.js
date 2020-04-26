import React from 'react';
import logo from './logoF.png';
import RecipesList from './RecipesList'
import Home from './Home'
import {Navbar, Nav} from 'react-bootstrap'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route'



class HF extends React.Component {
    render(){
      return (
        <div className="HF">
            <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Recipes">My Recipes</Nav.Link>
                </Nav>
            </Navbar>
            <Route path="/" exact strict render={
                    ()=> {
                        return(<Home/>)

                    }
                }></Route>
                <Route path="/Recipes" exact strict render={
                    ()=> {
                        return(<RecipesList/>)

                    }
                }></Route>
            </Router>
            



            <Navbar bg="dark" variant="dark" fixed="bottom" >
                <p className="text-center F">Copyright © 2020 RABHI Sara . All rights reserved.</p>                
            </Navbar>


        </div>
      );
  
    }
    
  }

  export default HF