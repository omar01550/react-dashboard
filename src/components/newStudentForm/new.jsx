import React, { useState } from 'react';
import './new.css';
import { useDispatch } from 'react-redux';

const AwesomeForm = () => {
    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState("")
    const [password, setPassword] = useState('');
    const [level, setLevel] = useState('');
    const dispatch = useDispatch('')

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: "add-student",
            payload: {
                studentName: studentName,
                studentEmail: studentEmail,
                password: password,
                level: level
            }

        })

        dispatch({
            type: "show-alert",
            payload: {
                message: "student added", type: "success"
            }
        })

        setTimeout(() => {
            dispatch({
                type: "hidden-alert",
                payload: {
                    message: "student added", type: "success"
                }
            })
        }, 2000);

    };

    return (
        <form className="awesome-form" onSubmit={handleSubmit}>
            <h2>Add New Student</h2>

            <div className="form-field">
                <label htmlFor="studentname">student Name:</label>
                <input
                    type="text"
                    id="studentname"
                    value={studentName}
                    onChange={e => setStudentName(e.target.value)}
                    required
                />
            </div>

            <div className="form-field">
                <label htmlFor="studentemail">student Email:</label>
                <input
                    type="email"
                    id="studentemail"
                    value={studentEmail}
                    onChange={e => setStudentEmail(e.target.value)}
                    required
                />
            </div>

            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="form-field">
                <label htmlFor="semester">level:</label>
                <select name="level" id="student Level" value={level} onChange={e => setLevel(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>



                </select>

            </div>



            <button type="submit">Create account</button>
        </form>
    );
};

export default AwesomeForm;