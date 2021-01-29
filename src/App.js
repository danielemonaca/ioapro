import React from "react";
import './App.css';
import TopBar from "./components/TopBar/TopBar";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import Footer from "./components/Footer/Footer";
import AddActivity from "./components/AddActivity/AddActivity";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <TopBar/>
                <Switch>
                    <Route exact path="/" component={MainDashboard}/>
                    <Route exact path="/add-business" component={AddActivity}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
