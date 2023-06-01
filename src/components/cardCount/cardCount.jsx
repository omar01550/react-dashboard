import React from 'react'
import './cardCount.css';

const CradCount = ({ color, title, count, icon }) => {
    return (
        <div className="card-count">
            <div className="icon-container">
                <i className={icon}></i>
            </div>

            <h3 className="title">{title}</h3>

            <span className="count">{count}</span>

        </div>
    )
}

export default CradCount