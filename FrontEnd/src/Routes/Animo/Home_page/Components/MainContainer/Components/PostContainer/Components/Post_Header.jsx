import React from "react";

const Post_Header = ({ imgLoading, usrInfo, handleLoading, stringDate }) => {
  return (
    <div className="Profile">
      <span className={imgLoading ? "dot hide" : "dot"}>
        <img
          src={usrInfo.img}
          alt="profile"
          className={imgLoading ? "prof circle" : "prof"}
          onLoad={handleLoading}
        />
      </span>
      <>
        <div className="name">
          {usrInfo.firstname} {usrInfo.lastname}
        </div>
        <div className="post_time">
          <i className="fas fa-clock" style={{ marginRight: "3px" }}></i>
          {stringDate}
        </div>
      </>
    </div>
  );
};

export default Post_Header;
