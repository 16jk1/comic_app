import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Start from "./routes/Start";
import Navigation from "./components/Navigation";


function App() {
  return(
    <BrowserRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Start} />
      <Route path='/:id' render={(props) => <Home {...props} />} />
    </BrowserRouter>
  )
}
export default App;
