
"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";
import About from "./About";
import Abt from "./Abt";
import Services from "./Services";
import Connect from "./Connect";

const LandingPage = () => {


  return (
    <div className="w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100">
    <Hero/>
    <Services />
    <About/>
    <Features/>
    <Connect />
    <Abt />
<Footer />
  </div>
  
  )
}

export default LandingPage
