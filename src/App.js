import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
  /* 
    - Header
      -- NavBar         : Done
      -- Cart           : Done
    - Body 
      -- Search bar
      -- Restro list    : Done
        --- Restraunt Card  : Done
          ---- Image        : Done
          ---- Name         : Done
          ---- Cuisines     : Done
          ---- Distance     : Done     
          ---- Cost         : Done
    - Footer
      -- Links
      -- Copyright
      -- ContactInfo 
  */
const AppLayout = () => {
  return(
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<AppLayout />);