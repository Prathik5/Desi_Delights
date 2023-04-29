import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Router, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
// import Instamart from "./components/Instamart";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart, {addItems, removeItems, clear} from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"))

const About = lazy(() => import("./components/About"))

const AppLayout = () => {

  const[user, setUser] = useState({
    name : "Prathik Prakash",
    email : "prathikprakash8@gmail.com"
  });
  



  return(
    <Provider store={store}>
      <userContext.Provider value={
        {user : user,
        setUser : setUser, }
        }>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
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
        element : <Body user={{  
          name : "Prathik Prakash",
          email : "prathikprakash8@gmail.com"
        }} />
      },
      {
        path : "/about",
        element : (
        <Suspense>          
          <About/>
        </Suspense>),
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
      },
      {
        path : "/cart", 
        element : <Cart />
      },
    ] 
  },
  
])

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<RouterProvider router = {appRouter} />)