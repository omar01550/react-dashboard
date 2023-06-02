import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import CradCount from '../cardCount/cardCount.jsx'

const Table = () => {
    const route = useNavigate('');
    return (
        <div className="table">
            <ul>
                <li onClick={() => {
                    route('/courses')
                }}>courses</li>
                <li>students</li>
            </ul>

            <section>

                <Routes>
                    <Route path="/courses" element={<CradCount />} />
                </Routes>

            </section>
        </div>
    )
}

export default Table