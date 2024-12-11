import React from "react";

export default function Navbar(props) {
  return (
    <nav id="main-nav" className={props.variant}>
      <div className="container">
        <div className="wrapper">
          <div className="brand">
            <h1>Shopmagnet.</h1>
          </div>
          <div className="links">
            <a title="View on GitHub:Hunshiro" target="_blank" rel="noreferrer" href="https://github.com/Hunshiro"><i className="fa-brands fa-square-github"></i></a>
          </div>
        </div>
      </div>
    </nav>
  )
}