import video from "../data/video.js";
import { useState } from "react";
import Comment from "./Comment.js";

function App() {
  const [upvotes, setUpVotes] = useState(video.upvotes);
  const [downvotes, setDownVotes] = useState(video.downvotes);
  const [isvisible, setIsvisible] = useState(true);

  function handleUpVotesChange(e) {
    e.preventDefault();
    setUpVotes(upvotes + 1);
  }

  function handleDownVotesChange(e) {
    e.preventDefault();
    setDownVotes(downvotes + 1);
  }

  function handleIsvisible(e) {
    e.preventDefault();
    setIsvisible(!isvisible);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} | {video.createdAt}
      </p>
      <button onClick={handleUpVotesChange}> {upvotes}</button>
      <button onClick={handleDownVotesChange}>{downvotes} </button>
      <button onClick={handleIsvisible}> Hide Comments</button> <br />
      <div className={isvisible == false ? "notVisible" : "visible"}></div>
      <h3>{video.comments.length} Comments</h3>
      <Comment comment={video.comments[0]} />
      <Comment comment={video.comments[1]} />
    </div>
  );
}

export default App;
