// Modules import

import React from "react";
import { Provider } from "mobx-react";
import { Route } from "react-router-dom";
// internal files and components

import postsStore from "../../../../../../Stores/ModelStore";
import MainContainer from "../MainContainer";
import FullPost from "./FullPost/FullPost";
import Header from "../../../../Components/Header/Header";

const Account_page = ({userId}) => {

  const str = "Acceuil";
    return (
      <Provider postsStore={postsStore}>
        {/* Render the maincontainer of the home page */}
        <Route exact path="/home">
          <Header Title="Acceuil" />
          <MainContainer userId={userId} />
        </Route>
        {/* Render a fullpost page (onclick) */}
        <Route exact path="/home/:postId">
          <FullPost userId={userId} />
        </Route>
      </Provider>
    );
};

export default Account_page;
