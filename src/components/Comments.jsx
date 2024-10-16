import React, { useState } from "react";

const CommentItem = ({ comments, addNewReply }) => {
  const [showReply, setShowReply] = useState(false);
  const [addReply, setAddReply] = useState(false);
  const viewReply = () => {
    setShowReply(!showReply);
  };
  const addReplyClick = () => {
    setAddReply(!addReply);
  };
  const handleBlur = (e) => {
    const newComment = e.target.value;
    addNewReply(comments.id, newComment);
    setAddReply(false);
    setShowReply(true);
  }
  return (
    <div className="commentContainer" key={comments.id}>
      <div className="details">
        <div className="commentSection">{comments.comment}</div>
        <div className="buttonSection">
          {comments.replies.length > 0 && (
            <button onClick={() => viewReply()}>view reply</button>
          )}
          <button onClick={() => addReplyClick()}>add comment</button>
        </div>
      </div>
      {showReply && comments.replies.length > 0 && (
        <Comments comments={comments.replies} addNewReply={addNewReply} key={comments.id} />
      )}
      {addReply && (
        <input
          className="inputBox"
          autoFocus
          type="text"
          placeholder="Please enter your comment here"
          onBlur={handleBlur}
        ></input>
      )}
    </div>
  );
};

const Comments = ({ comments, addNewReply }) => {
  return (
    <>
      {comments.map((comment) => {
        return (
            <CommentItem comments={comment} addNewReply={addNewReply} key={comment.id} />
        );
      })}
    </>
  );
};
export default Comments;
