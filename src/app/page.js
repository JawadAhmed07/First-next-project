"use client"

import { useState } from "react";

export default function Home() {

  const [name ,setName]=useState("(Your name here)")

  return (
      <div>
        <h1 className="p-4 text-center">
          My name is {name}
        </h1>
        <button
        className="border border-black p-2 flex mx-auto"
        onClick={()=>{
          setName(prompt("Enter your name"))
        }}>Click to add your name</button>
        <h1>working start</h1>
      </div>
  
  );
}

