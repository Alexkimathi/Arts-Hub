import React, { useState } from "react";
import Card from "../componets/ui/Card"
import classes from "./NewArtForm.module.css";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function NewArtsForm() {
  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");
  const [contact, setContact] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const history = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const Art = { title, image_url, contact, author, description };

    fetch("http://localhost:9292/arts", {
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
    <div className="back">
    <Navbar />
    <Card>
    <div className="heading-post">
    <h1>Post Arts Details</h1>
    </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Art-Title</label>
          <input
            type="text"
            required
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Art-Image</label>
          <input
            type="url"
            required
            id="image"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="contact">Phone-No</label>
          <input
            type="text"
            required
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="author">Art-owner</label>
          <input
            type="text"
            required
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add NewArt</button>
        </div>
      </form>
    </Card>
    </div>
  );
}

export default NewArtsForm;
