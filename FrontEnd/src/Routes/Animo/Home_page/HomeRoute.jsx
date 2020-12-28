// Modules import

import React from "react";
import { Provider } from "mobx-react";
import { Route } from "react-router-dom";
// internal files and components

import postsStore from "../../../Stores/ModelStore";
import MainContainer from "./Components/MainContainer/MainContainer";
import FullPost from "./Components/MainContainer/Components/FullPost/FullPost";
import Header from "../Components/Header/Header";

const HomeRoute = ({userId}) => {

    return (
        <div className="Content" >
            <Provider postsStore={postsStore}>
                {/* Render the maincontainer of the home page */}
                <Route exact path="/home">
                <Header Title="Acceuil" />
                <MainContainer  />
                </Route>
                {/* Render a fullpost page (onclick) */}
                <Route exact path="/home/:postId">
                <FullPost userId={userId} />
                </Route>
            </Provider>
        </div>
     
    );
};

export default HomeRoute ;