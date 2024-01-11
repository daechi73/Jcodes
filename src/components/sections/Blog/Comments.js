import React from "react";
import CommentBox from "./CommentBox";
import { useEffect, useState } from "react";

function Comments(props) {
  const [messages, setMessages] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const scrollToBottom = () => {
    document.body.scrollTo(0, document.body.scrollHeight);
  };
  const getMessages = () => {
    fetch("http://localhost:3000/comments/", { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setMessages(res.comment);
        }
      });
  };
  useEffect(() => {
    getMessages();
  }, [postCount]);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const renderMessages = messages.map((e, i) => {
    return (
      <div className="userComments" key={i}>
        {e.comment}
        {e.user.user_name}
      </div>
    );
  });
  return (
    <div className="blog-comments">
      <CommentBox
        signedInUser={props.signedInUser}
        signedIn={props.signedIn}
        setPostCount={setPostCount}
        postCount={postCount}
      />
      <div className="container-userComments">{renderMessages}</div>
    </div>
  );
}

export default Comments;
