import React from "react";
import {Route, Link, Switch} from 'react-router-dom'
import Pizza from './Pizza'
// import src from "*.bmp";
const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <Link to ='/'>Home</Link>
      <p>Order pizza Below</p>
      <Link to ='/pizza'>Pizza Time</Link>





      <Switch>
        <Route exact path ='/'></Route>
        <Route path='/pizza' component={Pizza}/>
      </Switch>
    </div>
  );
};
export default App;
