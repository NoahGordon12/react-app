import React from "react";
import CardList from "./CardList";
import Form from "./Form";
import Card from "./CardList";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Login from "./Login";

import {Route, BrowserRouter as Router} from "react-router-dom";



export default function AppRoute() {

    return(

    <>
        <Router>

            <Navbar />

            <Route path="/" exact component={CardList} /> 
            <Route path="/form" exact component={Form} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" exact component={Login} />

        </Router>
           

    </> 
    )
}
