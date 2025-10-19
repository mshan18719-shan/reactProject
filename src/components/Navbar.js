import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                               {props.aboutText}
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className="color_theme d-flex me-5 justify-content-center align-items-center">
                              <div
                                  className="mx-2 rounded bg-primary" onClick={()=>props.toggleMode('primary')}
                                  style={{ height: "20px", width: "20px", cursor: "pointer"}}
                             ></div>
                              <div
                                  className="mx-2 rounded bg-success" onClick={()=>props.toggleMode('success')}
                                  style={{ height: "20px", width: "20px", cursor: "pointer"}}
                             ></div>
                              <div
                                  className="mx-2 rounded bg-warning" onClick={()=>props.toggleMode('warning')}
                                  style={{ height: "20px", width: "20px", cursor: "pointer"}}
                             ></div>
                              <div
                                  className="mx-2 rounded bg-danger" onClick={()=>props.toggleMode('danger')}
                                  style={{ height: "20px", width: "20px", cursor: "pointer"}}
                             ></div>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                            <input onClick={() => props.toggleMode()} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        </>
    )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Mary',
  aboutText: 'set prop first'
};