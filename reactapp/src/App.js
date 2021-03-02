import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";



class App extends Component {
  render() {
    
    
    return (
      <div style={{backgroundColor:'#232323', fontFamily:'poppins',fontWeight:'normal'}} >
        {/* Site internet codé par Kamil NACHAT */}
        <Navbar/>
        <Section1 />
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
      
        

      </div>
    );
  }
}

export default App;
