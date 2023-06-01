import React from 'react'
import Nav from '../../components/navbar/nav.jsx'
import CradCount from '../../components/cardCount/cardCount.jsx';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Pie, PieChart, Cell } from 'recharts';

import './home.css';



const Home = ({ teachers, students, courses }) => {
    const circleData = [
        { name: 'Activated', value: 75 },
        { name: 'Not Activated', value: 25 },
    ];
    const COLORS = ['rgb(136, 132, 216)', '#CCCCCC'];







    console.log(teachers)
    return (
        <div className='home' style={{

        }}>

            <Nav />

            <div className="cards">
                <CradCount icon="fa fa-school" color="color" title="teachers" count="2000" />
                <CradCount icon="fa fa-users" color="color" title="students" count="2000" />
                <CradCount icon="fa fa-bars" color="color" title="courses" count="2000" />
                <CradCount icon="fa fa-person" color="color" title="rooms" count="2000" />
                <CradCount icon="fa fa-person" color="color" title="rooms" count="2000" />
                <CradCount icon="fa fa-person" color="color" title="rooms" count="2000" />


            </div>

            <div className="carts">

                <div className="chart">
                    <BarChart width={350} height={300} data={courses}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="course" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="students" fill="#8884d8" />
                    </BarChart>


                </div>


                <div className="chart">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={circleData}
                            dataKey="value"
                            cx={200}
                            cy={200}
                            innerRadius={80}
                            outerRadius={120}
                            startAngle={90}
                            endAngle={-270}
                            fill="#8884d8"
                            paddingAngle={5}
                            isAnimationActive={true}
                            textAnchor='omar'
                        >
                            {circleData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>

                    {/*start table students*/}
                    {/*end table students*/}
                </div>
            </div>

        </div>
    )
}

export default Home