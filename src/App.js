import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import './App.css';
import Header from "../src/components/Header"
import Home from "../src/components/Home"
import CheckOut from "../src/components/CheckOut"
import SignIn from "../src/components/Signin"
import {StateProvider} from "../src/components/store/StateProvider"
import reducer, { initialState } from "../src/components/store/Reducer"
import SignUp from './components/SignUp';
import Signin from '../src/components/Signin';


function App() {

  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)

  return (
    <StateProvider reducer={reducer}  initialState={initialState}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header/>
              <CheckOut/>
            </Route>
            <Route path="/login">
              <SignIn/>
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
