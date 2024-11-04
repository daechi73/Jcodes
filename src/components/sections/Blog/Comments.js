import React from "react";
import CommentBox from "./CommentBox";
import { useEffect, useState, useRef } from "react";
import "./Comments.css";

function Comments(props) {
  const [messages, setMessages] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [scrollBottom, setScrollBottom] = useState(0);
  const blogComment = useRef();
  const scrollToBottom = () => {
    document.body.scrollTo(0, document.body.scrollHeight);
  };
  const scrollToTop = () => {
    document.body.scrollTo(0, 0);
  };

  const getMessages = () => {
    fetch("https://jcodes-backend.netlify.app/api/comments", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setMessages(res.comment);
          setScrollBottom(scrollBottom + 1);
        }
      });
  };
  useEffect(() => {
    getMessages();
  }, [postCount]);
  useEffect(() => {
    if (scrollBottom > 1) scrollToBottom();
  }, [messages]);
  useEffect(() => {
    scrollToTop();
  }, []);
  // useEffect(() => {
  //   if (!props.signedIn) {
  //     blogComment.current.addEventListener("mouseover", () => {
  //       console.log("working");
  //     });
  //     console.log(blogComment);
  //     console.log("here");
  //   }
  // }, [props.signedIn]);
  const renderMessages = messages.map((e, i) => {
    return (
      <div className="userComments" key={i}>
        <div className="userComments-userName-dateAdded">
          <div className="userComments-userName">{e.user.user_name}:</div>
          <div className="userComments-dateAdded">{e.date_added_formatted}</div>
        </div>
        <div className="userComments-comments">{e.comment}</div>
      </div>
    );
  });
  const fakeMessages = [
    {
      user: { user_name: "SignIn" },
      date_added_formatted: "0000-00-00 12:00:00",
      comment: "Sign in to see the real comments",
    },
    {
      user: { user_name: "CleverMan" },
      date_added_formatted: "0000-00-00 12:00:00",
      comment: "You thought you clever huh",
    },
    {
      user: { user_name: "SignIn" },
      date_added_formatted: "0000-00-00 12:00:00",
      comment: "Sign in to see the real comments",
    },
    {
      user: { user_name: "CleverMan" },
      date_added_formatted: "0000-00-00 12:00:00",
      comment: "You thought you clever huh",
    },
  ];
  const renderFakeMessages = fakeMessages.map((e, i) => {
    return (
      <div className="userComments" key={i}>
        <div className="userComments-userName-dateAdded">
          <div className="userComments-userName">{e.user.user_name}:</div>
          <div className="userComments-dateAdded">{e.date_added_formatted}</div>
        </div>
        <div className="userComments-comments">{e.comment}</div>
      </div>
    );
  });
  return (
    <div className="blog-comments" ref={blogComment}>
      <CommentBox
        signedInUser={props.signedInUser}
        signedIn={props.signedIn}
        setPostCount={setPostCount}
        postCount={postCount}
      />
      <div
        className={
          props.signedIn
            ? "container-userComments"
            : "container-userComments-hidden"
        }
      >
        {props.signedIn ? renderMessages : renderFakeMessages}
      </div>
    </div>
  );
}

export default Comments;
