
// Modules import 

import React, { useState, useEffect } from 'react';
import {observer , inject } from 'mobx-react';
import { Skeleton } from 'antd';
import Lottie from 'react-lottie';
// Internal files and compenents 
import './CSS/posts.scss';
import animationData from './animation.json';
import divider from './Components/Divider';

//************************************* */

const MainContainer = inject(
    'postsStore'
)(
    observer(({postsStore}) => {
    
    const [page , setPage] =  useState(postsStore.howmanyposts/5);

    useEffect(()=>{
        if (postsStore.howmanyposts === 0) {
            postsStore.storingtoStores();
            setPage(page+1);
        }
    },[]);
    const handlClick = () =>
    {
        postsStore.LoadMore(page+1);
        setPage(page+1);
    }
    let rows = divider(postsStore);
    // Lottie options 
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid",
        },
    };
    return (
      <div>
        <title>Acceuil | animo</title>
        {rows}
        {postsStore.loadingState && page === 1 && (
          <div className="Post" style={{ marginTop: 55 }}>
            <Skeleton
              loading={true}
              active
              avatar
              paragraph={{ rows: 0 }}
            ></Skeleton>
            <Skeleton
              loading={true}
              active
              title={false}
              paragraph={{ rows: 7 }}
            ></Skeleton>
          </div>
        )}
        <div
          className="SpinContainer"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 50,
          }}
        >
          {postsStore.howmanyposts !== postsStore.Allpostcount &&(
              <button className="LoadMore" onClick={handlClick}>
                {!postsStore.loadingState && (
                    <>
                        <span>Charger plus</span>
                    </>
                )}
                
                {postsStore.loadingState && page !== 1 && (
                    <>
                        <Lottie options={defaultOptions} height={40} width={40} />
                        <span style={{color : "rgb(4, 106, 208)",fontWeight : "bolder"}}>Chargement</span>
                    </>
                )}
              </button>
          )}
          {postsStore.howmanyposts === postsStore.Allpostcount && page !== 1 && (
            <div className="Nomoredata">
              <span>Plus de publications à vous afficher. ({postsStore.Allpostcount} résultat affiché) </span>
            </div>
              
          )}
        </div>
      </div>
    );
}))
 
export default MainContainer;    