import React from "react";
import CardList from "./CardList";
import Form from "./Form";
import Card from "./CardList";
import Navbar from "./Navbar";

import {Route, BrowserRouter as Router} from "react-router-dom";



export default function AppRoute() {

    return(

    <>
        <Router>

            <Navbar />

            <Route path="/form" exact component={CardList} />
            <Route path="/form" exact component={Form} />

        </Router>
           

    </> 
    )
}
