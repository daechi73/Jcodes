import React from "react";
import CommentBox from "./CommentBox";

function Comments(props) {
  return (
    <div className="blog-comments">
      <CommentBox signedInUser={props.signedInUser} signedIn={props.signedIn} />
    </div>
  );
}

export default Comments;
