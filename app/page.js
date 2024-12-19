"use client"

import * as React from "react"
import CompleteNavbar from "@/components/Navigation";
import Image from 'next/image';




export function Home() {
  return (
    <>
     
      <div>
        <CompleteNavbar />
        <div>
          <div className="homeContainers">
            <div>
            <p>Unlock your potential, Find your path.</p>
            <h1>Connect. Work. Success</h1>
            </div>
          
          <div><Image id="" src="/bg_image.png" width={800} height={900} alt="Background Image"/></div>
        </div>
        </div>
        
       
      </div>
      
    </>
  );
}

export default Home;