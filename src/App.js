// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./pages/Navbar";
const App = () => {
  return (
    <>
      <h1>Emoji HUB Website</h1>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
