import React from "react";

const Price_infos = ({ post, PostType }) => {
  return (
    <div className="price_infos">
      {post.TransactionType === "Petsit" && (
        <div className="status_type petsit">{PostType}</div>
      )}
      {(post.TransactionType === "Adobt" ||
        post.TransactionType === "Adoption") && (
        <div className="status_type adoption">{PostType}</div>
      )}
      {post.TransactionType === "Sell" && (
        <div className="status_type buysell">{PostType}</div>
      )}
      {post.TransactionType === "Buy" && (
        <div className="status_type buysell">{PostType}</div>
      )}
      {(post.PostType === "Offer" || post.PostType === "Offre") &&
        post.TransactionType === "Sell" && (
          <div className="price">{post.Price} Dh</div>
        )}
      {(post.PostType === "Offer" || post.PostType === "Offre") &&
        post.TransactionType === "Petsit" && (
          <div className="price">{post.Duration}</div>
        )}
    </div>
  );
};

export default Price_infos;
