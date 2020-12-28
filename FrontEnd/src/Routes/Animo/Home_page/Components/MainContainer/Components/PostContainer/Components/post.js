// Modules import

import React, { useState, useEffect } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import { observer, inject } from "mobx-react";
import moment from "moment";
import { useHistory } from 'react-router-dom'

// internal files and componenets
import animationData from "../../../animation.json";
import PriceInfos from "./Post_Price";
import PostBody from "./Post_Body";
import PostHeader from "./Post_Header";

const Post = inject("postsStore")(
  observer(({ post ,apercu,userId}) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid",
      },
    };
    const History = useHistory() ;
    const [PostType, setPostType] = useState("");
    const [isFull, setFulltext] = useState(post.Describtion.length < 150);
    const [usrInfo, setUserInfo] = useState({});
    const [loading, setLoad] = useState(true);
    const [imgLoading, setImgLoading] = useState(true);
    
    useEffect(() => {
      var Url = "/users/userid=";
      if (apercu) {
        Url = Url + userId;
      }else
      {
        Url = Url + post.UsrId;
      }
      axios
        .get(Url, { withCredentials: true })
        .then((res) => {
          console.log(res);
          setLoad(false);
          setUserInfo(res.data.result);
        })
        .catch((err) => console.log(err));

      if (post.TransactionType === "Petsit") {
        const string =
          post.PostType === "Offer" || post.PostType === "Offre"
            ? "Offre de garde d'animaux "
            : "Demande de garde d'animaux";
        setPostType(string);
      }
      if (
        post.TransactionType === "Adobt" ||
        post.TransactionType === "Adoption"
      ) {
        const string =
          post.PostType === "Offer" || post.PostType === "Offre"
            ? "Offre d'adoption "
            : "Demande d'adoption";
        setPostType(string);
      }
      if (post.TransactionType === "Sell") {
        setPostType("Offre de vente");
      }
      if (post.TransactionType === "Buy") {
        setPostType("Demande d'achat");
      }
    }, []);
    var date = Date.now();
    if (post.publishDate !== undefined) {
      date = new Date(post.publishDate);
    }
    const stringDate = moment(date).format("HH:mm");
    const imgname = post.ImageName[0];
    let test = null;
    let token = null;
    if (post.PostType === "Offer" || post.PostType === "Offre") {
      test = post.imageData[0].split("/");
      token = test[7].split("&");
    }
    const handleLoading = () => {
      setImgLoading(false);
    };
    const handleClick =()=>{
      History.push(`/home/${post._id}`);
    }
    return (
      <div className="LinkContainer">
        <div className="Post">
          {/* Loader */}
          {loading && (
            <div className="Loader_Container">
              <Lottie options={defaultOptions} height={60} width={60} />
            </div>
          )}
          {/* Post */}
          {!loading && (
            <>
              <PostHeader
                imgLoading={imgLoading}
                usrInfo={usrInfo}
                handleLoading={handleLoading}
                stringDate={stringDate}
              />
              <PostBody
                post={post}
                imgname={imgname}
                token={token}
                isFull={isFull}
                setFulltext={setFulltext}
                apercu={apercu}
                handleClick={handleClick}
              />
              <PriceInfos post={post} PostType={PostType} />
            </>
          )}
        </div>
      </div>
    );
  })
);

export default Post;
