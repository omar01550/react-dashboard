import React from 'react'
import './nav.css';

const Nav = () => {
    return (
        <header className="navbar">
            <div className="title">Dashboard</div>
            <div className="search">
                <input type="search" placeholder='search' />
                <div className="icon-container">
                    <i className="fa fa-search"></i>
                </div>
            </div>
        </header>
    )
}

export default Nav