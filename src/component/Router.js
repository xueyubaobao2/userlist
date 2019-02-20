import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from '../containers/Users'
import AddUser from '../containers/AddUser'
import EditUser from '../containers/EditUser'

class Router extends Component{
   render() {
       return (
        <BrowserRouter>
          <div>
           <Switch>
             <Route path="/"  exact = {true} component={Users} /> 
             <Route path="/addUser"  component={AddUser} />
             <Route path = "/editUser/:id" component={EditUser} />
             {/* <Route path="/:id"  component={Users} /> */}
           </Switch>
          </div>
      </BrowserRouter>
       )  
   }
}

export default Router;