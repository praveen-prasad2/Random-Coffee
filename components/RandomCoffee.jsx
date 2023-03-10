import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';

function RandomCoffee() {
    const[coffee,setcoffee]=useState({})
    async function showImage(){
        let response=await axios.get('https://coffee.alexflipnote.dev/random.json')
        setcoffee(response.data.file)
        console.log(response);
    }
    useEffect(()=>{showImage()},[])
  return (
    <>
    <h1>coffee</h1>
    <img src={coffee} alt="" />
    </>
  )
}

export default RandomCoffee