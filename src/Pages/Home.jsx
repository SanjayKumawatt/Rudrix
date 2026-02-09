import React from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import DigitalFuture from '../Components/DigitalFeatures'
import Solutions from '../Components/Solutions'
import CTA from '../Components/CTA'
import StudyPortal from '../Components/StudyPortal'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <DigitalFuture/>
        <Solutions/>
        <StudyPortal/>
        <CTA/>
    </div>
  )
}

export default Home