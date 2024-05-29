import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [jokes,setJokes]=useState([]);

  useEffect(()=>{
  axios.get("/api/jokes").then((response)=>{
    setJokes(response.data)
  }).catch((error)=> {
    console.log(error)
  })},[])

  return (
    <>
    <div>Cors&Proxy</div>
    <p>JOKES:{jokes.length}</p>
    {jokes.map((joke)=>(
      <div key={joke.id}>
      <h1 >{joke.title}</h1>
      <p>{joke.content}</p>
      </div>
    ))}
    </>
  )
}

export default App