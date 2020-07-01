import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import tfamb from '../images/tf-amb.png'
import bird from '../images/bird.png'
import dm from '../images/dm.png'
import poster from '../files/ckp-posterboard.pdf' 

const DevPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div style={{display: 'flex'}}>
        <div style={{width: '225px', alignSelf: 'center', flex: 'none'}}>
            <a href="https://github.com/pinsonc/cela-tf-starter" target="_blank" rel="noreferrer">
                <img src={tfamb} alt='github, neural networks' width="200" height ="175" />
            </a>
        </div>
        <div style = {{width: '700px'}}>
            <h2>Neural Network Recognition of Medical Procedures in Recorded Video</h2>
            <p>
              This was part of a larger research project focused on implementing a system in ambulances 
              that could identify a procedure in real time and report that information from a reporting 
              ambulance to a doctor at an emergency room. This would help significantly cut down on miscommunications
              as the high-stress environment of the emergency can cause many first responders to forget the exact procedures 
              that were performed (number of chest compressions, meds given to stabilize, etc). I focused on attempting to 
              identify procedures based on frame data taken from recorded video. See the poster 
              I presented <a href={poster} target="_blank" rel="noreferrer">here</a>. (Jun 2020 to July 2020)
            </p>
        </div>
    </div>
    <div style={{display: 'flex'}}>
        <div style={{width: '225px', alignSelf: 'center', flex: 'none'}}>
            <a href="https://github.com/lab11/totternary" target="_blank" rel="noreferrer">
                <img src={bird} alt='github, totternary' width="225" height ="200" />
            </a>
        </div>
        <div style = {{width: '700px'}}>
            <h2>TotTernary</h2>
            <p>
              TotTernary is a system for using ultra-wideband RF time-of-flight ranging to perform indoor
              ranging and localization. It incorporates the SquarePoint module, containing the DecaWave
              DW1000 for UWB packet transmission and timestamping. The module provides node-to-node ranges
              over an I2C interface which can then be sent further on using the radio on the mother board.
              I worked for the <a href="http://www.vusealab.com/" target="_blank" rel="noreferrer">Stress and Early Adversity (SEA) Lab</a> and focused on integrating the devices 
              into their research studies by troubleshooting and performing data analysis. (Jan 2019 to Dec 2019)
            </p>
        </div>
    </div>
    <div style={{display: 'flex'}}>
        <div style={{width: '225px', alignSelf: 'center', flex: 'none'}}>
            <a href="https://github.com/pinsonc/Digital-Museum" target="_blank" rel="noreferrer">
                <img src={dm} style={{borderRadius: '50%', overflow: 'hidden'}} alt='github, digital museum' width="200" height ="175" />
            </a>
        </div>
        <div style = {{width: '700px'}}>
            <h2>Digital Museum</h2>
            <p>
              This project was created to assist my course taught at Exploration Summer Schools. It displays
              a collection of Processing projects in a neat format that is easily understandable by museum attendees.
              The project was created using Processing Java which is NOT the best to design a GUI. This
              is so I could explain the code to my students in an effort to let them understand the code that would
              be displaying their own projects. It was an attempt at a learning opportunity but I think it just
              normalized hack-y code for them. (June 2018)
            </p>
        </div>
    </div>
    
  </Layout>
)

export default DevPage
