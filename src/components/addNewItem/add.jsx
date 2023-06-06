import React from 'react';
import './add.css';
import { Link } from 'react-router-dom';

const AddNweItem = ({ route, title, active }) => {

    return (
        <Link className="add-new-item" to={route} style={{
            opacity: active && '50%'
        }}>
            <h3 className="title">
                {title}
            </h3>
            <i className="fa fa-plus"></i>
        </Link>
    )
}

export default AddNweItem