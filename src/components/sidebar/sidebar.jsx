import React from 'react';
import './sidebar.css';
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ sideBarVisibilty }) => {

    const route = useNavigate("");


    return (
        <div className='slide-bar' style={{

        }}>
            <h2 className="logo">Acadimy</h2>
            <ul className="links">


                <li onClick={() => { route("/") }}>

                    <h3>dashboard</h3>
                    <div className="icon-container">

                        <i className='fa fa-dashboard'></i>
                    </div>
                </li>

                <li onClick={() => { route("/add-new") }}>
                    <h3>addNew</h3>
                    <div className="icon-container">

                        <i class="fa-solid fa-school"></i>
                    </div>
                </li>

            </ul>


        </div>
    )
}

export default Sidebar