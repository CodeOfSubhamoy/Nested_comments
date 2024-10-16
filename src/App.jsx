import { useState } from 'react'
import './App.css'
import Comments from './components/comments'
import comments from './data/commentData';
import {updateComment} from './helperFunction';

function App() {
  const [comment, setComments] = useState(comments)
  const addNewReply = (targetId, newComment) => {
      const newUpdateComment = updateComment(comment, targetId, newComment);
      setComments(newUpdateComment);
  }
  return (
    <>
      <div className="parent">
        <div className="headerSection">
          <h2 className="h2Section">Comment section</h2>
        </div>
       <Comments comments={comment} addNewReply={addNewReply} />
      </div>
    </>
  )
}

export default App
