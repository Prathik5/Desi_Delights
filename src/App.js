if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Contact from "./components/Contact";
import { Auth0Provider } from "@auth0/auth0-react";

import Menu from "./components/Menu";
import Profile from "./components/Profile";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart, { addItems, removeItems, clear } from "./components/Cart";
import UserProfile from "./components/UserProfile";

const Instamart = lazy(() => import("./components/Instamart"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Prathik Prakash",
    email: "prathikprakash8@gmail.com",
  });

  return (
    <Provider store={store}>
      <userContext.Provider value={{ user: user, setUser: setUser }}>
        <div class="flex flex-col h-screen justify-between">
          <header>
            <Header />
          </header>
          <main className="mb-auto">
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Prathik Prakash",
              email: "prathikprakash8@gmail.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <Menu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(process.env.DOMAIN_NAME);

root.render(
  <Auth0Provider
    domain={process.env.DOMAIN_NAME}
    clientId={process.env.CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={appRouter} />
  </Auth0Provider>
);
