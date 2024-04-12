import React from "react";
import Loginpage from "./components/login/Loginpage"
import Signuppage from "./components/login/Signuppage"
import {Routes , Route} from "react-router-dom"
import Home from "./components/Home";
function App() {
  return (
       <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
  );
}

export default App;

