import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
//Pages
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";

//Komponente
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/favourites" component={Favourites} />
      </Main>
    </>
  );
}

export default App;
