import React from "react";
import Background from './projetBackground.jpg'
import ReactTooltip from 'react-tooltip';
import {
  Card, CardText,
  CardTitle, Row, Col
} from 'reactstrap';
import projetH2N from './projetH2N.jpg'
import projetAmbroisy from './ambroisyDemo.png'
import GitHub from './github.png'
import DesktopIcon from './desktopIcon.png'





var link="https://github.com/kv1k"

export default function Section3() {
  var allDataAcademique= [
    {
      nom: "Morning News",
      description: "Application web développée en React JS permettant de consulter et de mettre en favoris des news.",
      tech:"(Node.JS, NewsAPI, React JS, Redux, MongoDB, CSS)",
      github:`${link}/Morning-News`
    },
    {
      nom: "MyMoviz",
      description: "L'application propose les nouveautés en terme de films et permet de les enregistrer dans une wishlist privée.",
      tech:"(React.JS, TheMovieDB API, Node.JS, MongoDB, CSS)",
      github:`${link}/MyMoviz`
    },
    {
      nom: "TickEtTac",
      description: "Plateforme de réservation de train développée lors d'un hackaton de 2 jours. Elle est codé en EJS coté Front End et en Node.JS coté Back End.",
      tech:"(Node.JS, MongoDB, Bootstrap, Architecture MVC,CSS)",
      github:`${link}/ticcetac`
    },
    {
      nom: "LocaPic",
      description: "Application mobile développée en React Native qui permet de géolocaliser ses amis et de tchatter avec eux en direct.",
      tech:"(React Native, Redux, CSS)",
      github:`${link}/localPic`
    },
    {
      nom: "FaceUp",
      description: "Application mobile en React Native permettant de prendre une photo et d’analyser ses données via une intelligence artificielle.",
      tech:"(React Native, Node.JS, Redux, Microsoft Azure)",
      github:`${link}/FaceUp`
    },
    {
      nom: "WeatherApp",
      description: "Application web qui donne la météo d'une ville en temps réel.",
      tech:"(Node.JS, Bootstrap, CSS, OpenWeather API, MongoDB)",
      github:`${link}/weatherApp`
    },
    {
      nom: "BikeShop",
      description: "Application web E-commerce proposant la gestion d'un panier et d'un moyen de paiement.",
      tech:"(Node.JS, Stripe, CSS, Bootstrap)",
      github:`${link}/bikeshop`
    },
    {
      nom: "BlackBoard",
      description: "Espace admin d'un site E-commerce permettant la manipulation de données.",
      tech:"(Node.JS, Chart.js, MongoDB)",
      github:`${link}/blackboard`

    },

  ]
  

  var allDataPro= [
    {
      nom: "H2N Automobile",
      description: "Création d'un site internet pour l'entreprise H2N Automobile",
      tech:"(Node.JS, React.JS, MongoDB, CSS)",
      lien:`https://h2n-auto.com`,
      src: `${projetH2N}`,
      dataTip: true,
    },
    {
      nom: "Ambroisy",
      description: "Développement de la partie front end de la version démo de l'application mobile Ambroisy.",
      tech:"(React Native, Firebase, Redux, CSS)",
      lien:``,
      src: `${projetAmbroisy}`,
      dataTip: false,
    },
   

  ]

  var sitesAcademique= allDataAcademique.map((site,i)=>{
    return (
    
     
        <Col xs={6} sm={6} xl={3} style={{ display:'flex', justifyContent:'center', marginBottom:30}}> 

          {/* //////// Contenue ordinateur //////// */}        
          <div className='d-none d-xl-block'>
            <Card style={{width:270, height:260, borderStyle:"solid", borderColor:'white', backgroundColor:'transparent',
              borderRadius:0, display:'flex', alignItems:'center',borderWidth:1.4,color:'white', padding:15}}>
              <CardTitle tag="h5">{site.nom}:</CardTitle>
              <CardText style={{fontWeight:'lighter',  color:'white', marginTop:5}}>  
              {site.description}
              <div style={{color:'#A02C2C', fontSize:15, marginTop:5, marginBottom:4}}>{site.tech} </div>
                                                
                <ReactTooltip type="error" />
              </CardText>  

            </Card>
            <div style={{position:'absolute', marginTop:-45, marginLeft:227}}><a data-tip="Voir le code"  href={site.github}><img style={{width:35}} src={GitHub}/></a>     </div>

          </div> 

          {/* //////// Contenue mobile verticale //////// */}   
          <div className='d-block d-sm-none'>
            <Card style={{width:180, height:200, borderStyle:"solid", borderColor:'white', backgroundColor:'transparent',
              borderRadius:0, display:'flex', alignItems:'center',borderWidth:1.4,color:'white', padding:15}}>
              <CardTitle tag="h5">{site.nom}:</CardTitle>
              <CardText style={{fontWeight:'lighter',   color:'white', marginTop:5}}>  
              {site.description}
              <div style={{color:'#A02C2C',  marginTop:5, marginBottom:4}}>{site.tech} </div>
                                                
                <ReactTooltip type="error" />
              </CardText>  

            </Card>
            <div style={{position:'absolute', marginTop:-40, marginLeft:110}}><a data-tip="Voir le code" href={site.github} style={{marginLeft:30}}><img style={{width:35}} src={GitHub}/></a>     </div>

          </div>    
          {/* //////// Contenue mobile horizontale & tablette //////// */}
         
          <div className='d-none d-sm-block d-lg-none'>
            <Card style={{width:'100%', height:250, borderStyle:"solid", borderColor:'white', backgroundColor:'transparent',
              borderRadius:0, display:'flex', alignItems:'center',borderWidth:1.4,color:'white', padding:15}}>
              <CardTitle tag="h5">{site.nom}:</CardTitle>
              <CardText style={{fontWeight:'lighter', fontSize:15,  color:'white', marginTop:7}}>  
              {site.description}
              <div style={{color:'#A02C2C',fontSize:16,   marginTop:6, marginBottom:4}}>{site.tech} </div>
                                                
                <ReactTooltip type="error" />
              </CardText>  

            </Card>
            <div className='d-none d-sm-block d-md-none' style={{position:'absolute', marginTop:-50, marginLeft:'67%'}}><a data-tip="Voir le code" href={site.github} style={{marginLeft:30}}><img style={{width:35}} src={GitHub}/></a>     </div>
            <div className='d-none d-md-block d-lg-none' style={{position:'absolute', marginTop:-50, marginLeft:'74%'}}><a data-tip="Voir le code" href={site.github} style={{marginLeft:30}}><img style={{width:35}} src={GitHub}/></a>     </div>

          </div>    
          <div className='d-none d-lg-block d-xl-none'>
            <Card style={{width:400, height:240, borderStyle:"solid", borderColor:'white', backgroundColor:'transparent',
              borderRadius:0, display:'flex', alignItems:'center',borderWidth:1.4,color:'white', padding:15}}>
              <CardTitle tag="h5">{site.nom}:</CardTitle>
              <CardText style={{fontWeight:'lighter', fontSize:15,  color:'white', marginTop:7}}>  
              {site.description}
              <div style={{color:'#A02C2C',fontSize:16,   marginTop:6, marginBottom:4}}>{site.tech} </div>
                                                
                <ReactTooltip type="error" />
              </CardText>  

            </Card> 
           <div style={{position:'absolute', marginTop:-46, marginLeft:320}}><a data-tip="Voir le code" href={site.github} style={{marginLeft:30}}><img style={{width:35}} src={GitHub}/></a>     </div>

          </div>    
        </Col>          
      
      
     
    )
  })
  
  var sitesPro= allDataPro.map((site,i)=>{
    var data='';
    if(site.dataTip===true){
      data=  <a data-tip="Voir le site" href={site.lien} style={{marginLeft:30}}><img style={{width:26}} src={DesktopIcon}/></a>    
               
    }
    
    return (
      <Col xs={10} sm={5}xl={4} style={{ display:'flex', justifyContent:'center', marginBottom:30, width:'100%', marginRight:8, marginLeft:8}}>  

          {/* //////// Contenue ordinateur //////// */}        
        <div className='d-none d-xl-block'  >
          <Card style={{ width:400,height:347, borderStyle:"none", backgroundColor:'#A02C2C',
          borderRadius:0,display:'flex', alignItems:'center',color:'white', padding:0}}>
            <img style={{width:'100%', }} src={site.src}/>
            <CardTitle style={{marginTop:10}}tag="h5">{site.nom}:</CardTitle>
            <CardText style={{fontWeight:'lighter',  color:'white',  paddingLeft:15,paddingRight:15}}>  
            {site.description}
             
            </CardText>
                                                  

          </Card>
           <ReactTooltip type="error" /><div style={{marginTop:-40,position:'absolute', marginLeft:320}}>{data}</div>   
        </div>

          {/* //////// Contenue mobile & tablette //////// */}           
        <div className='d-block d-sm-none d-md-block d-xl-none' >
          <Card style={{ width:300,height:270, borderStyle:"none", backgroundColor:'#A02C2C',
          borderRadius:0,display:'flex', alignItems:'center',color:'white'}}>
            <img style={{width:'100%', }} src={site.src}/>
            <CardTitle style={{marginTop:10}}tag="h5">{site.nom}:</CardTitle>
            <CardText style={{fontWeight:'lighter', color:'white',  paddingLeft:15,paddingRight:15}}>  
            {site.description}
              <ReactTooltip type="error" />
            </CardText>
          </Card> 
          <div style={{position:'absolute', marginTop:-40, marginLeft:230}}>{data}</div>     

        </div>        
        <div className='d-none d-sm-block d-md-none'  >
          <Card style={{ width:250,height:270, borderStyle:"none", backgroundColor:'#A02C2C',
          borderRadius:0,display:'flex', alignItems:'center',color:'white'}}>
            <img style={{width:'100%', }} src={site.src}/>
            <CardTitle style={{marginTop:10}}tag="h5">{site.nom}:</CardTitle>
            <CardText style={{fontWeight:'lighter', color:'white',  paddingLeft:15,paddingRight:15}}>  
            {site.description}
              <ReactTooltip type="error" />
            </CardText>
          </Card> 
          <div style={{position:'absolute', marginTop:-40, marginLeft:175}}>{data}</div>     

        </div>        
        

      </Col>          
    )
  })

  
  return (
    <div style={{fontFamily:'poppins'}} id={'section3'}>

        {/* ****************************** Contenue ordinateur ****************************** */}
      <div className='d-none d-xl-block' style={{height:1300, backgroundImage: `url(${Background})`,backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}} >
       
        <div style={{height:1300, backgroundColor:'rgb(0,0,0,0.5)'
        ,display:'flex', flexDirection:'column', alignItems:'center'}} > 
          <div style={{ color:'white',fontSize:30,fontWeight:'lighter', marginLeft:'70%', paddingTop:60}}>#Projet professionnel</div>                  
          <Row   style={{ width:'100%',
            display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:60}}> 
          
            {sitesPro}    

          </Row>
          
          <div style={{ color:'white',fontSize:30,fontWeight:'lighter', marginLeft:'70%', paddingTop:30}}>#Projet académique</div>                  
          <Row   style={{ width:'100%',
            display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:60}}> 
         
            {sitesAcademique}    

          </Row>
        </div>
      </div>
      
        {/* ****************************** Contenue mobile & tablette ****************************** */}

        <div className='d-block d-xl-none' style={{height:1650, backgroundImage: `url(${Background})`,backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', width:'100%'}} >
       
        <div style={{height:1650, backgroundColor:'rgb(0,0,0,0.5)'
        ,display:'flex', flexDirection:'column', alignItems:'center', }} > 
          <div className='d-block d-sm-none' style={{ color:'white',fontSize:20,fontWeight:'lighter', marginLeft:150, paddingTop:30, paddingBottom:20}}>#Projet professionnel</div>                  
          <div className='d-none d-sm-block' style={{ color:'white',fontSize:20,fontWeight:'lighter', marginLeft:'70%', paddingTop:30, paddingBottom:20}}>#Projet professionnel</div>                  

            <Row style={{fontSize:12, display:'flex', width:'100%'
            , alignItems:'center', justifyContent:'center'}}>
               {sitesPro}    
            </Row>

          <div className='d-block d-sm-none' style={{ color:'white',fontSize:20,fontWeight:'lighter', marginLeft:150,paddingBottom:20 }}>#Projet académique</div>                  
          <div className='d-none d-sm-block' style={{ color:'white',fontSize:20,fontWeight:'lighter', marginLeft:'70%', paddingTop:30, paddingBottom:20}}>#Projet académique</div>                  

            <Row style={{fontSize:10, display:'flex', width:'100%'
              , alignItems:'center', justifyContent:'center'}}>
              {sitesAcademique}    
            </Row>   
        </div>
      </div>
    </div> 
   
  );
}