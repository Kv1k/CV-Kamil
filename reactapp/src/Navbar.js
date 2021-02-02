import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import SideNav, {  NavItem, NavText } from '@trendmicro/react-sidenav';
 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default function Navbar() {
  var scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [selecte,setSelect]=useState(false)
 
  if(selecte){
    var item= 
    <SideNav.Nav style={{backgroundColor:'rgb(0,0,0,0.8)'}} defaultSelected="home">
     <NavItem style={{margin:0, display:'flex', alignItems:'center', height:45}} >
    
        <Link
            style={{textDecoration:'none', marginLeft:30}}
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}                      
            duration={500}
        >
          Présentation
        </Link>
      </NavItem>
      <NavItem style={{margin:0, display:'flex', alignItems:'center', height:45}} >
          
        <Link
            style={{textDecoration:'none', marginLeft:30}}
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={500}
        >
          Compétences
        </Link>
      </NavItem>

      <NavItem style={{margin:0, display:'flex', alignItems:'center', height:45}} >
          
        <Link
            style={{textDecoration:'none', marginLeft:30}}
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            duration={500}
        >
          Projets
        </Link>
      </NavItem>

      <NavItem style={{margin:0, display:'flex', alignItems:'center', height:45}} >
          
        <Link
            style={{textDecoration:'none', marginLeft:30}}
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            duration={500}
        >
          Experiences &  Diplômes
        </Link>
      </NavItem>
      <NavItem style={{margin:0, display:'flex', alignItems:'center', height:45}} >
          
        <Link
            style={{textDecoration:'none', marginLeft:30}}
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            duration={500}
        >
          Contact
        </Link>
      </NavItem>
   
    </SideNav.Nav> 
      
      
    
      
    
  }
  else{
    var item= 
    <SideNav.Nav defaultSelected="home">
      <NavItem eventKey="home">
       
        <NavText></NavText>
      </NavItem>
   
    </SideNav.Nav> 
    
  }
  
    
    return (
      <div  style={{fontFamily:'Poppins', fontSize:19 }}  className="nav-content nav">

          {/* *********************************************************************************
      *************************** Contenue Mobile verticale *********************************
      ********************************************************************************* */}
          <div className="d-block d-md-none">
          <SideNav
            
            onSelect={(selected) => {
              
            }}
          >
            <SideNav.Toggle   className='nav-item'onClick={()=>setSelect(!selecte)} />
            {item}
                
          </SideNav>
        
       
          
        </div>

          {/* *********************************************************************************
      *************************** Contenue Ordinateur *********************************
      ********************************************************************************* */}
        <div style={{paddingTop:10, fontSize:14, paddingLeft:'10%'}}className="d-none d-xl-block">
          
       
          <li   className="nav-item">
           <Link
             style={{textDecoration:'none'}}
             activeClass="active"
             to="section1"
             spy={true}
             smooth={true}
             
             duration={500}
           >
             Présentation
           </Link>
         </li>
         <li  className="nav-item">
           <Link
             style={{textDecoration:'none'}}
             activeClass="active"
             to="section2"
             spy={true}
             smooth={true}
             duration={500}
           >
            Compétences
           </Link>
         </li>
         <li  className="nav-item">
           <Link
             style={{textDecoration:'none'}}
             activeClass="active"
             to="section3"
             spy={true}
             smooth={true}
             duration={500}
           >
            Projets
           </Link>
         </li>
         <li  className="nav-item">
           <Link
             style={{textDecoration:'none'}}
             activeClass="active"
             to="section4"
             spy={true}
             smooth={true}
             duration={500}
           >
           Experiences &  Diplômes
           </Link>
         </li>
         
         <li  className="nav-item">
           <Link
             style={{textDecoration:'none'}}
             activeClass="active"
             to="section5"
             spy={true}
             smooth={true}
             duration={500}
           >
             Contact
           </Link>
         </li>
      
       
        
       
        </div>

          {/* *********************************************************************************
            *************************** Contenue Tablette *********************************
            ********************************************************************************* */}
        <div style={{paddingTop:10, fontSize:14}}className="d-none d-md-block d-xl-none">
          
       
           <li   className="nav-item">
            <Link
              style={{textDecoration:'none'}}
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              
              duration={500}
            >
              Présentation
            </Link>
          </li>
          <li  className="nav-item">
            <Link
              style={{textDecoration:'none'}}
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              duration={500}
            >
             Compétences
            </Link>
          </li>
          <li  className="nav-item">
            <Link
              style={{textDecoration:'none'}}
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              duration={500}
            >
             Projets
            </Link>
          </li>
          <li  className="nav-item">
            <Link
              style={{textDecoration:'none'}}
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              duration={500}
            >
            Experiences &  Diplômes
            </Link>
          </li>
          <li   className="nav-item">
            <Link
              style={{textDecoration:'none'}}
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
         
       
        
         
        
        </div>
      </div>
   
     
    );
  
}
