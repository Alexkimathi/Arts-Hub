import React, { useState }from 'react'
import { useNavigate } from "react-router-dom";

function Reviews() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const history = useNavigate();
  function handleChange(e) {
    e.preventDefault();
    const Art = { rating, comment };

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Art),
    }).then(() => {
      history("/");
    });
  }
  return (
    <div>
    <form onSubmit={handleChange}>
    <h2>Leave a Review</h2>
    <label htmlFor="rating">Rating</label>
    <input
     type="text"
     placeholder = "Art"
     id='rating'
     name='rating'
     autoComplete='off'
     value={rating}
    onChange={(e) => setRating(e.target.value)}
    />

    <label htmlFor="comment">Comment</label>
    <input
     type="text"
     placeholder = "Art"
     id='comment'
     name='rating'
     autoComplete='off'
     value={comment}
     onChange={(e) => setComment(e.target.value)}
    />
    
    <button type='submit'>Submit</button>
  
    </form>
    </div>
  )
}

export default Reviews