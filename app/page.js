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
            <div className="homeText">
            <p>Unlock your potential, Find your path.</p>
            <h1>Connect.<br></br> Work. Success</h1>
            </div>
          
          <div><Image id="" src="/form-image.png" width={600} height={200} alt="Background Image"/></div>
        </div>
        </div>
        
       
      </div>
      
    </>
  );
}

export default Home;