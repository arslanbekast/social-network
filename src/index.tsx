import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/store";


const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree(store.getState()));
// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>,
//   document.getElementById('root')
// );