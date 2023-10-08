
import Navbar from "./Navbar";
import axios from "axios";
import "../Styles/cover.css";
import About from "./About";
import Service from "./Service";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { useState, useEffect } from "react";




export default function Cover() {

  const [sampleData, setSampleData] = useState(null);


  return (
    <div id="home">
      <section className="landing">
        <div className="landinggrid">
          <div className="tagline">
            <h1>
              Welcome to <b><span>[Your Website]</span></b>
            </h1>
            <h3>
              Live <s>with</s> through us!
            </h3>
          </div>
        </div>
      </section>
      <About />
      <Service />
      <Testimonials />
      {/* <Signup /> */}
      <Footer />
    </div>
  );
}
