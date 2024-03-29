import React, {useState} from "react";
import Background from './experienceDiplome.jpg'
import BackgroundVerticale from './experienceDiplome-mobile.jpg'
import BackgroundHorizontale from './experienceDiplome-mobileH.jpg'
import BackgroundTabletteV from './experienceDiplome-tabletteV.jpg'
import './index.css';
import {
  Card, 
  CardTitle, Row, Col
} from 'reactstrap';
import styled from "styled-components";
import { Parallax } from "react-parallax";



import Modal from 'react-modal';


export default function Section4() {
  const customStyles = {
    content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          width:'auto', 
          height:'auto',
          transform             : 'translate(-50%, -50%)'
    }
};
 
  const [modalIsOpen,setIsOpen] = useState(false);

  

  const [ nom, setNom]= useState('')
  const [ description, setDescription]= useState('')

  var openModal=(nom, description)=>{
    setNom(nom)
    setDescription(description)
    setIsOpen(true);
  }
  var closeModal=()=>{
      setIsOpen(false);
  }

  const Hero = styled.div`
  display:'flex';
  flex-direction:'column';
  align-items:'center';
  font-family:'Poppins';
  padding:0;
  margin:0;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 1199px) {
    min-height:800px;

  }
  background-size: cover;
  @media screen and (max-width: 1199px) {
    margin-bottom: 7px;
    width: 100%;
    height: 770px;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    margin-bottom: 10px;
    height: 1050px;
  }
  @media screen and (max-width: 767px)  {
    margin-bottom: 5px;
   
    
      width: 100%;
      height: 400px;    
   
  }

  @media screen and (max-width: 575px) {
    
    @media screen and (max-height: 700px) {
      width: 100%;
      height: 800px;
      margin-bottom: 5px;
    }
    @media screen and (min-height: 701px) {
      width: 100%;
      height: 846px;
      margin-bottom: 8px;
    }
  }
  
`;
var theBackground;

