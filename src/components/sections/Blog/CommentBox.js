import React from "react";

function CommentBox() {
  return (
    <div className="blog-commentBox">
      <div className="textArea">
        <textarea name="comments" rows="5" cols="80" />
      </div>
      <div className="blog-buttons">
        <button>add comment</button>
      </div>
    </div>
  );
}

export default CommentBox;
