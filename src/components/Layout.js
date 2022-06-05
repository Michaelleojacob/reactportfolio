import React from "react";
import BackgroundLines from "../components/BackgroundLines";
import Header from "../components/Header";

function Layout(props) {
  return (
    <div className="mi-wrapper">
      <BackgroundLines />
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
