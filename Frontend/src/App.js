import React from 'react'
import './App.css';
import {Home} from './Components/Home/home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AddItemPage} from "./Components/Page/AddItemPage/AddItemPage";
import {CalculationPage} from "./Components/Page/CalculationPage/Calculation";
import {About} from "./Components/About/About";
import {AddLoads} from "./Components/AddLoads/AddLoads";
function App() {
    return (
            <div className="background">
                <Router>
                    <Route component={Home}/>
                    <Switch>
                        <Route exact path="/" component={About}/>
                        <Route exact path="/addLoads" component={AddLoads}/>
                        <Route exact path="/add" component={AddItemPage}/>
                        <Route exact path="/calculation" component={CalculationPage}/>
                    </Switch>
                </Router>
            </div>
    )
}

export default App;
