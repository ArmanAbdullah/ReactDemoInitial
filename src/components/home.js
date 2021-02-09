import React, {Component} from "react";
import {store} from "../actions/store";
import {Provider} from "react-redux";
import DCandidates from "./DCandidates";



    const home = ({handleLogout}) => {
    return (
        <section className="home">
            <nav>
            <Provider store={store}>
                <DCandidates/>
            </Provider>
            <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
 }
 export default home;