import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import { createStore, combineReducers } from 'redux';
import { TeachersReducer, StudentsReducer, RoomsReducer, CoursesReducer } from './redux/reducers.js';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    Teachers: TeachersReducer,
    Students: StudentsReducer,
    Courses: CoursesReducer,
    Rooms: RoomsReducer
})

const Store = createStore(rootReducer)
console.log();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



    <Provider store={Store}>
        <App />
    </Provider>


);

