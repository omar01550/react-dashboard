import React from 'react';
import './sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = ({ sideBarVisibilty }) => {
    return (
        <div className='slide-bar' style={{

        }}>
            <h2 className="logo">Omar</h2>
            <ul className="links">


                <li>
                    <Link to="/">dashboard</Link>
                    <div className="icon-container">
                        <i className='fa fa-dashboard'></i>
                    </div>
                </li>

                <li>
                    <Link to="add-new">add new </Link>
                    <div className="icon-container">
                        <i class="fa-solid fa-school"></i>
                    </div>
                </li>

            </ul>


        </div>
    )
}

export default Sidebar