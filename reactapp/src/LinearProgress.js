
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from "@material-ui/core/styles";
import {Col, Row} from 'reactstrap'
const StyledLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: "#909090"
    },
    barColorPrimary: {
      backgroundColor: "#A02C2C"
    }
   
  })(LinearProgress);




export default function LinearWithValueLabel() {
  
  


  return (
    <div style={{position:'absolute', width:'100%'}}>
        <div className='d-none d-lg-block' style={{width:'100%'}}>

      
     
                <div style={{ marginBottom:'1.5%',fontSize:15}}>Programmation Front-end :</div>

                <Box display="flex" flexDirection="column" style={{marginBottom:10}}>
                    <Box display="flex" flexDirection="row"  >
                        <Typography
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>React</Typography>
                      
                    </Box>          
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress 
                            style={{borderRadius:50}}variant="determinate" value={70}/>
                            
                          
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`70%`}</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="row"  >
                    <Typography  
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>HTML 5</Typography>
                      
                    </Box>        
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={85}/>
                        </Box>
                        <Box>
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`85%`}</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="row"  >
                        <Typography 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>CSS</Typography>
                    </Box>        
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={50}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`50%`}</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="row"  >
                        <Typography 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>JavaScript</Typography>
                    </Box>        
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={70}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`70%`}</Typography>
                        </Box>
                    </Box>
                
                    <Box display="flex" flexDirection="row" >
                        <Typography 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Redux</Typography>
                    </Box>        
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={80}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`80%`}</Typography>
                        </Box>
                    </Box>
                </Box>

        
        
          
                <div style={{ marginBottom:'1.5%',fontSize:15}}>Programmation Back-end :</div>
                <Box display="flex" flexDirection="column" >
                    <Box display="flex" flexDirection="row">
                        <Typography 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Node.JS / Express</Typography>
                    </Box>
                
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={55}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`55%`}</Typography>
                        </Box>
                    </Box>
                
                </Box>
                <Box display="flex" flexDirection="column" style={{marginBottom:10}}>
                    <Box display="flex" flexDirection="row">
                        <Typography 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Postman</Typography>
                    </Box>
                
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={45}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`45%`}</Typography>
                        </Box>
                    </Box>
                
                </Box>
            
                <div style={{ marginBottom:'1.5%',fontSize:15}}>Base de données :</div>
                <Box display="flex" flexDirection="column" style={{marginBottom:10}}>
                    <Box display="flex" flexDirection="row" >
                        <Typography  
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Mongo DB</Typography>
                                            
                    </Box>
                
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={55}/>
                        </Box>
                        <Box>
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`55%`}</Typography>
                        </Box>
                    </Box>
                
                </Box>

                <div style={{ marginBottom:'1.5%',fontSize:15}}>Workflow :</div>
                <Box display="flex" flexDirection="column" style={{marginBottom:10}}>
                    <Box display="flex" flexDirection="row"  >
                        <Typography 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Git / Github</Typography>
                    </Box>
                
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={50}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`50%`}</Typography>
                        </Box>
                    </Box>
                
                </Box>

                <div style={{ marginBottom:'1.5%',fontSize:15}}>Création de maquette :</div>
                <Box display="flex" flexDirection="column" >
                    <Box display="flex" flexDirection="row" >
                        <Typography  
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Figma</Typography>
                    </Box>
                
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={35}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`35%`}</Typography>
                        </Box>
                    </Box>
                
                </Box>
       
            
   
        </div>
        <div className='d-block d-lg-none' style={{width:'100%', margin:0, padding:0}}>
            
        
        <Row  style={{width:'100%', margin:0, padding:0}}>

        
            <Col xs={6} md={12} >
                <div style={{ fontSize:13  }}>Programmation Front-end :</div>

                <Box display="flex" flexDirection="column" style={{marginBottom:10}}>
                    <Box display="flex" flexDirection="row" >
                        <Typography className='d-none d-md-block' 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>React</Typography>
                        <Typography className='d-block d-md-none' 
                        variant="body2" style={{color:'#A02C2C', fontSize:11,fontFamily:'poppins'}}>React</Typography>
                    </Box>          
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress 
                            style={{borderRadius:50}}variant="determinate" value={70}/>
                            
                        
                        </Box>
                        <Box>
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`70%`}</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="row" >
                    <Typography className='d-none d-md-block' 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>HTML 5</Typography>
                        <Typography className='d-block d-md-none' 
                        variant="body2" style={{color:'#A02C2C', fontSize:11, fontFamily:'poppins'}}>HTML 5</Typography>
                    </Box>        
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={85}/>
                        </Box>
                        <Box>
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`85%`}</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="row"  >
                        <Typography className='d-none  d-md-block' 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>CSS</Typography>
                        <Typography className='d-block d-md-none' 
                        variant="body2" style={{color:'#A02C2C', fontSize:11, fontFamily:'poppins'}}>CSS</Typography>                    </Box>        
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={50}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`50%`}</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="row"  >
                        <Typography className='d-none  d-md-block' 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>JavaScript</Typography>
                        <Typography className='d-block  d-md-none' 
                        variant="body2" style={{color:'#A02C2C', fontSize:11,  fontFamily:'poppins'}}>JavaScript</Typography>                    </Box>        
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={70}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`70%`}</Typography>
                        </Box>
                    </Box>
                
                    <Box display="flex" flexDirection="row"  >
                        <Typography className='d-none  d-md-block' 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Redux</Typography>
                        <Typography className='d-block  d-md-none' 
                        variant="body2" style={{color:'#A02C2C', fontSize:11, fontFamily:'poppins', }}>Redux</Typography>                        </Box>        
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={80}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`80%`}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Col>


            <Col xs={6} md={12} >
                <div style={{ fontSize:13,  }}>Programmation Back-end :</div>
                <Box display="flex" flexDirection="column" style={{marginBottom:4}}>
                    <Box display="flex" flexDirection="row"  >
                        <Typography className='d-none  d-md-block' 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Node.JS / Express</Typography>
                        <Typography className='d-block  d-md-none' 
                        variant="body2" style={{color:'#A02C2C', fontSize:11, fontFamily:'poppins', }}>Node.JS / Express</Typography>                             </Box>
                
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={55}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`55%`}</Typography>
                        </Box>
                    </Box>
                
                </Box>
                <Box display="flex" flexDirection="column" style={{marginBottom:10}}>
                    <Box display="flex" flexDirection="row"  >
                        <Typography className='d-none  d-md-block' 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Postman</Typography>
                        <Typography className='d-block  d-md-none' 
                        variant="body2" style={{color:'#A02C2C', fontSize:11, fontFamily:'poppins', }}>Postman</Typography>                             </Box>
                
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={45}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`45%`}</Typography>
                        </Box>
                    </Box>
                
                </Box>


                <div style={{ fontSize:13,  }}>Data :</div>
                <Box display="flex" flexDirection="column" style={{marginBottom:10}}>
                    <Box display="flex" flexDirection="row" >
                        <Typography className='d-none  d-md-block' 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Mongo DB</Typography>
                        <Typography className='d-block  d-md-none' 
                        variant="body2" style={{color:'#A02C2C', fontSize:11, fontFamily:'poppins', }}>Mongo DB</Typography>                    
                    </Box>
                
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={55}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`55%`}</Typography>
                        </Box>
                    </Box>
                
                </Box>
                <div style={{ fontSize:13,  }}>Workflow :</div>               
                <Box display="flex" flexDirection="column" style={{marginBottom:10}}>
                    <Box display="flex" flexDirection="row"  >
                        <Typography className='d-none  d-md-block' 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Git / Github</Typography>
                        <Typography className='d-block  d-md-none' 
                        variant="body2" style={{color:'#A02C2C', fontSize:11, fontFamily:'poppins', }}>Git / Github</Typography>                          </Box>
                
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={50}/>
                        </Box>
                        <Box >
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`50%`}</Typography>
                        </Box>
                    </Box>
                
                </Box>

                <div style={{ fontSize:12,  }}>Création de maquette :</div>               
                <Box display="flex" flexDirection="column" >
                    <Box display="flex" flexDirection="row"  >
                        <Typography className='d-none  d-md-block' 
                        variant="body2" style={{color:'#A02C2C', fontSize:14, fontFamily:'poppins'}}>Figma</Typography>
                        <Typography className='d-block  d-md-none' 
                        variant="body2" style={{color:'#A02C2C', fontSize:11, fontFamily:'poppins', }}>Figma</Typography>                    </Box>
                
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <StyledLinearProgress style={{borderRadius:50}}variant="determinate" value={35}/>
                        </Box>
                        <Box>
                            <Typography variant="body2" style={{color:'#A02C2C', fontSize:13, fontFamily:'poppins'}}>{`35%`}</Typography>
                        </Box>
                    </Box>
                
                </Box>

            </Col>

        </Row>
        </div>
        
        
    </div>
  );
}