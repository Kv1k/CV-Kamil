import React from "react";
import { Col } from "reactstrap";
import styled from "styled-components";
import Background from './moi.jpg'
import BackgroundVerticale from './moi-mobile.jpg'
import BackgroundHorizontale from './moi-horizontale.jpg'
import BackgroundTabletteV from './moi-tablette-h.jpg'


export default function Section1() {
  var accolade1 = " {";
  var accolade2 = "} ";
  const Hero = styled.div`
    font-family: 'poppins';
    padding:0;
    margin:0;
    width: 100%;
    height: 100vh;
    background-image: url(${Background}); no-repeat;
    -webkit-background-size: cover; /* pour anciens Chrome et Safari */
    background-size: cover;

    @media screen and (min-width: 1800px) {
      min-height:980px;
    }
    @media screen and (min-width: 1199px) {
      min-height:800px;
    


    }
   
    @media screen and (max-width: 1199px) {
      margin-bottom: 7px;
      width: 100%;
      height: 697px;

    }
   
      @media screen and (max-width: 991px) {
        @media screen and (min-height: 391px) {
        width: 100%;
        height: 1000px;
        background-color: rgb(0,0,0,0.65);
        background-image: url(${BackgroundTabletteV}); no-repeat;
        margin-bottom: 10px;
        }
        @media screen and (max-height: 390px) {
          width: 100%;
          height: 390px;
          background-color: rgb(0,0,0,0.65);
          background-image: url(${BackgroundHorizontale}); no-repeat;
          margin-bottom: 10px;
          }
  
      }
    

    @media screen and (max-width: 767px)  {
      background-image: url(${BackgroundHorizontale}); no-repeat;

      margin-bottom: 7px;
      @media screen and (min-height: 351px)  {
        width: 100%;
        height: 389px;
      }
      @media screen and (max-height: 351px)  {
        width: 100%;
        height: 357px;
      }
      
     
    }
    
  
    @media screen and (max-width: 575px) {
    
      @media screen and (max-height: 700px) {
        width: 100%;
        height: 685px;
        margin-bottom: 5px;
        background-image: url(${BackgroundVerticale}); no-repeat;
      }
      @media screen and (min-height: 701px) {
        width: 100%;
        height: 836px;
        margin-bottom: 7px;
        background-image: url(${BackgroundVerticale}); no-repeat;
      }
    }
    
  `;
  const Function = styled.div`
 
   font-size:40px;
   padding-top:100px;
   margin-left:7%;
   

    @media screen and (max-width: 1199px) {
     font-size:28px;
      padding-top:100px;
      margin-left:7%;

    }
 
    @media screen and (max-width: 991px) {
      @media screen and (min-height: 391px) {
        font-size:28px;
        marginTop:10%;
      }
      @media screen and (max-height: 390px) {
        font-size:16px;
        padding-top:8%;
       
      }

    }
     
    

    @media screen and (max-width: 767px)  {
      font-size:16px;
      padding-top:8%;
     
    }
    
    @media screen and (max-width: 575px) {
      font-size:14px;
      padding-top:20%;
      margin-left:2%;
      width:auto;
    }
    
  `;
  const Trait1 = styled.div`
  @media screen and (max-width: 1199px) {
    background-color:#8C8C8C;
    width:1px;
    margin-top:-5px;
    height:280px;
    position:absolute;
    margin-left:3px;

  }
  @media screen and (max-width: 991px) {
    @media screen and (min-height: 391px) {
      background-color:#8C8C8C;
      width:1px;
      margin-top:-5px;
      height:280px;
      position:absolute;
      margin-left:3px;
    }
    @media screen and (max-height: 390px) {
      background-color:#8C8C8C;
      width:1px;
      margin-top:-5px;
      height:175px;
      position:absolute;
      margin-left:1px;
     
    }

  }
`;
const Trait2 = styled.div`
  @media screen and (max-width: 1199px) {
    background-color:#8C8C8C;
      width:1px;
      margin-top:-20px;
      height:150px;
      position:absolute;
      margin-left:2px;

  }
  @media screen and (max-width: 991px) {
    @media screen and (min-height: 391px) {
      background-color:#8C8C8C;
      width:1px;
      margin-top:-20px;
      height:150px;
      position:absolute;
      margin-left:2px;
    }
    @media screen and (max-height: 390px) {
      background-color:#8C8C8C;
      width:1px;
      margin-top:-20px;
      height:100px;
      position:absolute;
      margin-left:1px;
     
    }

  }
`;

  
  return (
    

    <div id={'section1'} >
      <Hero >
       
      <div style={{ backgroundColor:'rgb(0,0,0,0.4)', width:'100%', height:'100%'}}>

    
        {/* *********************************************************************************
        *************************** Contenue Ordinateur *********************************
        ********************************************************************************* */}
        <div  className='d-none d-xl-block' style={{fontSize:40, paddingTop:100, marginLeft:'7%' }}>

          <div style={{display:'flex', flexDirection:'row', color:'#1674C4'}}>
            function &nbsp; <p style={{color:'#FFFCB9'}}>Développeur web&nbsp;</p> 
            <p style={{color:'#FFF700'}}>(</p> <p style={{color:'#90dffa'}}>&nbsp;React,&nbsp;Node.JS</p> 
            <p  style={{color:'#FFF700'}}>)</p> <p  style={{color:'#FFF700'}}>&nbsp;{accolade1}</p>
          </div>

          <div style={{backgroundColor:'#8C8C8C',width:1,  marginTop:-21,marginLeft:3,height:440, position:'absolute'}}></div>

          <div style={{paddingLeft:40, color:'#90dffa'}}>
          
              <div style={{display:'flex', flexDirection:'row', marginTop:5}}><p style={{color:'#1674C4'}}>var</p> &nbsp;<p>présentation&nbsp;</p>          
                <p style={{color:'white'}}> =</p> <p style={{color:'#db6dd3'}}>&nbsp;{accolade1}</p >
              </div>            
              <div style={{backgroundColor:'#8C8C8C',width:1, height:215, position:'absolute', marginTop:-25, marginLeft:4}}></div>

              <div style={{display:'flex', flexDirection:'row', marginTop:5,paddingLeft:40}}> 
                <div>Prénom:</div>
                <div style={{color:'#c6937d'}}>&nbsp;"Kamil"</div> <div style={{color:'white'}}>,</div>
              </div>
              <div style={{display:'flex', flexDirection:'row', paddingLeft:40}}> 
                <div>Nom:</div> 
                <div style={{color:'#c6937d'}}>&nbsp;"NACHAT"</div><div style={{color:'white'}}>,</div>
              </div>
              <div style={{display:'flex', flexDirection:'row', marginBottom:5, paddingLeft:40}}>
                <div>Age:</div> 
                <div style={{color:'#c6937d'}}>&nbsp;"21 ans"</div> 
              </div>
              
            <div style={{display:'flex', flexDirection:'row'}}> <p style={{color:'#db6dd3'}}>{accolade2}</p><p style={{color:'white'}}>&nbsp;;</p></div>
              
          </div>

          <div style={{display:'flex', flexDirection:'row',paddingLeft:40, color:'#db6dd3'}}>return <p style={{ color:'#90dffa'}}> &nbsp;présentation</p> <p style={{color:'white'}}>&nbsp;;</p></div>

          <div  style={{color:'#FFF700'}}>{accolade2}</div>

        </div>
        {/* *********************************************************************************
      *************************** Contenue Mobile *********************************
      ********************************************************************************* */}
        <Function  className='d-block d-sm-none'>

        <div style={{display:'flex', flexDirection:'row', color:'#1674C4', marginBottom:6}}>
            function &nbsp; <div style={{color:'#FFFCB9'}}>Développeur web&nbsp;</div> 
            <div style={{color:'#FFF700'}}>(</div> <div style={{color:'#90dffa'}}>&nbsp;React,&nbsp;Node.JS</div> 
            <div  style={{color:'#FFF700'}}>)</div> <div  style={{color:'#FFF700'}}>&nbsp;{accolade1}</div>
        </div>

          <div style={{backgroundColor:'#8C8C8C',width:0.5,  marginTop:-10,height:160, position:'absolute', marginLeft:2}}></div>

          <div style={{paddingLeft:20, color:'#90dffa'}}>

            <div style={{display:'flex', flexDirection:'row', marginTop:5}}><p style={{color:'#1674C4'}}>var</p> &nbsp;<p>présentation&nbsp;</p>          
              <p style={{color:'white'}}> =</p> <p style={{color:'#db6dd3'}}>&nbsp;{accolade1}</p >
            </div>            
            <div style={{backgroundColor:'#8C8C8C',width:0.5, height:87, position:'absolute', marginTop:-20, marginLeft:2}}></div>

              <div style={{display:'flex', flexDirection:'row', marginTop:5,paddingLeft:20}}> 
                <div>Prénom:</div>
                <div style={{color:'#c6937d'}}>&nbsp;"Kamil"</div> <div style={{color:'white'}}>,</div>
              </div>
              <div style={{display:'flex', flexDirection:'row', paddingLeft:20}}> 
                <div>Nom:</div> 
                <div style={{color:'#c6937d'}}>&nbsp;"NACHAT"</div><div style={{color:'white'}}>,</div>
              </div>
              <div style={{display:'flex', flexDirection:'row', marginBottom:5, paddingLeft:20}}>
                <div>Age:</div> 
                <div style={{color:'#c6937d'}}>&nbsp;"21 ans"</div> 
              </div>
              
            <div style={{display:'flex', flexDirection:'row'}}> <div style={{color:'#db6dd3'}}>{accolade2}</div><div style={{color:'white'}}>&nbsp;;</div></div>
              
          </div>

          <div style={{display:'flex', flexDirection:'row',paddingLeft:20, color:'#db6dd3', marginBottom:6}}>return <div style={{ color:'#90dffa'}}> &nbsp;présentation</div> <div style={{color:'white'}}>&nbsp;;</div></div>

          <div  style={{display:'flex', flexDirection:'row',color:'#FFF700'}}>{accolade2} <p style={{color:'white'}}>&nbsp;;</p>  </div>
        
        </Function>

          {/* *********************************************************************************
        *************************** Contenue Mobile horizontale & Tablette *********************************
        ********************************************************************************* */}
        <div  className='d-none d-sm-block d-xl-none' style={{fontSize:18, paddingTop:'3%', marginLeft:'2%'}}>
          
          {/* //////// Mobile //////// */}
          <Function className='d-none d-sm-block d-md-none' >
            <div style={{display:'flex', flexDirection:'row', color:'#1674C4', marginBottom:2}}>
              function &nbsp; <div style={{color:'#FFFCB9'}}>Développeur web&nbsp;</div> 
              <div style={{color:'#FFF700'}}>(</div> <div style={{color:'#90dffa'}}>&nbsp;React,&nbsp;Node.JS</div> 
              <div  style={{color:'#FFF700'}}>)</div> <div  style={{color:'#FFF700'}}>&nbsp;{accolade1}</div>
            </div>

            <div style={{backgroundColor:'#8C8C8C',width:1,  marginTop:-5,height:175, position:'absolute', marginLeft:1}}></div>

            <div style={{paddingLeft:20, color:'#90dffa'}}>

              <div style={{display:'flex', flexDirection:'row', marginTop:5}}><p style={{color:'#1674C4'}}>var</p> &nbsp;<p>présentation&nbsp;</p>          
                <p style={{color:'white'}}> =</p> <p style={{color:'#db6dd3'}}>&nbsp;{accolade1}</p >
              </div>            
              <div style={{backgroundColor:'#8C8C8C',width:1, height:100, position:'absolute', marginTop:-20, marginLeft:1}}></div>

                <div style={{display:'flex', flexDirection:'row', marginTop:5,paddingLeft:20}}> 
                  <div>Prénom:</div>
                  <div style={{color:'#c6937d'}}>&nbsp;"Kamil"</div> <div style={{color:'white'}}>,</div>
                </div>
                <div style={{display:'flex', flexDirection:'row', paddingLeft:20}}> 
                  <div>Nom:</div> 
                  <div style={{color:'#c6937d'}}>&nbsp;"NACHAT"</div><div style={{color:'white'}}>,</div>
                </div>
                <div style={{display:'flex', flexDirection:'row', marginBottom:5, paddingLeft:20}}>
                  <div>Age:</div> 
                  <div style={{color:'#c6937d'}}>&nbsp;"21 ans"</div> 
                </div>
                
              <div style={{display:'flex', flexDirection:'row'}}> <div style={{color:'#db6dd3'}}>{accolade2}</div><div style={{color:'white'}}>&nbsp;;</div></div>
                
            </div>

            <div style={{display:'flex', flexDirection:'row',paddingLeft:20, color:'#db6dd3', marginBottom:2}}>return <div style={{ color:'#90dffa'}}> &nbsp;présentation</div> <div style={{color:'white'}}>&nbsp;;</div></div>

            <div  style={{display:'flex', flexDirection:'row',color:'#FFF700'}}>{accolade2} <p style={{color:'white'}}>&nbsp;;</p>  </div>
          
          </Function>

          {/* //////// Tablette //////// */}
          <Function className='d-none d-md-block d-xl-none'>
            <div style={{display:'flex', flexDirection:'row', color:'#1674C4', marginBottom:2}}>
              function &nbsp; <div style={{color:'#FFFCB9'}}>Développeur web&nbsp;</div> 
              <div style={{color:'#FFF700'}}>(</div> <div style={{color:'#90dffa'}}>&nbsp;React,&nbsp;Node.JS</div> 
              <div  style={{color:'#FFF700'}}>)</div> <div  style={{color:'#FFF700'}}>&nbsp;{accolade1}</div>
            </div>

            <Trait1></Trait1>

            <div style={{paddingLeft:20, color:'#90dffa'}}>

              <div style={{display:'flex', flexDirection:'row', marginTop:5}}><p style={{color:'#1674C4'}}>var</p> &nbsp;<p>présentation&nbsp;</p>          
                <p style={{color:'white'}}> =</p> <p style={{color:'#db6dd3'}}>&nbsp;{accolade1}</p >
              </div>            
              <Trait2></Trait2>
                <div style={{display:'flex', flexDirection:'row', marginTop:5,paddingLeft:20}}> 
                  <div>Prénom:</div>
                  <div style={{color:'#c6937d'}}>&nbsp;"Kamil"</div> <div style={{color:'white'}}>,</div>
                </div>
                <div style={{display:'flex', flexDirection:'row', paddingLeft:20}}> 
                  <div>Nom:</div> 
                  <div style={{color:'#c6937d'}}>&nbsp;"NACHAT"</div><div style={{color:'white'}}>,</div>
                </div>
                <div style={{display:'flex', flexDirection:'row', marginBottom:5, paddingLeft:20}}>
                  <div>Age:</div> 
                  <div style={{color:'#c6937d'}}>&nbsp;"21 ans"</div> 
                </div>
                
              <div style={{display:'flex', flexDirection:'row'}}> <div style={{color:'#db6dd3'}}>{accolade2}</div><div style={{color:'white'}}>&nbsp;;</div></div>
                
            </div>

            <div style={{display:'flex', flexDirection:'row',paddingLeft:20, color:'#db6dd3', marginBottom:2}}>return <div style={{ color:'#90dffa'}}> &nbsp;présentation</div> <div style={{color:'white'}}>&nbsp;;</div></div>

            <div  style={{display:'flex', flexDirection:'row',color:'#FFF700'}}>{accolade2} <p style={{color:'white'}}>&nbsp;;</p>  </div>

          </Function>
        
        </div>
        </div>
      </Hero>
    </div>
   
     

    
   
  );
}