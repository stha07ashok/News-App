import React from 'react'
import {Link} from "react-router-dom";

const Navbar = ()=> {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/technology">Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
}

export default Navbar