"use client"
import '../app/globals.css';

import { useState } from "react";

export default function Home() {

  const [name, setName] = useState(("________"))
  return (
    <div>
    <h1 className="py-20 text-center text-5xl ">Hello I am learning react</h1>

    </div>
  );
}

// const [name ,setName]=useState("(Your name here)")

// return (
//     <div>
//       <h1 className="p-4 text-center">
//         My name is {name}
//       </h1>
//       <button
//       className="border border-black p-2 flex mx-auto"
//       onClick={()=>{
//         setName(prompt("Enter your name"))
//       }}>Click to add your name</button>
//     </div>

// );
// }

