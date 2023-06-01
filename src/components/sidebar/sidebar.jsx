import React from 'react';
import './sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = ({ sideBarVisibilty }) => {
    return (
        <div className='slide-bar' style={{
            display: sideBarVisibilty ? "block" : "none"
        }}>
            <h2 className="logo">Omar</h2>
            <ul className="links">


                <li>
                    <a href="">dashboard</a>
                    <div className="icon-container">
                        <i className='fa fa-dashboard'></i>
                    </div>
                </li>

                <li>
                    <a href="">courses</a>
                    <div className="icon-container">
                        <i class="fa-solid fa-school"></i>
                    </div>
                </li>

                <li>
                    <a href="">students</a>
                    <div className="icon-container">
                        <i class="fa-solid fa-school"></i>
                    </div>
                </li>

                <li>
                    <a href="">students</a>
                    <div className="icon-container">
                        <i class="fa-solid fa-school"></i>
                    </div>
                </li>

                <li>
                    <a href="">students</a>
                    <div className="icon-container">
                        <i class="fa-solid fa-school"></i>
                    </div>
                </li>

                <li>
                    <a href="">students</a>
                    <div className="icon-container">
                        <i class="fa-solid fa-school"></i>
                    </div>
                </li>
                <li>
                    <a href="">dashboard</a>
                    <div className="icon-container">
                        <i className='fa fa-users'></i>
                    </div>
                </li>

            </ul>


        </div>
    )
}

export default Sidebar