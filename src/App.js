import React from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {router} from './router/index'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* NavBar component */}
      
      {/* set all the routers in App.js */}
      <Router>
      <NavBar />
        <React.Suspense>
            <Routes>
                {router.map((e,i) => (
                  <Route path={e.path} element={<e.element/>} key={i} ></Route>
                )
                )}
            </Routes>
          </React.Suspense>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
