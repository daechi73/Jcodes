import React from "react";
import { useState, useRef } from "react";

function CommentBox(props) {
  const [comment, setComment] = useState("");
  const commentBoxSignInMessage = useRef();
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
    fetch(
      "https://jcode-blogs-authentication-proud-sunset-470.fly.dev/comments",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setComment("");
        props.setPostCount(props.postCount + 1);
      });
  };
  const handleAddCommentBtnNotSignedIn = () => {
    commentBoxSignInMessage.current.style.display = "flex";
  };
  const handleSignInMessageBtn = () => {
    commentBoxSignInMessage.current.style.display = "none";
  };
  return (
    <div className="blog-commentBox">
      <div className="textArea">
        <textarea
          id="blog-commentArea"
          name="comment"
          onChange={handleCommentChange}
          value={comment}
        />
      </div>
      <div className="blog-buttons">
        <button
          onClick={
            props.signedin
              ? handleAddCommentBtn
              : handleAddCommentBtnNotSignedIn
          }
        >
          add comment
        </button>
      </div>
      <div className="commentBox-signIn-message" ref={commentBoxSignInMessage}>
        <div className="commentBox-signIn-message-container-closeBtn ">
          <div
            className="commentBox-signIn-message-closeBtn clickable"
            onClick={handleSignInMessageBtn}
          >
            x
          </div>
        </div>
        <div className="commentBox-signIn-message-message">
          Sign in to comment
        </div>

        <div className="commentBox-signIn-message-filler"></div>
      </div>
    </div>
  );
}

export default CommentBox;
