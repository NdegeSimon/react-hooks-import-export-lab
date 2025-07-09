import React from "react";
// EITHER this:
// import myImage from "../images/demo.png";

// OR this (using public folder):
// (delete the import and use src="/images/demo.png")

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
     
      <img src="/images/demo.png" alt="I made this" />
    
    </div>
  );
}
export default About;