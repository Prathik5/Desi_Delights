import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Router, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"))


const AppLayout = () => {
  return(
    <>
      <Header />
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
        element : <About/>,
        children : [{
          path : "profile",
          element : <Profile />
        }]
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path: "/restaurant/:id",
        element : <Menu/>
      },
      {
        path: "/instamart",
        element : ( 
        <Suspense>
          <Instamart/>
        </Suspense>
        )
      }
    ] 
  },
  
])

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<RouterProvider router = {appRouter} />)