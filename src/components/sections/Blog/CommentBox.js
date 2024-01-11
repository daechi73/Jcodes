import React from "react";
import { useState, useEffect } from "react";

function CommentBox(props) {
  const [comment, setComment] = useState("");
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleAddCommentBtn = () => {
    const options = {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: comment, user: props.signedInUser }),
    };
    fetch("http://localhost:3000/comments/", options)
      .then((res) => res.json())
      .then((res) => {
        setComment("");
        props.setPostCount(props.postCount + 1);
      });
  };

  return (
    <div className="blog-commentBox">
      <div className="textArea">
        <textarea
          id="blog-commentArea"
          name="comment"
          rows="5"
          cols="80"
          onChange={handleCommentChange}
          value={comment}
        />
      </div>
      <div className="blog-buttons">
        <button onClick={handleAddCommentBtn}>add comment</button>
      </div>
    </div>
  );
}

export default CommentBox;
