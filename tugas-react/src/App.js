import React from "react";

// import Tugas4 from "./Tugas4/Tugas4";
// import Tugas5 from "./Tugas5/Tugas5";
// import Tugas6 from "./Tugas6/Tugas6";

import { GlobalProvider } from "./context/GlobalContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tugas7List from "./Tugas7/tugas7List";
import Tugas7Form from "./Tugas7/tugas7Form";

const App = () =>{
      
  return (
  <>
  {/* <Tugas4 /> */}
  {/* <Tugas5 /> */}
  {/* <Tugas6 /> */}

  <BrowserRouter>
    <GlobalProvider>

      <Navbar />
 
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/tugas7" element={<Tugas7List />}></Route>
        <Route path="/create" element={<Tugas7Form />}></Route>
        <Route path="/edit/:idData" element={<Tugas7Form />}></Route>
      </Routes>

    </GlobalProvider>
  </BrowserRouter>
  </>
  )
}

export default App;
