import React from "react";
import Guillemet from './guillemet.png'
import LinearDeterminate from './LinearProgress'
import {  Col, Row } from "reactstrap";

import styled from "styled-components";

export default function Section2() {
    const Hero = styled.div`
    font-family: 'poppins';
    padding:0;
    margin:0;
    width: 100%;
    height: 100vh;
    background-color:#232323;
    @media screen and (max-width: 1199px) {
      margin-bottom: 7px;
      width: 100%;
      height: 697px;
      background-color:#232323;
    
    }
    @media screen and (max-width: 991px) {
      width: 100%;
      height: 1000px;
      background-color: #232323;
      margin-bottom: 10px;

    }
    @media screen and (max-width: 767px)  {
      margin-bottom: 5px;

      @media screen and (min-height: 351px)  {
        width: 100%;
        height: 389px;
        background-color: #232323;
      }
      @media screen and (max-height: 351px)  {
        width: 100%;
        height: 357px;
        background-color: #232323;
      }
     
    }
  
    @media screen and (max-width: 575px) {
      width: 100%;
      height: 685px;
      margin-bottom: 5px;
      background-color: #232323;
    }
    
  `;
 
  
  return (
    <div id={'section2'}>

    <Hero >
          {/* *********************************************************************************
            *************************** Contenue Ordinateur *********************************
            ********************************************************************************* */}
        
        <div style={{padding:0, margin:0,width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}className='d-none d-xl-block'> 
            <div style={{ color:'white',fontSize:30,fontWeight:'lighter', marginLeft:'80%', paddingTop:60, marginBottom:30}}>#Compétences</div>                  
          
            <Row  style={{ color:'white', position:'absolute', display:'flex',justifyContent:'center', flexDirection:'row', width:'100%', height:'auto'}}>
                <Col xs={6} >
                    <img src={Guillemet} style={{height:80}}/>
                    <p  style={{marginLeft:30, fontStyle:'italic',fontSize:30,  }}>Apprendre, c'est se retrouver.</p>
                    <p style={{backgroundColor:'#A02C2C', width:175, textAlign:'center', marginTop:10}}>Malcolm De Chazal</p>
                    <p style={{fontWeight:'lighter', fontSize:15,  color:'#909090',marginTop:30}}>
                        Ma curiosité et mon amour pour la connaissance me pousses à constament apprendre de nouvelles compétences dans de nombreux domaines.<br/>
                        Une profession épanouissante est, pour moi, une activité mélant créativité et constante apprentissage.<br/>
                        Ainsi, je cherche un stage en tant que développeur pour <br/>valider mon diplôme et en faire mon métier.
                    </p>
                </Col>
               
              
                <Col xs={5}>
                 <LinearDeterminate/>
                </Col>
              
               
              
             
            </Row>
         
           
        </div> 

         {/* *********************************************************************************
            *************************** Contenue mobile verticale *********************************
            ********************************************************************************* */}

        <Col style={{paddingTop:'20%', color:'white',  width:'100%'}}className='d-block d-sm-none'> 
            <img src={Guillemet} style={{marginLeft:80,height:30}}/>
            <p  style={{marginLeft:80, fontStyle:'italic',fontSize:18,  }}>Apprendre, c'est se retrouver.</p>
            <p style={{marginLeft:200,backgroundColor:'#A02C2C', width:150, textAlign:'center', marginTop:-10, fontSize:13,marginBottom:22}}>Malcolm De Chazal</p>
            <Col xs={12} style={{ color:'white',fontSize:12,fontWeight:'lighter',color:'#909090',marginBottom:50 }}>  
                
                        Ma curiosité et mon amour pour la connaissance me pousses à constament apprendre de nouvelles compétences dans de nombreux domaines.<br/>
                        Une profession épanouissante est, pour moi, une activité mélant créativité et constante apprentissage.<br/>
                        Ainsi, je cherche un stage en tant que développeur pour valider mon diplôme et en faire mon métier.
            </Col>                 
            <Col xs={12} style={{display:'flex',justifyContent:'center',height:'100%', marginTop:'4%', width:'100%',paddingLeft:'7%'}}>
                
                    
                <LinearDeterminate/>
               
               
                
            </Col>
           
        
        </Col> 
             {/* *********************************************************************************
            *************************** Contenue mobile horizontale *********************************
            ********************************************************************************* */}
        
        <div style={{padding:0, margin:0, width:'100%', height:'100%'}} className='d-none d-sm-block d-md-none'> 
        <p style={{ color:'white',fontSize:20,fontWeight:'lighter',paddingTop:20, marginLeft:'72%'}}>#Compétences</p>                  

          <Row style={{ width:'100%',}}>
                <Col  style={{ color:'white',marginLeft:30, display:'flex', flexDirection:'row',width:'100%', marginTop:'-5%' }}>
                   
                    <div style={{display:'flex', flexDirection:'column'}}>

                    <img src={Guillemet} style={{marginLeft:10,height:35, width:40}}/>
                        <p  style={{marginLeft:10, fontStyle:'italic',fontSize:18,  }}>Apprendre, c'est se retrouver.</p>
                        <p style={{marginLeft:120,backgroundColor:'#A02C2C', width:150, textAlign:'center', marginTop:-10, fontSize:13,marginBottom:22}}>Malcolm De Chazal</p>
                        <p style={{fontWeight:'lighter',marginTop:'3%', fontSize:12, width:300, color:'#909090',textAlign:'center'}}>
                            Ma curiosité et mon amour pour la connaissance me pousses à constament apprendre de nouvelles compétences dans de nombreux domaines.<br/>
                            Une profession épanouissante est, pour moi, une activité mélant créativité et constante apprentissage.<br/>
                            Ainsi, je cherche un stage en tant que développeur pour valider mon diplôme et en faire mon métier.
                        </p>
                    </div>    
                </Col> 

                <Col style={{ color:'white',marginTop:'1%'}}>
                    <LinearDeterminate />
                </Col>
          </Row>
           
          
           
        </div> 

           {/* *********************************************************************************
            *************************** Contenue tablette *********************************
            ********************************************************************************* */}
        
        <div style={{padding:0, margin:0,  }}className='d-none d-md-block d-xl-none'> 
            <div  className='d-none d-md-block d-lg-none' style={{ color:'white',fontSize:30,fontWeight:'lighter', marginLeft:'67%', paddingTop:'11%',marginBottom:'10%',}}>#Compétences</div>                  
            <div  className='d-none d-lg-block d-xl-none' style={{ color:'white',fontSize:30,fontWeight:'lighter', marginLeft:'75%', paddingTop:'7%'}}>#Compétences</div>                  

          <Row style={{ width:'100%',  paddingLeft:50}}>

                <Col xs={5} style={{width:'100%',  color:'white'}}>
                   
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <img src={Guillemet} style={{marginLeft:20,height:35, width:40}}/>
                        <p  style={{marginLeft:30, fontStyle:'italic',fontSize:18,   width:280}}>Apprendre, c'est se retrouver.</p>
                        <p style={{marginLeft:150,backgroundColor:'#A02C2C', width:150, textAlign:'center', marginTop:-10, fontSize:13,marginBottom:22}}>Malcolm De Chazal</p>
                        <p style={{fontWeight:'lighter',marginTop:27, fontSize:12, width:300, color:'#909090',marginTop:30, textAlign:'center'}}>
                            Ma curiosité et mon amour pour la connaissance me pousses à constament apprendre de nouvelles compétences dans de nombreux domaines.<br/>
                            Une profession épanouissante est, pour moi, une activité mélant créativité et constante apprentissage.<br/>
                            Ainsi, je cherche un stage en tant que développeur pour valider mon diplôme et en faire mon métier.
                        </p>
                    </div>    
                </Col> 

                <Col xs={6} style={{ marginTop:23, backgroundColor:'red', height:'100%', color:'white', marginLeft:30}}>
                    <LinearDeterminate/>
                </Col>
          </Row>
           
          
           
        </div> 
     
    </Hero> 
    </div>

   
   
  );
}