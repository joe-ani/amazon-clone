// welcome to my amazon-clone-project, name's ->> joe :). Hope u find the comments helpful :) ->> help from youTube tutorial 🚀
import React, { useEffect } from "react";
import { auth } from "./firebase";
import "./App.css";
// render components👇
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
// Import react ruoter dom dependencies👇, for jumping from page page functionality
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LVOkWJZM58KZz5h2QpTn7RDC3RLy6q4sm8em5EbgjDB0zIWtPEiDtB07eNaqJcokd5HsXtVxaEkR374DIe6Dqmm00nxW8H03v"
);

// app component is the building blocks of a react app via mini components
function App() {
  const [{ user }, dispach] = useStateValue();

  // listen for an user login on app load
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispach({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is not logged in
        dispach({
          type: "SET_UESR",
          user: null,
        });
      }
    });
  }, []);
  // listener☝️

  return (
    // for all page routing...
    <Router>
      <div className="app">
        {/* when at the route render The code block "components" */}

        {/* routes contain components with their paths */}
      {/* <Header/> */}

      
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={
            <Elements stripe={promise}>
                <Payment />
            </Elements>              
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
