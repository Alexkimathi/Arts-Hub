import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";



function ArtsDetails() {
  const params =useParams()

  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/arts/${params.artId}`)
      .then((response) => response.json())
      .then((data) => setArt(data));
  }, []);





  // const [art, setarts] = useState([]);
  // useEffect(() => {
  //   getArtsDetails();
  // }, []);

  // const getArtsDetails = () => {
  //   axios
  //     .get(`http://localhost:9292/arts/${params.artId}`)
  //     .then((res) => {
  //       console.log(res);
  //       setarts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  


  React.useEffect(()=>{
    console.log("params", params)
  }, [params])


  const history = useNavigate();
  const handleDelete =()=>{
    fetch('http://localhost:9292/arts/'+ art.id,{
      method: 'DELETE'
    }).then(()=>{
      history("/");
    })
  }



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

     <div className='btn'>
     <button onClick={handleDelete}>Delete</button>
     </div>
   </div>
   </div>
  )
}

export default ArtsDetails