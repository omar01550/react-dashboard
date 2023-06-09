import React from 'react';
import './courses.css';
import CourseCard from '../courseCard/courseCard.jsx';
import { useSelector } from 'react-redux';

const Courses = () => {

    const coursesData = useSelector((state) => {
        return state.Courses
    })

    return (
        <div className='courses'>
            {
                coursesData.map(ele => <CourseCard
                    name={ele.courseName}
                    courseDescription={ele.courseDescription}
                    courseInstructor={ele.courseInstructor}
                    courseLevel={ele.courseLevel}
                    courseId={ele.courseId}



                    progress={Math.floor(Math.random() * 100)}
                    imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAh1BMVEXw208yMzDy4HDx3FXw20zy32olKC/24FD44lCLgT2PhD303lAwMTAtLzAnKi/Es0YeIy4bIC4PGC3dykt9dTvjz0w8OzFhXDZDQTIVHS6voUNcVzX951FKRzPKuUjTwUlrZDe2p0RRTTR0bDkABSwAEC2Zjj+hlUD05IaFezxWUjQIFC29rUVJjh59AAAEpklEQVR4nO2aaZOiPBCAyfq+STQkhEsBEfCCRf3/v2/BiwTiwczGqa1Kf7CmoA2PnU5fjPXrp+W39d9Py//WT4tBMAgGwSAYBINgEAyCQTAIBsEgGASDYBAMgkEwCAbBIBgEg2AQDIJBMAgGwSC8L0QUtQZqBGPcfCCkVvkWAsmdTnLFA1DqJ9NFBGMXrIrp2k/R30bAUw/exJsOlseTZNPcoRQAYFPW/LlZW/gvI8wguAnsIxCyjlwKJKHxZj00hC4EMimONhgI9bYDl9CEgHzIhgBnxXnYM4QehIaAqgkAYKtQtoMehMnqgQ3Oqkt5GS0IaeA+JgCAB6luBJLxZwQA7B3RZDoQ0oW0DXYTEmTP4BtxGQ0IJPREAGgXdbBk8H5Ebb7wNSOgStgHShOcYpxaCbtaArI1lo6EDitsu32wgX8Nydg6nxIaB9YH4sKq23k3uScFEjbX+eqEPxEdu6tgJ6ijzN1PJ8M8pQOh80abihEAl1k6XEU3ApOeqa5rdCDE6o14JDoQ7C5L80RRo+hHIEshFrL8JYOO0FQL8ZnOh6fwAwiJmKUor8NHtbM2BBIegSiQT/30CYSWTFlAiQEwr8jQQ5/QUy8MaiYGD4kiMGpDsHAwrFmoF5WqLkITApnMFdWrzeOZyhJ6ylfic2UFDVnZT9X6+oiMKhlsvsr6DLq6KZzZ6jqeHkv8iT6iEWRt94qOrpH4YOku3K5CUNPXKhlYNBEZ9CE098MZVXYU7CCq6USwSAMR9zv8Vtxa0NaK0OqQZHMcOmZ86tR1I7R+6RS0lzQAXX0SoYHAeQB7EPx098hPIDROkYYzT9oOVtxD9WcQzp5ZSKdj/3GENk6UIsP+PiX8HEI7JBQY3OT2BY1Dv+EXiFDew/K2E+MQ5GWfpqncHzKQoHNJNv0SAvJD6TFCtQ5n0sTNKtliiIDLjpnVX0AguPJmYtWDtl3s7ezaHsFTFNu8HPSw30QgOKMu2PnCj51sOgR+9y6S5huv3fPdqV+loYXAPBuLgP1tW4vRZecPJBdyMXSu13FY34ZbvMeAcmEIxUeeCIIqcLGhe7efhQsh3sGr95Fqfj95NqvEPgqFwvgFHMfFhTRbebfjxAuC2zcgOK2FU26Dy8ajqVQqxYcsxZc3Jjg9ATFE70ZFRxx4Yq8MSyfPs2ouJh54P2KeVK3ROGq0fT93qsgV77DtKAS5T22qYE4plKt0nt1coerVSZRzez4HPX0AR2ZKsnwy1T4/pxun4n5D2UIP6tjR9YLk+yo5rrvZnhW94G0ldjo/fe9E4OT4bEFWCI5PQlU31yMQQ9ybcQHXT4brtiu95EDh/IUdeCGu/W5oQoH3aEE7duQQRMJl/Ei5FfdAvtRH4Oqoti9jTj8QN9kkfmgI6k1l/ffTFMpX7rBDo/HSVxQrKNz2C9ab/qbf147IlMhqgq/84xiMKvVIlaA8sCGTmSlkq2TQ3Y+qF7B12sb7GLJWYLz3tif14OQMkYbrAO48flV3j7toluFvj8ERxv66rIMgqMuTj1+MFBFOQyeZXdST3EqV+uNrR9JgoMvHO9qv1f/1/18wCAbBIGhBmPy0/PoDbPNV6CAg9i8AAAAASUVORK5CYII="
                />)
            }
        </div>
    )
}

export default Courses