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
  padding:0;
  margin:0;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 1199px) {
    min-height:800px;

  }
  background-image: url(${Background}); no-repeat;
  background-size: cover;
  @media screen and (max-width: 1199px) {
    margin-bottom: 7px;
    width: 100%;
    height: 697px;
    background-image: url(${Background}); no-repeat;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    margin-bottom: 10px;
    height: 1000px;
    background-image: url(${BackgroundTabletteV}); no-repeat;
  }
  @media screen and (max-width: 767px)  {
    margin-bottom: 5px;
    @media screen and (min-height: 351px)  {
      width: 100%;
      height: 389px;
      background-image: url(${BackgroundHorizontale}); no-repeat;
    }
    @media screen and (max-height: 351px)  {
      width: 100%;
      height: 357px;
      background-image: url(${BackgroundHorizontale}); no-repeat;
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
      margin-bottom: 8px;
      background-image: url(${BackgroundVerticale}); no-repeat;
    }
  }
  
`;
  return (

      <Hero id={'section4'}>
        <div style={{height:'100%', backgroundColor:'rgb(0,0,0,0.2)'
        ,display:'flex', flexDirection:'column', alignItems:'center',fontFamily:'poppins'}}> 
          


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
                      <h3 style={{fontSize:16, paddingTop:2}}>Titre professionnel Développeur web et web mobile </h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:2}}> La Capsule coding bootcamp | Lyon, France   </div>
                      <div style={{fontSize:12, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                        2020</div>

                    </div> 
                     
                    <div className="node" style={{width:'95%',  marginTop:40,}}>
                      <h3 style={{fontSize:16, paddingTop:2}}>Licence Gestion </h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:2}}> Montpellier Management  | Montpellier, France   </div>
                      <div style={{fontSize:12, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                        2017 – 2019</div>

                    </div> 
                    <div className="node" style={{width:'95%',  marginTop:40,}}>
                      <h3 style={{fontSize:16, paddingTop:2, fontWeight:400}}>Baccalauréat section Économique et Sociale, mention ASSEZ BIEN</h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:2}}>
                         Lycée Georges Pompidou | Castelnau-le-lez, France   
                      </div>
                      <div style={{fontSize:12, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
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
                      <h3 style={{fontSize:12, paddingTop:2}}>Titre professionnel Développeur web et web mobile </h3>
                      <div style={{fontSize:10, fontWeight:'lighter',  marginTop:2}}> La Capsule coding bootcamp | Lyon, France   </div>
                      <div style={{fontSize:11, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                        2020</div>

                    </div> 
                     
                    <div className="node" style={{width:'95%',  marginTop:12,  paddingBottom:0}}>
                      <h3 style={{fontSize:12, paddingTop:2}}>Licence Gestion </h3>
                      <div style={{fontSize:10, fontWeight:'lighter',  marginTop:2}}> Montpellier Management  | Montpellier, France   </div>
                      <div style={{fontSize:11, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                        2017 – 2019</div>

                    </div> 
                    <div className="node" style={{width:'95%', paddingBottom:0 }}>
                      <h3 style={{fontSize:12, paddingTop:2, fontWeight:400}}>Baccalauréat section Économique et Sociale, mention ASSEZ BIEN</h3>
                      <div style={{fontSize:10, fontWeight:'lighter',  marginTop:2}}>
                         Lycée Georges Pompidou | Castelnau-le-lez, France   
                      </div>
                      <div style={{fontSize:11, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                      2016</div>

                    </div>
                  
                  
                  </div>       
                </div>
                
                              
              </Card>
              <Card className="d-none d-sm-block" style={{ width:'100%',height:300,  borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
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
                      <h3 style={{fontSize:12, paddingTop:2}}>Titre professionnel Développeur web et web mobile </h3>
                      <div style={{fontSize:10, fontWeight:'lighter',  marginTop:2}}> La Capsule coding bootcamp | Lyon, France   </div>
                      <div style={{fontSize:11, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                        2020</div>

                    </div> 
                     
                    <div className="node" style={{width:'95%',  marginTop:12,  paddingBottom:0}}>
                      <h3 style={{fontSize:12, paddingTop:2}}>Licence Gestion </h3>
                      <div style={{fontSize:10, fontWeight:'lighter',  marginTop:2}}> Montpellier Management  | Montpellier, France   </div>
                      <div style={{fontSize:11, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                        2017 – 2019</div>

                    </div> 
                    <div className="node" style={{width:'95%', paddingBottom:0 }}>
                      <h3 style={{fontSize:12, paddingTop:2, fontWeight:400}}>Baccalauréat section Économique et Sociale, mention ASSEZ BIEN</h3>
                      <div style={{fontSize:10, fontWeight:'lighter',  marginTop:2}}>
                         Lycée Georges Pompidou | Castelnau-le-lez, France   
                      </div>
                      <div style={{fontSize:11, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                      2016</div>

                    </div>
                  
                  
                  </div>       
                </div>
                
                              
              </Card>
            </div>

            {/* //////////// Contenue tablette ////////////  */}
            <div className="d-none d-md-block d-xl-none" style={{width:'100%'}}>

                 {/****************** horizontale ******************/}

              <Card className="d-none d-lg-block" style={{ width:'100%',height:580, borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0,marginTop:30}}>
                <CardTitle 
                  style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.7)',
                  height:80, width:'100%', margin:0,display:'flex', justifyContent:'center', alignItems:'center'}}tag="h5"> 
                  Diplômes 
                </CardTitle>

                <div style={{ height:'60%', width:'100%',marginTop:60 }}>
                  <div className="timeline-wrapper" style={{ height:'100%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  
                    <div className="node" style={{width:'95%',  }}>
                      <h3 style={{fontSize:16, paddingTop:2}}>Titre professionnel Développeur web et web mobile </h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:2}}> La Capsule coding bootcamp | Lyon, France   </div>
                      <div style={{fontSize:12, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                        2020</div>

                    </div> 
                     
                    <div className="node" style={{width:'95%',  marginTop:40,}}>
                      <h3 style={{fontSize:16, paddingTop:2}}>Licence Gestion </h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:2}}> Montpellier Management  | Montpellier, France   </div>
                      <div style={{fontSize:12, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                        2017 – 2019</div>

                    </div> 
                    <div className="node" style={{width:'95%',  marginTop:40,}}>
                      <h3 style={{fontSize:16, paddingTop:2, fontWeight:400}}>Baccalauréat section Économique et Sociale, mention ASSEZ BIEN</h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:2}}>
                         Lycée Georges Pompidou | Castelnau-le-lez, France   
                      </div>
                      <div style={{fontSize:12, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                      2016</div>

                    </div>
                  
                  </div>       
                </div>
                
                              
              </Card>

                      {/****************** verticale ******************/}
             
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
                      <h3 style={{fontSize:15,}}>Développeur junior</h3>
                      <div style={{fontSize:12, fontWeight:'lighter',  marginTop:8}}>Ambroisy (Lyon, France) |  Novembre 2020 </div>
                      <div style={{fontSize:11.7, fontWeight:'lighter', marginTop:5, color:'#909090'}}>Développement de la partie front end 
                      en autonomie pour la version démo de l'application mobile Ambroisy 
                      permettant  aux personnes atteintes d'allergies alimentaire de trouver facilement des
                       produits autour d'eux. Le travail a été réalisé en équipe de 3 personnes.</div>

                    </div>
                    
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:15, paddingTop:5}}>Vendeur prêt à porter: </h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:8}}>Bershka Polygone, (Montpellier, France) | Décembre – Février  2019/2020 </div>
                      <div style={{fontSize:11.7, fontWeight:'lighter', marginTop:5, color:'#909090'}}>
                        - Accueil et conseil auprès des clients <br/>
                        - Gestion des stocks  <br/>
                        – Mise en rayon <br/>
                      </div>

                    </div>
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:15, paddingTop:5}}>Promoteur événementiel</h3>
                      <div style={{fontSize:12, fontWeight:'lighter',  marginTop:8}}>Barca4Fiesta (Barcelone, Espagne) | Juin 2019 - Septembre 2019 </div>
                      <div style={{fontSize:11.7, fontWeight:'lighter', marginTop:5, color:'#909090'}}>
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

              <Card  className="d-block d-sm-none" style={{ width:300,height:290,  borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0 , marginTop:-40}}>
               <CardTitle style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.8)',
                  height:37, width:'100%', margin:0,display:'flex',
                   justifyContent:'center', alignItems:'center', fontSize:16}}tag="h5"> 
                  Experiences 
                </CardTitle>

                <div style={{ height:'67%', width:'100%',marginTop:20 }}>
                <div className="timeline-wrapper" style={{ height:'100%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center', }}>
                    <div className="node" style={{width:'95%',  marginBottom:10}}>
                      <h3 style={{fontSize:13}}>Développeur junior</h3>
                      <div style={{fontSize:10.5, fontWeight:'lighter',  marginTop:2}}>Ambroisy (Lyon, France) |  Novembre 2020 </div>
                      <div style={{fontSize:9.5, fontWeight:'lighter', marginTop:1, color:'#909090'}}> <button  
                        onClick={()=>openModal(
                          <p style={{fontSize:18, textAlign:'center', color:'#a02c2c'}}>Ambroisy</p>,
                          <p style={{fontSize:14, fontWeight:'lighter', marginTop:5, color:'#909090', width:300}}>
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
                      <div style={{fontSize:10.5, fontWeight:'lighter',  marginTop:2}}>Barca4Fiesta (Barcelone, Espagne) | Juin 2019 - Septembre 2019 </div>
                      <div style={{fontSize:9.5, fontWeight:'lighter', marginTop:1, color:'#909090'}}>
                      <button  
                        onClick={()=>openModal(
                          <p style={{fontSize:18, textAlign:'center', color:'#a02c2c'}}>Barca4Fiesta</p>,
                          <p style={{fontSize:14, fontWeight:'lighter', marginTop:5, color:'#909090', width:300}}>
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
              <Card  className="d-none d-sm-block" style={{ width:'100%',height:300,  borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0 }}>
               <CardTitle style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.8)',
                  height:37, width:'100%', margin:0,display:'flex',
                   justifyContent:'center', alignItems:'center', fontSize:16}}tag="h5"> 
                  Experiences 
                </CardTitle>

                <div style={{ height:'67%', width:'100%',marginTop:20 }}>
                <div className="timeline-wrapper" style={{ height:'100%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center', }}>
                    <div className="node" style={{width:'95%',  marginBottom:10}}>
                      <h3 style={{fontSize:13}}>Développeur junior</h3>
                      <div style={{fontSize:10.5, fontWeight:'lighter',  marginTop:2}}>Ambroisy (Lyon, France) |  Novembre 2020 </div>
                      <div style={{fontSize:9.5, fontWeight:'lighter', marginTop:1, color:'#909090'}}> <button  
                        onClick={()=>openModal(
                          <p style={{fontSize:18, textAlign:'center', color:'#a02c2c'}}>Ambroisy</p>,
                          <p style={{fontSize:14, fontWeight:'lighter', marginTop:5, color:'#909090', width:300}}>
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
                      <div style={{fontSize:10.5, fontWeight:'lighter',  marginTop:2}}>Barca4Fiesta (Barcelone, Espagne) | Juin 2019 - Septembre 2019 </div>
                      <div style={{fontSize:9.5, fontWeight:'lighter', marginTop:1, color:'#909090'}}>
                      <button  
                        onClick={()=>openModal(
                          <p style={{fontSize:18, textAlign:'center', color:'#a02c2c'}}>Barca4Fiesta</p>,
                          <p style={{fontSize:14, fontWeight:'lighter', marginTop:5, color:'#909090', width:300}}>
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
              
              <Card className="d-none d-lg-block" style={{ width:'100%',height:580, borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
              borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0, marginTop:30, }}>
                <CardTitle 
                  style={{marginTop:10, backgroundColor:'rgb(160,44,44,0.7)',
                   height:80, width:'100%', margin:0,display:'flex', justifyContent:'center', alignItems:'center'}}tag="h5"> 
                  Experiences 
                </CardTitle>

                <div style={{ height:'77%', width:'100%',marginTop:20 }}>
                  <div className="timeline-wrapper" style={{ height:'100%', width:'auto',
                  display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:15, paddingTop:5}}>Développeur junior</h3>
                      <div style={{fontSize:12, fontWeight:'lighter',  marginTop:8}}>Ambroisy (Lyon, France) |  Novembre 2020 </div>
                      <div style={{fontSize:11.7, fontWeight:'lighter', marginTop:5, color:'#909090'}}>Développement de la partie front end 
                      en autonomie pour la version démo de l'application mobile Ambroisy 
                      permettant  aux personnes atteintes d'allergies alimentaire de trouver facilement des
                       produits autour d'eux. Le travail a été réalisé en équipe de 3 personnes.</div>

                    </div>
                    
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:15, paddingTop:5}}>Vendeur prêt à porter: </h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:8}}>Bershka Polygone, (Montpellier, France) | Décembre – Février  2019/2020 </div>
                      <div style={{fontSize:11.7, fontWeight:'lighter', marginTop:5, color:'#909090'}}>
                        - Accueil et conseil auprès des clients <br/>
                        - Gestion des stocks  <br/>
                        – Mise en rayon <br/>
                      </div>

                    </div>
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:15, paddingTop:5}}>Promoteur événementiel</h3>
                      <div style={{fontSize:12, fontWeight:'lighter',  marginTop:8}}>Barca4Fiesta (Barcelone, Espagne) | Juin 2019 - Septembre 2019 </div>
                      <div style={{fontSize:11.7, fontWeight:'lighter', marginTop:5, color:'#909090'}}>
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
               
                <Card  style={{ width:'90%',height:450, borderStyle:"none", backgroundColor:'rgb(0,0,0,0.6)',
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
                      <h3 style={{fontSize:13, paddingTop:5}}>Développeur junior</h3>
                      <div style={{fontSize:11, fontWeight:'lighter',  marginTop:8}}>Ambroisy (Lyon, France) |  Novembre 2020 </div>
                      <div style={{fontSize:10.7, fontWeight:'lighter', marginTop:5, color:'#909090'}}>Développement de la partie front end 
                      en autonomie pour la version démo de l'application mobile Ambroisy 
                      permettant  aux personnes atteintes d'allergies alimentaire de trouver facilement des
                       produits autour d'eux. Le travail a été réalisé en équipe de 3 personnes.</div>

                    </div>
                    
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:13, paddingTop:5}}>Vendeur prêt à porter: </h3>
                      <div style={{fontSize:11, fontWeight:'lighter',  marginTop:8}}>Bershka Polygone, (Montpellier, France) | Décembre – Février  2019/2020 </div>
                      <div style={{fontSize:10.7, fontWeight:'lighter', marginTop:5, color:'#909090'}}>
                        - Accueil et conseil auprès des clients <br/>
                        - Gestion des stocks  <br/>
                        – Mise en rayon <br/>
                      </div>

                    </div>
                    <div className="node" style={{width:'95%'}}>
                      <h3 style={{fontSize:13, paddingTop:5}}>Promoteur événementiel</h3>
                      <div style={{fontSize:12, fontWeight:'lighter',  marginTop:2}}>Barca4Fiesta (Barcelone, Espagne) | Juin 2019 - Septembre 2019 </div>
                      <div style={{fontSize:10.7, fontWeight:'lighter', marginTop:2, color:'#909090'}}>
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
                      <h3 style={{fontSize:16, paddingTop:2}}>Titre professionnel Développeur web et web mobile </h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:2}}> La Capsule coding bootcamp | Lyon, France   </div>
                      <div style={{fontSize:12, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                        2020</div>

                    </div> 
                     
                    <div className="node" style={{width:'95%',  marginTop:4,}}>
                      <h3 style={{fontSize:16, paddingTop:2}}>Licence Gestion </h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:2}}> Montpellier Management  | Montpellier, France   </div>
                      <div style={{fontSize:12, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                        2017 – 2019</div>

                    </div> 
                    <div className="node" style={{width:'95%',  marginTop:4,}}>
                      <h3 style={{fontSize:16, paddingTop:2, fontWeight:400}}>Baccalauréat section Économique et Sociale, mention ASSEZ BIEN</h3>
                      <div style={{fontSize:13, fontWeight:'lighter',  marginTop:2}}>
                         Lycée Georges Pompidou | Castelnau-le-lez, France   
                      </div>
                      <div style={{fontSize:12, fontWeight:'normal', marginTop:1, color:'#a02c2c'}}>
                      2016</div>

                    </div>
                  </div>       
                </div>
                 
                               
              </Card>
              
              </div>
              

            </div>
           
          </Col>          

        </Row>
      </div>
        
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
       
      
    
   
  );
}