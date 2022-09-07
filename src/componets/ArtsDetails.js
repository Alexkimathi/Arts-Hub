import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios";
import Navbar from './Navbar';


function ArtsDetails() {
  const params =useParams()


  const [art, setarts] = useState([]);
  useEffect(() => {
    getArtsDetails();
  }, []);

  const getArtsDetails = () => {
    axios
      .get(`http://localhost:9292/arts/${params.artId}`)
      .then((res) => {
        console.log(res);
        setarts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  


  React.useEffect(()=>{
    console.log("params", params)
  }, [params])
  return (
    <div>
    <Navbar />
    
   <div className="art-dets-1" key={art.id}>
   <div className="art-image-1">
         <img src={art.image_url} alt="article url" />
       </div>
     <div className="art-det-1">
       <h2>Title:{art.title}</h2>
       <h3>Author:{art.author}</h3>
       <h3>contact:{art.contact}</h3>
       <h4>{art.description}</h4>

       
     </div>
   </div>
   </div>
  )
}

export default ArtsDetails