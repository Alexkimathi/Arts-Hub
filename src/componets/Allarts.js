import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import '../App.css';


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
  

    <div>
    <Navbar />
      <div className="art-container">
   
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
              <button className="btn-view">View Art</button>
            </div>
          </div>
        ))}
      </div>


      </div>
   

  );
}

export default Allarts;
