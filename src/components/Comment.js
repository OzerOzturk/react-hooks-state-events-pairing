import React from "react";

function Comment({ comment }) {
  return (
    <div>
      <h4>{comment.user} </h4> {/* people */}
      <p>{comment.comment} </p> {/* it's comment */}
    </div>
  );
}

export default Comment;
