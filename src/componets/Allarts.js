import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Allarts() {

  const [arts, setArt] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/arts")
      .then((response) => response.json())
      .then((data) => setArt(data));
  }, []);
  // const [arts, setarts] = useState([]);
  // useEffect(() => {
  //   getArts();
  // }, []);

  // const getArts = () => {
  //   axios
  //     .get("http://localhost:9292/arts")
  //     .then((res) => {
  //       console.log(res);
  //       setarts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
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
              <Link to={`/artsdetails/${art.id}`}><button className="btn-view">View Art</button></Link>
            </div>
          </div>
        ))}
      </div>
      </div>


    
   

  );
}

export default Allarts;
