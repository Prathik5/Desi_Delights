import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Router, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

 


const AppLayout = () => {
  return(
    <>
      <Header />
      {/* {Outlet COmponent} */}
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path: "/restaurant/:id",
        element : <Menu/>
      }
    ] 
  },
  
])

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<RouterProvider router = {appRouter} />)