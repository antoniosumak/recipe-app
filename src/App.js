import React from "react";
import "./App.scss";
//Pages
import Home from "./Pages/Home";

//Komponente
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
    </>
  );
}

export default App;
