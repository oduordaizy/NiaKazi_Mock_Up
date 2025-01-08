import React from 'react'
import Image from 'next/image'

function Page2() {
  return (
    <div className='secondPageContainer'>
        <div className='moreInfo'>
        <div>
            <Image className='moreInfoIcon' src="/icon1.PNG" width={50} height={50} alt="Icon"/>
            <h1>Connect</h1>
            <p>NiaKazi's mission is to CONNECT Employers with seekers as an efficient and easy to use path simplifying the job search nad hiring process to sides</p>
        </div>

        <div>
            <Image className='moreInfoIcon' src="/icon2.PNG" width={50} height={50} alt="Icon"/>
            <h1>Work</h1>
            <p>Once Employers and job seekers are connected, its time to work together. Our Platform empowers both parties to collaborate effectrively, making meaningful strides towards their career goals</p>
        </div>

        <div>
            <Image className='moreInfoIcon' src="/icon3.PNG" width={50} height={50} alt="Icon"/>
            <h1>Success</h1>
            <p>With Succesful connections and seamless collaboration, SUCCESS becomes the ultimate outcome creating rewarding opportunities that benefit both employers and job seekers</p>
        </div>
        </div>

        <video width="500" height="450" controls>
            <source src="/tutorialVideo.mp4" type="video/mp4" />
            Video Tutorial
        </video>

    </div>
  )
}

export default Page2