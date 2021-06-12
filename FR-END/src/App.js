import React from 'react'
import './App.css';
import {Home} from './Components/Home/home';
import {AddUser} from './Components/AddUser/addUser';
import {EditUser} from './Components/EditUser/editUser';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {EditAndView} from "./Components/Page/editAndView";
function App() {
    return (
        <React.Fragment>
            <div>
                <Router>
                    <Route path="/" component={Home}/>
                    <Switch>
                        <Route exact path="/add" component={AddUser}/>
                        <Route exact path="/edit/:id" component={EditAndView}/>
                    </Switch>
                </Router>
            </div>
        </React.Fragment>
    )
}

export default App;
