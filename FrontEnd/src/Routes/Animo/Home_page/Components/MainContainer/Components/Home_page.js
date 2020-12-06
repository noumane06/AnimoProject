// Modules import

import React from "react";
import { Provider } from "mobx-react";
import { Route } from "react-router-dom";
// internal files and components

import postsStore from "../../../../../../Stores/ModelStore";
import MainContainer from "../MainContainer";
import FullPost from "./FullPost/FullPost";
import Header from "../../../../Components/Header/Header";

const Account_page = () => {

  const str = "Acceuil";
    return (
      <Provider postsStore={postsStore}>
        {/* Render the maincontainer of the home page */}
        <Route exact path="/home">
          <Header route={str} />
          <MainContainer />
        </Route>
        {/* Render a fullpost page (onclick) */}
        <Route exact path="/home/:postId">
          <Header config="test" />
          <FullPost />
        </Route>
      </Provider>
    );
};

export default Account_page;