if (window.matchMedia("(min-width: 1199px)").matches) {
  theBackground=Background
} 
else if (window.matchMedia("(max-width: 575px)").matches) {
  theBackground=BackgroundVerticale
}
else if (window.matchMedia("(max-width: 767px)").matches) {
  theBackground=BackgroundHorizontale
}
else if (window.matchMedia("(max-width: 991px)").matches) {
  theBackground=BackgroundTabletteV
}
else if (window.matchMedia("(min-width: 991px)").matches) {
  theBackground=Background
}
  return (
    <div id={'section4'}>
    <Parallax style={{height:"100%"}} strength={200} bgImage={theBackground}>
      <Hero >
       
          


        <Row   style={{ height:'100%',
          display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center',  width:'100%'}}> 

          {/* *********************************************************************************
              ****************************    DIPLÔMES   ***********************************
              *********************************************************************************  */}
          <Col xs={12} sm={6} md={12} lg={6}  style={{ display:'flex', justifyContent:'center'}}> 

            {/* //////////// Contenue ordinateur ////////////  */}
            <div className="d-none d-xl-block">

              <Card style={{ width:500,height:570, borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0, marginBottom:80, marginLeft:90, marginTop:80}}>
                <CardTitle 
                  style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.7)',
                  height:80, width:'100%', margin:0,display:'flex', justifyContent:'center', alignItems:'center'}}tag="h5"> 
                  Diplômes 
                </CardTitle>

                <div style={{ height:'64%', width:'100%',marginTop:60 }}>
                  <div className="timeline-wrapper" style={{ height:'100%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    
                    <div className="node" style={{width:'95%',  }}>
                      <h3 style={{fontSize:16, paddingTop:2}}>Titre professionnel Développeur web et mobile </h3>
                      <div style={{fontSize:13, fontFamily:'PoppinsLighter',  marginTop:2}}> La Capsule coding bootcamp | Lyon, France   </div>
                      <div style={{fontSize:12, marginTop:1, color:'#a02c2c'}}>
                        2020 - aujourd'hui</div>

                    </div> 
                     
                    <div className="node" style={{width:'95%',  marginTop:40,}}>
                      <h3 style={{fontSize:16, paddingTop:2}}>Licence Gestion </h3>
                      <div style={{fontSize:13,fontFamily:'PoppinsLighter',  marginTop:2}}> Montpellier Management  | Montpellier, France   </div>
                      <div style={{fontSize:12, marginTop:1, color:'#a02c2c'}}>
                        2017 – 2019</div>

                    </div> 
                    <div className="node" style={{width:'95%',  marginTop:40,}}>
                      <h3 style={{fontSize:16, paddingTop:2, fontWeight:400}}>Baccalauréat section Économique et Sociale, mention ASSEZ BIEN</h3>
                      <div style={{fontSize:13, fontFamily:'PoppinsLighter',  marginTop:2}}>
                         Lycée Georges Pompidou | Castelnau-le-lez, France   
                      </div>
                      <div style={{fontSize:12, marginTop:1, color:'#a02c2c'}}>
                      2016</div>

                    </div>
                    
                  
                  </div>       
                </div>
                
                              
              </Card>
            </div>

            {/* //////////// CONTENUE MOBILE ////////////  */}     
            <div className="d-block d-md-none">

              <Card className="d-block d-sm-none" style={{ width:300,height:320,  borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0 }}>
              <CardTitle style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.8)',
                  height:37, width:'100%', margin:0,display:'flex',
                  justifyContent:'center', alignItems:'center', fontSize:16}}tag="h5"> 
                  Diplômes 
                </CardTitle>

                <div style={{ height:'77%', width:'100%',marginTop:20 }}>
                <div className="timeline-wrapper" style={{ height:'90%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center', }}>
                    <div className="node" style={{width:'95%',  marginTop:12,   marginBottom:-30}}>
                      <h3 style={{fontSize:12, paddingTop:2}}>Titre professionnel Développeur web et mobile </h3>
                      <div style={{fontSize:10, fontFamily:'PoppinsLighter',  marginTop:2}}> La Capsule coding bootcamp | Lyon, France   </div>
                      <div style={{fontSize:11, marginTop:1, color:'#a02c2c'}}>
                        2020 - aujourd'hui</div>

                    </div> 
                     
                    <div className="node" style={{width:'95%',  marginTop:12,  paddingBottom:0}}>
                      <h3 style={{fontSize:12, paddingTop:2}}>Licence Gestion </h3>
                      <div style={{fontSize:10, fontFamily:'PoppinsLighter',  marginTop:2}}> Montpellier Management  | Montpellier, France   </div>
                      <div style={{fontSize:11, marginTop:1, color:'#a02c2c'}}>
                        2017 – 2019</div>

                    </div> 
                    <div className="node" style={{width:'95%', paddingBottom:0 }}>
                      <h3 style={{fontSize:12, paddingTop:2, fontWeight:400}}>Baccalauréat section Économique et Sociale, mention ASSEZ BIEN</h3>
                      <div style={{fontSize:10, fontFamily:'PoppinsLighter',  marginTop:2}}>
                         Lycée Georges Pompidou | Castelnau-le-lez, France   
                      </div>
                      <div style={{fontSize:11, marginTop:1, color:'#a02c2c'}}>
                      2016</div>

                    </div>
                  
                  
                  </div>       
                </div>
                
                              
              </Card>
              <Card className="d-none d-sm-block" style={{ width:'100%',height:350,  borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0 }}>
              <CardTitle style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.8)',
                  height:37, width:'100%', margin:0,display:'flex',
                  justifyContent:'center', alignItems:'center', fontSize:16}}tag="h5"> 
                  Diplômes 
                </CardTitle>

                <div style={{ height:'77%', width:'100%',marginTop:40 }}>
                <div className="timeline-wrapper" style={{ height:'70%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center', }}>
                    <div className="node" style={{width:'95%',  marginTop:12,   marginBottom:-30}}>
                      <h3 style={{fontSize:12, paddingTop:2}}>Titre professionnel Développeur web et mobile </h3>
                      <div style={{fontSize:10, fontFamily:'PoppinsLighter',  marginTop:2}}> La Capsule coding bootcamp | Lyon, France   </div>
                      <div style={{fontSize:11, marginTop:1, color:'#a02c2c'}}>
                        2020 - aujourd'hui</div>

                    </div> 
                     
                    <div className="node" style={{width:'95%',  marginTop:12,  paddingBottom:0}}>
                      <h3 style={{fontSize:12, paddingTop:2}}>Licence Gestion </h3>
                      <div style={{fontSize:10,fontFamily:'PoppinsLighter',  marginTop:2}}> Montpellier Management  | Montpellier, France   </div>
                      <div style={{fontSize:11, marginTop:1, color:'#a02c2c'}}>
                        2017 – 2019</div>

                    </div> 
                    <div className="node" style={{width:'95%', paddingBottom:0 }}>
                      <h3 style={{fontSize:12, paddingTop:2, fontWeight:400}}>Baccalauréat section Économique et Sociale, mention ASSEZ BIEN</h3>
                      <div style={{fontSize:10, fontFamily:'PoppinsLighter',  marginTop:2}}>
                         Lycée Georges Pompidou | Castelnau-le-lez, France   
                      </div>
                      <div style={{fontSize:11, marginTop:1, color:'#a02c2c'}}>
                      2016</div>

                    </div>
                  
                  
                  </div>       
                </div>
                
                              
              </Card>
            </div>

            {/* //////////// Contenue tablette ////////////  */}
            <div className="d-none d-md-block d-xl-none" style={{width:'100%'}}>

                 {/****************** horizontale ******************/}

              <Card className="d-none d-lg-block" style={{ width:'100%',height:640, borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0,marginTop:30}}>
                <CardTitle 
                  style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.7)',
                  height:80, width:'100%', margin:0,display:'flex', justifyContent:'center', alignItems:'center'}}tag="h5"> 
                  Diplômes 
                </CardTitle>

                <div style={{ height:'60%', width:'100%',marginTop:90 }}>
                  <div className="timeline-wrapper" style={{ height:'90%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  
                    <div className="node" style={{width:'95%',  }}>
                      <h3 style={{fontSize:16, paddingTop:2}}>Titre professionnel Développeur web et mobile </h3>
                      <div style={{fontSize:13, fontFamily:'PoppinsLighter',  marginTop:2}}> La Capsule coding bootcamp | Lyon, France   </div>
                      <div style={{fontSize:12,  marginTop:1, color:'#a02c2c'}}>
                        2020 - aujourd'hui</div>

                    </div> 
                     
                    <div className="node" style={{width:'95%',  marginTop:40,}}>
                      <h3 style={{fontSize:16, paddingTop:2}}>Licence Gestion </h3>
                      <div style={{fontSize:13, fontFamily:'PoppinsLighter',  marginTop:2}}> Montpellier Management  | Montpellier, France   </div>
                      <div style={{fontSize:12,  marginTop:1, color:'#a02c2c'}}>
                        2017 – 2019</div>

                    </div> 
                    <div className="node" style={{width:'95%',  marginTop:40,}}>
                      <h3 style={{fontSize:16, paddingTop:2, fontWeight:400}}>Baccalauréat section Économique et Sociale, mention ASSEZ BIEN</h3>
                      <div style={{fontSize:13, fontFamily:'PoppinsLighter',  marginTop:2}}>
                         Lycée Georges Pompidou | Castelnau-le-lez, France   
                      </div>
                      <div style={{fontSize:12,  marginTop:1, color:'#a02c2c'}}>
                      2016</div>

                    </div>
                  
                  </div>       
                </div>
                
                              
              </Card>

             
            </div>
          </Col>      

        

          {/* *********************************************************************************
              ****************************    EXPERIENCES   ***********************************
              *********************************************************************************  */}

          <Col xs={12} sm={6} md={12} lg={6} style={{ display:'flex', justifyContent:'center', width:'100%'}}> 

            {/* //////////// Contenue ordinateur ////////////  */}
            <div className="d-none d-xl-block" >

              <Card style={{ width:500,height:570, borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0, marginBottom:80, marginRight:90, marginTop:80}}>
                <CardTitle 
                  style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.7)',
                   height:80, width:'100%', margin:0,display:'flex', justifyContent:'center', alignItems:'center'}}tag="h5"> 
                  Experiences 
                </CardTitle>

                <div style={{ height:'77%', width:'100%',marginTop:32 }}>
                  <div className="timeline-wrapper" style={{ height:'100%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <div className="node" style={{width:'95%', marginTop:5}}>
                      <h3 style={{fontSize:15,}}>Développeur Full Stack (freelance)</h3>
                      <div style={{fontSize:12, fontFamily:'PoppinsLighter',  marginTop:8}}>H2N Automobile (Le Crès, France) |  Janvier 2021 </div>
                      <div style={{fontSize:11.7,fontFamily:'PoppinsLighter', marginTop:5, color:'#909090'}}>
                        Ouverture au digitale pour l'entreprise H2N Automobile.<br/>
                        J'ai eu le plaisir de créer des maquettes, le site internet, et le logo, de cette dernière et ainsi améliorer ses résultats.<br/>
                        Stacks utilisés:<br/>
                        Back-end: Node.js/ Express / Bases de données NoSQL (MongoDB)<br/>
                        Front-end: React / Redux / CSS</div>

                    </div>
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:15, paddingTop:5}}>Développeur Front-end</h3>
                      <div style={{fontSize:11, fontFamily:'PoppinsLighter',  marginTop:8}}>Ambroisy (Lyon, France) |  Novembre 2020 </div>
                      <div style={{fontSize:10.7,fontFamily:'PoppinsLighter', marginTop:5, color:'#909090'}}>Développement de la partie front end 
                      en autonomie pour la version démo de l'application mobile Ambroisy 
                      permettant  aux personnes atteintes d'allergies alimentaire de trouver facilement des
                       produits autour d'eux. Le travail a été réalisé en équipe de 3 personnes.</div>

                    </div>
                    
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:15, paddingTop:5}}>Promoteur événementiel</h3>
                      <div style={{fontSize:12, fontFamily:'PoppinsLighter',  marginTop:8}}>Barca4Fiesta (Barcelone, Espagne) | Juin 2019 - Septembre 2019 </div>
                      <div style={{fontSize:11.7,fontFamily:'PoppinsLighter', marginTop:5, color:'#909090'}}>
                        - Prospection face à face avec des prospects internationaux<br/>
                        - Présentation des services à des groupes allant jusqu'à 20 personnes<br/>
                        - Organisation de séminaires et dîners d'affaires<br/>
                        - Gestion des réseaux sociaux et satisfaction clients</div>
                    </div>
                  </div>       
                </div>
                 
                               
              </Card>
            </div>

            {/* //////////// CONTENUE MOBILE ////////////  */}     
            <div className="d-block d-md-none" >         

              <Card  className="d-block d-sm-none" style={{ width:300,height:380,  borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0 , marginTop:0}}>
               <CardTitle style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.8)',
                  height:37, width:'100%', margin:0,display:'flex',
                   justifyContent:'center', alignItems:'center', fontSize:16}}tag="h5"> 
                  Experiences 
                </CardTitle>

                <div style={{ height:'67%', width:'100%',marginTop:30 }}>
                <div className="timeline-wrapper" style={{ height:'110%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center', }}>
                     <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:13}}>Développeur Full Stack (Freelance)</h3>
                      <div style={{fontSize:10.5, fontFamily:'PoppinsLighter',  marginTop:2}}>H2N Automobile (Le Crès, France) |  Janvier 2021 </div>
                      <div style={{fontSize:9.5, fontFamily:'PoppinsLighter', marginTop:1, color:'#909090'}}> <button  
                        onClick={()=>openModal(
                          <p style={{fontSize:18, textAlign:'center', color:'#a02c2c'}}>H2N Automobile</p>,
                          <p style={{fontSize:14, fontFamily:'PoppinsLighter', marginTop:5, color:'#909090', width:300}}>
                             Ouverture au digitale pour l'entreprise H2N Automobile.<br/>
                        J'ai eu le plaisir de créer des maquettes, le site internet, et le logo, de cette dernière et ainsi améliorer ses résultats.<br/>
                        Stacks utilisés:<br/>
                        Back-end: Node.js/ Express / Bases de données NoSQL (MongoDB)<br/>
                        Front-end: React / Redux / CSS
                          </p>
                        )} style={{backgroundColor:'#a02c2c', width:'auto', height:24,
                        border:'none', outline:'none', color:'white', borderRadius:4,marginTop:5 }}> Description </button></div>

                    </div>
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:13}}>Développeur Front-end</h3>
                      <div style={{fontSize:10.5, fontFamily:'PoppinsLighter',  marginTop:2}}>Ambroisy (Lyon, France) |  Novembre 2020 </div>
                      <div style={{fontSize:9.5, fontFamily:'PoppinsLighter', marginTop:1, color:'#909090'}}> <button  
                        onClick={()=>openModal(
                          <p style={{fontSize:18, textAlign:'center', color:'#a02c2c'}}>Ambroisy</p>,
                          <p style={{fontSize:14, fontFamily:'PoppinsLighter', marginTop:5, color:'#909090', width:300}}>
                            Développement de la partie front end 
                          en autonomie pour la version démo de l'application mobile Ambroisy 
                          permettant  aux personnes atteintes d'allergies alimentaire de trouver facilement des
                          produits autour d'eux. Le travail a été réalisé en équipe de 3 personnes.
                          </p>
                        )} style={{backgroundColor:'#a02c2c', width:'auto', height:24,
                        border:'none', outline:'none', color:'white', borderRadius:4,marginTop:5 }}> Description </button></div>

                    </div>
                    <div className="node" style={{width:'95%',  paddingTop:0, height:'auto'}}>
                      <h3 style={{fontSize:13}}>Promoteur événementiel</h3>
                      <div style={{fontSize:10.5, fontFamily:'PoppinsLighter',  marginTop:2}}>Barca4Fiesta (Barcelone, Espagne) | Juin 2019 - Septembre 2019 </div>
                      <div style={{fontSize:9.5, fontFamily:'PoppinsLighter', marginTop:1, color:'#909090'}}>
                      <button  
                        onClick={()=>openModal(
                          <p style={{fontSize:18, textAlign:'center', color:'#a02c2c'}}>Barca4Fiesta</p>,
                          <p style={{fontSize:14, fontFamily:'PoppinsLighter',marginTop:5, color:'#909090', width:300}}>
                          - Prospection face à face avec des prospects internationaux<br/>
                          - Présentation des services à des groupes allant jusqu'à 20 personnes<br/>
                          - Organisation de séminaires et dîners d'affaires<br/>
                          - Gestion des réseaux sociaux et satisfaction clients</p>
  
                          
                        )} style={{backgroundColor:'#a02c2c', width:'auto', height:24,
                         border:'none', outline:'none', color:'white', borderRadius:4,marginTop:5 }}> Description </button></div>

                    </div>
                   
                  
                  </div>       
                </div>
                
                              
              </Card>
              <Card  className="d-none d-sm-block" style={{ width:'100%',height:350,  borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0 }}>
               <CardTitle style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.8)',
                  height:37, width:'100%', margin:0,display:'flex',
                   justifyContent:'center', alignItems:'center', fontSize:16}}tag="h5"> 
                  Experiences 
                </CardTitle>

                <div style={{ height:'67%', width:'100%',marginTop:30 }}>
                <div className="timeline-wrapper" style={{ height:'110%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center', }}>
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:13}}>Développeur Full Stack</h3>
                      <div style={{fontSize:10.5, fontFamily:'PoppinsLighter',  marginTop:2}}>H2N Automobile (Le Crès, France) |  Janvier 2021 </div>
                      <div style={{fontSize:9.5, fontFamily:'PoppinsLighter', marginTop:1, color:'#909090'}}> <button  
                        onClick={()=>openModal(
                          <p style={{fontSize:18, textAlign:'center', color:'#a02c2c'}}>H2N Automobile</p>,
                          <p style={{fontSize:14, fontFamily:'PoppinsLighter', marginTop:5, color:'#909090', width:300}}>
                            Ouverture au digitale pour l'entreprise H2N Automobile.<br/>
                        J'ai eu le plaisir de créer des maquettes, le site internet, et le logo, de cette dernière et ainsi améliorer ses résultats.<br/>
                        Stacks utilisés:<br/>
                        Back-end: Node.js/ Express / Bases de données NoSQL (MongoDB)<br/>
                        Front-end: React / Redux / CSS
                          </p>
                        )} style={{backgroundColor:'#a02c2c', width:'auto', height:24,
                        border:'none', outline:'none', color:'white', borderRadius:4,marginTop:5 }}> Description </button></div>

                    </div>
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:13}}>Développeur Front-end</h3>
                      <div style={{fontSize:10.5, fontFamily:'PoppinsLighter',  marginTop:2}}>Ambroisy (Lyon, France) |  Novembre 2020 </div>
                      <div style={{fontSize:9.5, fontFamily:'PoppinsLighter', marginTop:1, color:'#909090'}}> <button  
                        onClick={()=>openModal(
                          <p style={{fontSize:18, textAlign:'center', color:'#a02c2c'}}>Ambroisy</p>,
                          <p style={{fontSize:14, fontFamily:'PoppinsLighter', marginTop:5, color:'#909090', width:300}}>
                            Développement de la partie front end 
                          en autonomie pour la version démo de l'application mobile Ambroisy 
                          permettant  aux personnes atteintes d'allergies alimentaire de trouver facilement des
                          produits autour d'eux. Le travail a été réalisé en équipe de 3 personnes.
                          </p>
                        )} style={{backgroundColor:'#a02c2c', width:'auto', height:24,
                        border:'none', outline:'none', color:'white', borderRadius:4,marginTop:5 }}> Description </button></div>

                    </div>
                    <div className="node" style={{width:'95%', height:'auto'}}>
                      <h3 style={{fontSize:13}}>Promoteur événementiel</h3>
                      <div style={{fontSize:10.5, fontFamily:'PoppinsLighter', marginTop:2}}>Barca4Fiesta (Barcelone, Espagne) | Juin 2019 - Septembre 2019 </div>
                      <div style={{fontSize:9.5,fontFamily:'PoppinsLighter', marginTop:1, color:'#909090'}}>
                      <button  
                        onClick={()=>openModal(
                          <p style={{fontSize:18, textAlign:'center', color:'#a02c2c'}}>Barca4Fiesta</p>,
                          <p style={{fontSize:14,fontFamily:'PoppinsLighter', marginTop:5, color:'#909090', width:300}}>
                          - Prospection face à face avec des prospects internationaux<br/>
                          - Présentation des services à des groupes allant jusqu'à 20 personnes<br/>
                          - Organisation de séminaires et dîners d'affaires<br/>
                          - Gestion des réseaux sociaux et satisfaction clients</p>
  
                          
                        )} style={{backgroundColor:'#a02c2c', width:'auto', height:24,
                         border:'none', outline:'none', color:'white', borderRadius:4,marginTop:5 }}> Description </button></div>

                    </div>
                   
                  
                  </div>       
                </div>
                
                              
              </Card>
            </div>

            {/* //////////// Contenue tablette ////////////  */}
            <div className="d-none d-md-block d-xl-none" style={{width:'100%'}} >

                    {/****************** horizontale ******************/}
              
              <Card className="d-none d-lg-block" style={{ width:'100%',height:640, borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0, marginTop:30, }}>
                <CardTitle 
                  style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.7)',
                   height:80, width:'100%', margin:0,display:'flex', justifyContent:'center', alignItems:'center'}}tag="h5"> 
                  Experiences 
                </CardTitle>

                <div style={{ height:'77%', width:'100%',marginTop:40 }}>
                  <div className="timeline-wrapper" style={{ height:'97%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:13, paddingTop:5}}>Développeur Full Stack</h3>
                      <div style={{fontSize:11, fontFamily:'PoppinsLighter',  marginTop:8}}>H2N Automobile (Le Crès, France) |  Janvier 2021 </div>
                      <div style={{fontSize:10.7,fontFamily:'PoppinsLighter', marginTop:5, color:'#909090'}}>
                      Ouverture au digitale pour l'entreprise H2N Automobile.<br/>
                        J'ai eu le plaisir de créer des maquettes, le site internet, et le logo, de cette dernière et ainsi améliorer ses résultats.<br/>
                        Stacks utilisés:<br/>
                        Back-end: Node.js/ Express / Bases de données NoSQL (MongoDB)<br/>
                        Front-end: React / Redux / CSS
                      </div>

                    </div>
                    
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:15, paddingTop:5}}>Développeur Front-end</h3>
                      <div style={{fontSize:12, fontFamily:'PoppinsLighter',  marginTop:8}}>Ambroisy (Lyon, France) |  Novembre 2020 </div>
                      <div style={{fontSize:11.7, fontFamily:'PoppinsLighter', marginTop:5, color:'#909090'}}>Développement de la partie front end 
                      en autonomie pour la version démo de l'application mobile Ambroisy 
                      permettant  aux personnes atteintes d'allergies alimentaire de trouver facilement des
                       produits autour d'eux. Le travail a été réalisé en équipe de 3 personnes.</div>

                    </div>
                    
                   
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:15, paddingTop:5}}>Promoteur événementiel</h3>
                      <div style={{fontSize:12, fontFamily:'PoppinsLighter',  marginTop:8}}>Barca4Fiesta (Barcelone, Espagne) | Juin 2019 - Septembre 2019 </div>
                      <div style={{fontSize:11.7, fontFamily:'PoppinsLighter', marginTop:5, color:'#909090'}}>
                        - Prospection face à face avec des prospects internationaux<br/>
                        - Présentation des services à des groupes allant jusqu'à 20 personnes<br/>
                        - Organisation de séminaires et dîners d'affaires<br/>
                        - Gestion des réseaux sociaux et satisfaction clients</div>
                    </div>
                  </div>       
                </div>
                 
                               
              </Card>

                     {/****************** verticale ******************/}
              <div className="d-md-block d-lg-none" style={{
                height:'100%', width:'100%'}}>
               
                <Card  style={{ width:'90%',height:520, borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', marginLeft:'5%',marginRight:'5%', marginBottom:20 }}>
                <CardTitle 
                  style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.7)',
                   height:60, width:'100%', margin:0,display:'flex', justifyContent:'center', alignItems:'center'}}tag="h5"> 
                  Experiences 
                </CardTitle>

                <div style={{ height:'77%', width:'100%',marginTop:20 }}>
                  <div className="timeline-wrapper" style={{ height:'100%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:13, paddingTop:5}}>Développeur Full Stack</h3>
                      <div style={{fontSize:11, fontFamily:'PoppinsLighter',  marginTop:8}}>H2N Automobile (Le Crès, France) |  Janvier 2021 </div>
                      <div style={{fontSize:10.7,fontFamily:'PoppinsLighter', marginTop:5, color:'#909090'}}>
                      Ouverture au digitale pour l'entreprise H2N Automobile.<br/>
                        J'ai eu le plaisir de créer des maquettes, le site internet, et le logo, de cette dernière et ainsi améliorer ses résultats.<br/>
                        Stacks utilisés:<br/>
                        Back-end: Node.js/ Express / Bases de données NoSQL (MongoDB)<br/>
                        Front-end: React / Redux / CSS
                      </div>

                    </div>
                    
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:13, paddingTop:5}}>Développeur Front-end</h3>
                      <div style={{fontSize:11, fontFamily:'PoppinsLighter',  marginTop:8}}>Ambroisy (Lyon, France) |  Novembre 2020 </div>
                      <div style={{fontSize:10.7,fontFamily:'PoppinsLighter', marginTop:5, color:'#909090'}}>Développement de la partie front end 
                      en autonomie pour la version démo de l'application mobile Ambroisy 
                      permettant  aux personnes atteintes d'allergies alimentaire de trouver facilement des
                       produits autour d'eux. Le travail a été réalisé en équipe de 3 personnes.</div>

                    </div>
                    
                    
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:13, paddingTop:5}}>Promoteur événementiel</h3>
                      <div style={{fontSize:12,fontFamily:'PoppinsLighter', marginTop:2}}>Barca4Fiesta (Barcelone, Espagne) | Juin 2019 - Septembre 2019 </div>
                      <div style={{fontSize:10.7, fontFamily:'PoppinsLighter',marginTop:2, color:'#909090'}}>
                        - Prospection face à face avec des prospects internationaux<br/>
                        - Présentation des services à des groupes allant jusqu'à 20 personnes<br/>
                        - Organisation de séminaires et dîners d'affaires<br/>
                        - Gestion des réseaux sociaux et satisfaction clients</div>
                    </div>
                  </div>       
                </div>
                 
                               
              </Card>

              <Card  style={{ width:'90%',height:350, borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0, marginTop:50,marginLeft:'5%',marginRight:'5%', }}>
                <CardTitle 
                  style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.7)',
                   height:60, width:'100%', margin:0,display:'flex', justifyContent:'center', alignItems:'center'}}tag="h5"> 
                  Diplômes 
                </CardTitle>

                <div style={{ height:'67%', width:'100%',marginTop:30 }}>
                  <div className="timeline-wrapper" style={{ height:'100%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <div className="node" style={{width:'95%',  }}>
                      <h3 style={{fontSize:16, paddingTop:2}}>Titre professionnel Développeur web et mobile </h3>
                      <div style={{fontSize:13, fontFamily:'PoppinsLighter', marginTop:2}}> La Capsule coding bootcamp | Lyon, France   </div>
                      <div style={{fontSize:12,  marginTop:1, color:'#a02c2c'}}>
                        2020</div>

                    </div> 
                     
                    <div className="node" style={{width:'95%',  marginTop:4,}}>
                      <h3 style={{fontSize:16, paddingTop:2}}>Licence Gestion </h3>
                      <div style={{fontSize:13,fontFamily:'PoppinsLighter',  marginTop:2}}> Montpellier Management  | Montpellier, France   </div>
                      <div style={{fontSize:12, marginTop:1, color:'#a02c2c'}}>
                        2017 – 2019</div>

                    </div> 
                    <div className="node" style={{width:'95%',  marginTop:4,}}>
                      <h3 style={{fontSize:16, paddingTop:2, fontWeight:400}}>Baccalauréat section Économique et Sociale, mention ASSEZ BIEN</h3>
                      <div style={{fontSize:13, fontFamily:'PoppinsLighter',  marginTop:2}}>
                         Lycée Georges Pompidou | Castelnau-le-lez, France   
                      </div>
                      <div style={{fontSize:12, marginTop:1, color:'#a02c2c'}}>
                      2016</div>

                    </div>
                  </div>       
                </div>
                 
                               
              </Card>
              
              </div>
              

            </div>
           
          </Col>          

        </Row>
        
      <Modal
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p>{nom}</p>
          <p>{description}</p>
          <div style={{ width:'100%', display:'flex', justifyContent:'center'}}>
              <button style={{backgroundColor:'#a02c2c', width:130, height:37,marginBottom:3,
            border:'none', outlineColor:'white', color:'white', borderRadius:4}}
            onClick={closeModal}>Fermer</button>
          </div>
        
          
          
        </Modal>
      </Hero>
    </Parallax>
    </div>
       
      
    
   
  );
}