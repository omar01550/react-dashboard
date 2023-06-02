import React, { useState } from 'react';
import './new.css';

const AwesomeForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [semester, setSemester] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted:', { username, password, semester, age });
    };

    return (
        <form className="awesome-form" onSubmit={handleSubmit}>
            <h2>add new student</h2>

            <div className="form-field">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="studentName"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
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
                <label htmlFor="semester">Semester:</label>
                <input
                    type="text"
                    id="semester"
                    value={semester}
                    onChange={e => setSemester(e.target.value)}
                    required
                />
            </div>

            <div className="form-field">
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    max="170"
                    onChange={e => setAge(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Create account</button>
        </form>
    );
};

export default AwesomeForm;