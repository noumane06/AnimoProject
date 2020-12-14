import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "../../ProgressiveImage/Progressive";

const Post_Body = ({ post, imgname, token, isFull, setFulltext }) => {
  return (
    <>
      <hr style={{ border: "0.5px solid rgb(221 221 221 / 35%)" }} />
      {(post.PostType === "Offer" || post.PostType === "Offre") && (
        <div className="Thumbnail_container">
          <ProgressiveImage
            className="Thumbnail_img"
            alt="puppies"
            width="100%"
            overlaySrc={`https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2Fthumbs%2F${imgname}_50x50?alt=media&${token[1]}`}
            src={post.imageData[0]}
          />
        </div>
      )}

      <h2>{post.Title.charAt(0).toUpperCase() + post.Title.slice(1)}</h2>
      <div className="infos">
        <div className="description">
          {!isFull ? post.Describtion.substr(0, 150) : post.Describtion}
          {!isFull ? (
            <span className="more" onClick={() => setFulltext(true)}>
              {" "}
              <i>Voir plus</i>
            </span>
          ) : (
            ""
          )}
        </div>
        <br />

        <div className="Interaction_user">
          <div className="likes">
            <i className="fas fa-heart" style={{ margin: " 0 6px 0 0" }}></i>
            {post.likes.length - 1} J'aime
          </div>
          {post._id === undefined && (
            <span className="button">Voir l'annonce</span>
          )}
          {post._id !== undefined && (
            <Link className="button" to={`/home/${post._id}`}>
              Voir l'annonce
            </Link>
          )}
        </div>
        <hr style={{ border: "0.5px solid rgb(221 221 221 / 35%)" }} />
      </div>
    </>
  );
};

export default Post_Body;
