// import React, { useState } from "react";
// import Allarts from "./Allarts";
// import {useNavigate } from "react-router-dom";
// import classes from "./NewArtForm.module.css";
// import Card from "../componets/ui/Card";
// import Navbar from "./Navbar";
// function Update(id) {
//   const [title, setTitle] = useState([]);
//   const [image_url, setImage_url] = useState([]);
//   const [contact, setContact] = useState([]);
//   const [description, setDescription] = useState([]);
//   const [author, setAuthor] = useState([]);

//   const history = useNavigate();

//   var index = Allarts.map(function(e) {
//     return e.id;
//   }).indexOf(id);

//   const handleEdit = (e) => {
//     e.preventDefault();
//     let a = Allarts[index];

//     a.title = title;
//     a.image_url = image_url;
//     a.contact = contact;
//     a.description = description;
//     a.author = author;

//     history("/");
//   };

//   return (
//     <div className="back">
//       <Navbar />
//       <Card>
//         <div className="heading-post">
//           <h1>Post Arts Details</h1>
//         </div>
//         <form className={classes.form} onSubmit={handleEdit}>
//           <div className={classes.control}>
//             <label htmlFor="title">Art-Title</label>
//             <input
//               type="text"
//               required
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div className={classes.control}>
//             <label htmlFor="image">Art-Image</label>
//             <input
//               type="url"
//               required
//               id="image"
//               value={image_url}
//               onChange={(e) => setImage_url(e.target.value)}
//             />
//           </div>
//           <div className={classes.control}>
//             <label htmlFor="contact">Phone-No</label>
//             <input
//               type="text"
//               required
//               id="contact"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//             />
//           </div>
//           <div className={classes.control}>
//             <label htmlFor="author">Art-owner</label>
//             <input
//               type="text"
//               required
//               id="author"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//             />
//           </div>
//           <div className={classes.control}>
//             <label htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               required
//               rows="5"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             ></textarea>
//           </div>
//           <div className={classes.actions}>
//             <button onClick={(e) => handleEdit(e)} type="submit">
//               Edit
//             </button>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// }

// export default Update;
