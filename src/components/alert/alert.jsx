import { useState } from 'react';
import React from 'react';
import "./alert.css"

function Alert({ message, type, onClose, isVisible }) {


    const handleDelete = () => {
        setVisible(false);
        onClose();
    };

    return (
        <>
            {isVisible && (
                <div className={`alert ${type}`}>
                    <span>{message}</span>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </>
    );
}

export default Alert;