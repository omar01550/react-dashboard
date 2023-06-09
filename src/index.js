import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './app.jsx';
import { createStore, combineReducers } from 'redux';
import { TeachersReducer, StudentsReducer, RoomsReducer, CoursesReducer, AlertReducer, alertReducer } from './redux/reducers.js';
import { Provider } from 'react-redux';
import App from './app.jsx';

const rootReducer = combineReducers({
    Teachers: TeachersReducer,
    Students: StudentsReducer,
    Courses: CoursesReducer,
    Rooms: RoomsReducer,
    alertReducer: alertReducer

})

const Store = createStore(rootReducer)
console.log();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={Store}>
        <App />
    </Provider>





);


