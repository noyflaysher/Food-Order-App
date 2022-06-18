import Header from "./components/Layout/Header";
import React from "react";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
