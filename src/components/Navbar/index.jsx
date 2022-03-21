import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container">
                <a href="navbar" className="navbar-brand">EzSwap</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <div className="nav-link">Use Wallet</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">Products</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">Contact Us</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}
