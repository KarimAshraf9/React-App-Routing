import { useState } from "react";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Detail from "./components/Detail/Detail";
// import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import Info from "./components/Info/Info";
import Portfolio from "./components/Portfolio/Portfolio";
// import NavBar from "./components/NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {


  const myRoutes = createBrowserRouter([
    {path:'', element:<Layout/>, children:[
      {index:true, element:<Home/>},
      {path:'portfolio', element:<Portfolio />},
      {path:'about', element:<About/>},
      {path:'contact', element:<Contact/>},
    ]}
  ]) 
  

  

  return (
    <>

        <RouterProvider router={myRoutes}/>


      {/* <NavBar />

      <Detail
        showDetailsDialog={showDetailsDialog}
        dialogData={dialogData}
        setShowDetailsDialog={setShowDetailsDialog}
        setDialogData={setDialogData}
      />

      <Home />

      <Portfolio
        setShowDetailsDialog={setShowDetailsDialog}
        setDialogData={setDialogData}
      />

      <About />

      <Contact />

      <Info />

      <Footer /> */}

    </>
  );
}

export default App;
