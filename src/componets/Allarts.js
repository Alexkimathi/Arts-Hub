import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
<<<<<<< HEAD
=======
import '../App.css';
import { Link } from "react-router-dom";

>>>>>>> 1a0bbb9660070e89a4ae91a15faec06101948e5f

function Allarts() {
  const [arts, setarts] = useState([]);
  useEffect(() => {
    getArts();
  }, []);

  const getArts = () => {
    axios
      .get("http://localhost:9292/arts")
      .then((res) => {
        console.log(res);
        setarts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
<<<<<<< HEAD
    <div>
    <Navbar />
    
      <div className="art-container">

=======
  

    <div>
    <Navbar />
      <div className="art-container">
   
>>>>>>> 1a0bbb9660070e89a4ae91a15faec06101948e5f
        {arts.map((art) => (
          <div className="art-dets" key={art.id}>
          <div className="art-image">
                <img src={art.image_url} alt="article url" />
              </div>
            <div className="art-det">
              <h2>Title:{art.title}</h2>
              <h3>Author:{art.author}</h3>
              <div className="det">
              <h3>Contact:  {art.contact}</h3>
              </div>
              <Link to={`/artsdetails/${art.id}`}><button className="btn-view">View Art</button></Link>
            </div>
          </div>
        ))}
      </div>
      </div>


      </div>
   

  );
}

export default Allarts;
