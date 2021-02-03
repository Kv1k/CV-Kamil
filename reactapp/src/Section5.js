import React, {useState} from "react";
import {
  Row, Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Linkedin from './linkedin.png'
import './index.css';
import styled from "styled-components";
import GitHub from './github.png'

const Hero = styled.div`
    font-family: 'poppins';
    padding:0;
    margin:0;
    width: 100%;
    height: 100vh;
    background-color:#232323;
    @media screen and (min-width: 1415px) {
      padding-top:40px;
    }
    @media screen and (min-width: 1199px) {
      min-height:840px;

    }
    @media screen and (max-width: 1199px) {
      width: 100%;
      height: 699px;
      background-color:#232323;
    }
    @media screen and (max-width: 991px) {
      width: 100%;
      height: 960px;
      background-color: #232323;
    }
    @media screen and (max-width: 767px)  {
      @media screen and (min-height: 351px)  {
        width: 100%;
        height: 388px;
        background-color: #232323;
      }
      @media screen and (max-height: 351px)  {
        width: 100%;
        height: 375px;
        background-color: #232323;
      }
     
    }
  
    @media screen and (max-width: 575px) {
      width: 100%;
      height: 688px;
      background-color: #232323;
    }
    @media screen and (max-width: 575px) {
      width: 100%;
      height: 688px;
      background-color: #232323;
    }
    
  `;
  const Copyright = styled.div`
    margin-top:9.5%;
    color:white;
    font-size:11px;
    font-weight:lighter;
    @media screen and (max-width: 1415px) {
      margin-top:8.2%;
    }
  @media screen and (max-width: 1199px) {
    margin-top:13%;
  }
  @media screen and (max-width: 991px) {
    margin-top:10%;
  }
  @media screen and (max-width: 767px)  {
    @media screen and (min-height: 351px)  {
      margin-top:3.5%;
    }
    @media screen and (max-height: 351px)  {
      margin-top:2%;
    }
   
  }

  @media screen and (max-width: 575px) {
    margin-top:8%;
    
  }
  
`;
function Section5() {
    const [email, setEmail] = useState('')
    const [nom, setNom] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')

    
    const isEnabled = email.length > 0 && nom.length > 0 && message.length > 0;
    var buttonColor;
    if(isEnabled===true){
        buttonColor='#a02c2c'
    }else{
        buttonColor='rgb(160,44,44,0.2)'
    }

    

    var mailSubmit = async () => {
        
    
        const data = await fetch('contact', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `email=${email}&nom=${nom}&sujet=${subject}&message=${message}`
        })
    
        const res = await data.json()
      
    }
    
  return (
      <Hero  id={'section5'}>
          <Row   style={{ height:'auto', width:'100%'
            ,display:'flex', flexDirection:'row',  justifyContent:'center'}}> 
            {/* *********************************************************************************
                ****************************    COORDONNÉES   ***********************************
                *********************************************************************************  */}
            <Col xs={12} sm={6} md={12} lg={5}  >
              
              {/* ///// Contenue ordinateur & tablette horizontale ///// */}
                        
              <Col className='d-none d-xl-block' style={{marginTop:120}} > 
                <div className='d-none d-lg-block d-xl-none' style={{ color:'white',fontSize:35,fontWeight:'lighter', marginLeft:80}}>#Coordonnées</div> 
                <div className='d-none d-lg-none d-xl-block' style={{ color:'white',fontSize:35,fontWeight:'lighter', marginLeft:80, marginTop:50}}>#Coordonnées</div> 

                <div style={{ marginLeft:80, color:'white', marginTop:60}}> 
                  <Row style={{marginTop:'4%', marginLeft:4}}>                  
                    <FontAwesomeIcon icon={faPhoneAlt} size="3x" style={{marginRight:'6%'}} /> 
                    <p className='d-none d-xl-block' style={{fontSize:29, fontWeight:'lighter'}}> 07.83.97.19.32</p>
                    <p className='d-block d-xl-none' style={{fontSize:24, fontWeight:'lighter'}}> 07.83.97.19.32</p>
                  </Row>
                  <Row style={{ marginTop:40, marginLeft:4 }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" style={{marginRight:'6%'}} />
                    <p className='d-none d-xl-block' style={{fontSize:27, fontWeight:'lighter', width:330, }}>6 rue maumarin, 34920 Le Crès, France </p>
                    <p className='d-block d-xl-none' style={{fontSize:20, fontWeight:'lighter', width:200, }}>6 rue maumarin, 34920 Le Crès, France </p>
                  </Row>
                  <Row style={{ marginTop:40, marginLeft:4, marginBottom:25 }}>
                    <FontAwesomeIcon icon={faEnvelope} size="3x" style={{marginRight:'6%'}} />
                    <p className='d-none d-xl-block' style={{fontSize:27, fontWeight:'lighter',  }}>kam.nach@hotmail.com</p>
                    <p className='d-block d-xl-none' style={{fontSize:20, fontWeight:'lighter', width:200, marginTop:8 }}>kam.nach@hotmail.com</p>
                  </Row>
                  <a style={{paddingTop:20, marginLeft:5}} href="https://www.linkedin.com/in/kamil-nachat-1a11b31a5/"><img style={{width:23}} src={Linkedin}/></a>
                  <a style={{paddingTop:20, marginLeft:10}} href="https://github.com/kv1k"><img style={{width:33}} src={GitHub}/></a>
                </div>      
              </Col>

              {/* ///// Contenue mobile ///// */}
              <Col className='d-block d-md-none' style={{ width:270, marginTop:60, marginBottom:30}} > 
                <div  style={{ color:'white',fontSize:25,fontWeight:'lighter', marginLeft:10, marginBottom:20}}>#Coordonnées</div> 

                <div style={{ marginLeft:10, color:'white', marginTop:10, }}> 
                  <Row style={{marginTop:'4%', marginLeft:4}}>                  
                    <FontAwesomeIcon icon={faPhoneAlt} size="2x" style={{marginRight:'6%'}} /> 
                    <p  style={{fontSize:17, fontWeight:'lighter'}}> 07.83.97.19.32</p>
                  </Row>
                  <Row style={{ marginTop:10, marginLeft:4 }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" style={{marginRight:'6%'}} />
                    <p  style={{fontSize:16, fontWeight:'lighter', width:180, }}>6 rue maumarin, 34920 Le Crès, France </p>
                  </Row>
                  <Row style={{ marginTop:10, marginLeft:4 }}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" style={{marginRight:'6%'}} />
                    <p  style={{fontSize:15, fontWeight:'lighter',  }}>kam.nach@hotmail.com</p>
                  </Row>
                  <a style={{paddingTop:20, marginLeft:5}} href="https://www.linkedin.com/in/kamil-nachat-1a11b31a5/"><img style={{width:23}} src={Linkedin}/></a>
                  <a style={{paddingTop:20, marginLeft:10}} href="https://github.com/kv1k"><img style={{width:33}} src={GitHub}/></a>
                </div>      
              </Col>

                {/* ///// Contenue tablette verticale ///// */}
                <Col className='d-none d-md-block d-xl-none' style={{ marginTop:80, width:600, marginBottom:-20}} > 
                <div  style={{ color:'white',fontSize:30,fontWeight:'lighter', marginLeft:10}}>#Coordonnées</div> 

                <div style={{ marginLeft:10, color:'white', marginTop:10, }}> 
                  <Row style={{marginTop:'4%', marginLeft:4}}>                  
                    <FontAwesomeIcon icon={faPhoneAlt} size="2x" style={{marginRight:'6%'}} /> 
                    <p  style={{fontSize:22, fontWeight:'lighter'}}> 07.83.97.19.32</p>
                  </Row>
                  <Row style={{ marginTop:10, marginLeft:4 }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" style={{marginRight:'6%'}} />
                    <p  style={{fontSize:22, fontWeight:'lighter', width:500, }}>6 rue maumarin, 34920 Le Crès, France </p>
                  </Row>
                  <Row style={{ marginTop:10, marginLeft:4 }}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" style={{marginRight:'6%'}} />
                    <p  style={{fontSize:22, fontWeight:'lighter',  }}>kam.nach@hotmail.com</p>
                  </Row> 
                  <a style={{paddingTop:20, marginLeft:5}} href="https://www.linkedin.com/in/kamil-nachat-1a11b31a5/"><img style={{width:23}} src={Linkedin}/></a>
                  <a style={{paddingTop:20, marginLeft:10}} href="https://github.com/kv1k"><img style={{width:33}} src={GitHub}/></a>   
                </div>   
               
              </Col>
            
                
            </Col>
            {/* *********************************************************************************
                ****************************    FORMULAIRE   ***********************************
                *********************************************************************************  */}
            <Col xs={12} sm={6} md={12}lg={7} >

              {/* ///// Contenue ordinateur ///// */}
              <Col className='d-none d-lg-block' style={{paddingTop:'9%', width:'100%'}}  > 
                <div className='d-none d-lg-block d-xl-none' style={{ color:'white',fontSize:35,fontWeight:'lighter', marginLeft:50}}>#Formulaire de contact</div> 
                <div className='d-none d-xl-block' style={{ color:'white',fontSize:35,fontWeight:'lighter', marginLeft:50, marginTop:50}}>#Formulaire de contact</div> 
                <form style={{marginTop:40,  marginLeft:50}} id='usrform'>
                  <Row style={{width:'90%', marginLeft:0}}>
                    {/* //// ordinateur //// */}
                    <div  className='d-none d-xl-block' style={{width:'100%'}}>
                      <input onChange={(e) => setNom(e.target.value)} 
                      style={{width:'38%', height:40, marginBottom:30,  border:'none', outline: 'none', marginRight:20, backgroundColor:'#333333', textIndent: 10}}
                      type="text" name="name" placeholder='Nom *' />
                  
                      <input onChange={(e) => setEmail(e.target.value)} 
                      style={{width:'58.9%', height:40, marginBottom:30, border:'none', outline: 'none', backgroundColor:'#333333', textIndent: 10}}
                      type="text" name="email" placeholder='Email *'/>              
                    </div>

                      {/* //// tablette //// */}
                    <div  className='d-none d-lg-block d-xl-none'style={{width:'100%'}}>
                      <input onChange={(e) => setNom(e.target.value)} 
                      style={{width:'35%', height:40, marginBottom:30,  border:'none', outline: 'none', marginRight:20, backgroundColor:'#333333', textIndent: 10}}
                      type="text" name="name" placeholder='Nom *' />
                  
                      <input onChange={(e) => setEmail(e.target.value)} 
                      style={{width:'60.1%', height:40, marginBottom:30, border:'none', outline: 'none', backgroundColor:'#333333', textIndent: 10}}
                      type="text" name="email" placeholder='Email *'/>              
                    </div>
                  </Row>
                      
                  <input onChange={(e) => setSubject(e.target.value)} 
                      style={{width:'90%', height:40, marginBottom:30,  border:'none', outline: 'none', backgroundColor:'#333333', textIndent: 10}}
                      type="text" name="subject" placeholder='Sujet (optionnel)' />
                  <div>
                    <textarea onChange={(e) => setMessage(e.target.value)} 
                      style={{width:'90%', height:130, marginBottom:30,  border:'none', outline: 'none', backgroundColor:'#333333',textIndent: 10, paddingTop:8}}
                      name="comment" form="usrform" placeholder='Message *'>
                    </textarea>
                  </div>
                  <button disabled={!isEnabled}
                    onClick={() => mailSubmit()}
                    type="submit" style={{backgroundColor:buttonColor, 
                    width:130, height:37,marginBottom:30,
                    border:'none', outlineColor:'white', color:'white'}}>
                    Envoyer
                  </button>
                </form>           
              </Col>   
          
            {/* ///// Contenue mobile ///// */}
              <Col xs={12} className='d-block d-md-none'style={{width:'auto',padding:0, marginLeft:0}}> 
                <div className='d-block d-sm-none' style={{ color:'white',fontSize:25,fontWeight:'lighter', marginLeft:30}}>#Formulaire</div> 
                <div className='d-none d-sm-block' style={{ color:'white',fontSize:25,fontWeight:'lighter', paddingTop:20}}>#Formulaire</div> 

                <form id='usrform' style={{fontSize:13, marginTop:6, padding:0, marginLeft:0}}>
                  <Row style={{ marginLeft:0,}}>
                    {/* //écran vertical */}
                    <div className='d-block d-sm-none'style={{width:'100%', marginLeft:30}}>
                      <input onChange={(e) => setNom(e.target.value)} 
                      style={{width:'35.5%', height:35, marginBottom:10,  border:'none', outline: 'none', marginRight:20, backgroundColor:'#333333', textIndent: 5}}
                      type="text" name="name" placeholder='Nom *' />
                  
                      <input onChange={(e) => setEmail(e.target.value)} 
                      style={{width:'54%', height:35, marginBottom:10, border:'none', outline: 'none', backgroundColor:'#333333', textIndent: 5}}
                      type="text" name="email" placeholder='Email *'/>
                    </div>
                    
                    {/* //écran horizontal */}
                    <div className='d-none d-sm-block'style={{width:270, padding:0, margin:0}}>
                      <input onChange={(e) => setNom(e.target.value)} 
                      style={{width:100, height:35, marginBottom:10,  border:'none', outline: 'none', marginRight:10, backgroundColor:'#333333', textIndent: 5}}
                      type="text" name="name" placeholder='Nom *' />
                  
                      <input onChange={(e) => setEmail(e.target.value)} 
                      style={{width:160, height:35, marginBottom:10, border:'none', outline: 'none', backgroundColor:'#333333', textIndent: 5}}
                      type="text" name="email" placeholder='Email *'/>
                    </div>
                  </Row>
                    <div className='d-block d-sm-none' style={{marginLeft:30}}>
                      <input onChange={(e) => setSubject(e.target.value)} 
                          style={{width:'100%', height:38, marginBottom:10,  border:'none', outline: 'none', backgroundColor:'#333333', textIndent: 5}}
                          type="text" name="subject" placeholder='Sujet (optionnel)' />
                      <textarea onChange={(e) => setMessage(e.target.value)} 
                      style={{width:'100%', height:100, marginBottom:10,  border:'none', outline: 'none', backgroundColor:'#333333',textIndent: 5, paddingTop:8}}
                      name="comment" form="usrform" placeholder='Message *'>
                      </textarea>
                      <button disabled={!isEnabled}
                      onClick={() => mailSubmit()}
                      type="submit" style={{backgroundColor:buttonColor, 
                      width:120, height:32,
                      border:'none', outlineColor:'white', color:'white'}}>
                      Envoyer
                    </button>
                    </div> 
                 
                   <input  className='d-none d-sm-block' onChange={(e) => setSubject(e.target.value)} 
                      style={{width:270, height:38, marginBottom:10,  border:'none', outline: 'none', backgroundColor:'#333333', textIndent: 5}}
                      type="text" name="subject" placeholder='Sujet (optionnel)' />
                  <div>
                    
                    <textarea  className='d-none d-sm-block' onChange={(e) => setMessage(e.target.value)} 
                      style={{width:270, height:100, marginBottom:10,  border:'none', outline: 'none', backgroundColor:'#333333',textIndent: 5, paddingTop:8}}
                      name="comment" form="usrform" placeholder='Message *'>
                    </textarea>
                  </div>
                  <button className='d-none d-sm-block' disabled={!isEnabled}
                    onClick={() => mailSubmit()}
                    type="submit" style={{backgroundColor:buttonColor, 
                    width:120, height:32,
                    border:'none', outlineColor:'white', color:'white'}}>
                    Envoyer
                  </button>
                </form>           
            
              </Col>
                {/* ///// Contenue tablette verticale ///// */}
              <Col className='d-none d-md-block d-lg-none'style={{ width:'100%',marginTop:60}}> 
                <div  style={{ color:'white',fontSize:30,fontWeight:'lighter', marginLeft:10}}>#Formulaire</div> 
                <form id='usrform' style={{fontSize:13, marginTop:50}}>
                  <Row style={{width:'100%', marginLeft:0}}>                
                    <input onChange={(e) => setNom(e.target.value)} 
                      style={{width:'35.5%', height:50, marginBottom:20,  border:'none', outline: 'none', marginRight:20, backgroundColor:'#333333', textIndent: 10}}
                      type="text" name="name" placeholder='Nom *' />
                  
                    <input onChange={(e) => setEmail(e.target.value)} 
                      style={{width:'61.67%', height:50, marginBottom:20, border:'none', outline: 'none', backgroundColor:'#333333', textIndent: 10}}
                      type="text" name="email" placeholder='Email *'/>                                    
                </Row>
                      
                  <input onChange={(e) => setSubject(e.target.value)} 
                      style={{width:'100%', height:50, marginBottom:20,  border:'none', outline: 'none', backgroundColor:'#333333', textIndent: 10}}
                      type="text" name="subject" placeholder='Sujet (optionnel)' />
                  <div>
                    <textarea onChange={(e) => setMessage(e.target.value)} 
                      style={{width:'100%', height:160, marginBottom:20,  border:'none', outline: 'none', backgroundColor:'#333333',textIndent: 10, paddingTop:8}}
                      name="comment" form="usrform" placeholder='Message *'>
                    </textarea>
                  </div>
                  <button disabled={!isEnabled}
                    onClick={() => mailSubmit()}
                    type="submit" style={{backgroundColor:buttonColor, 
                    width:120, height:38,
                    border:'none', outlineColor:'white', color:'white'}}>
                    Envoyer
                  </button>
                </form>           
            
              </Col> 
            </Col>         
<Copyright>© Kamil NACHAT</Copyright> 

          </Row>            

        
      </Hero> 
  );
}
export default Section5