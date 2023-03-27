import { Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const TransportationWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  
  return (
        <motion.Box 
            initial={{opacity: 0}}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            flexBasis="70%"
            borderRadius="10px"
            padding="1rem"
        >
            <Typography 
            pt="1rem" 
            pl="1rem" 
            pb="0.5rem"
            variant="h2"
            color={dark}
            >
            Transportation Help
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Get assistance with transportation options and resources for getting to and from campus.
            </Typography>

            <Box mb="1rem" display="flex" justifyContent="center">
              <img 
                src={isNonMobileScreens ? "http://localhost:3001/assets/transpo.png" : "http://localhost:3001/assets/transpo.png"} 
                alt="Transpo" 
                width={isNonMobileScreens ? "auto" : "100%"}
                height={isNonMobileScreens ? "auto" : "auto"}
              />
            </Box>

            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">

              <Typography variant="body1">
                UCLA Transportation is committed to promoting access and mobility in an 
                environmentally responsible manner. Because space on campus is extremely limited 
                and emissions impact our environment, we highly recommend sharing your commute 
                with others or participating in active transportation. 
                <br/><br/>
                For questions regarding commute options, email transportation@ts.ucla.edu.
              </Typography>

              
              <Box width="100%" mt="2rem">
                <Typography variant="h6" style={{ color: "white", backgroundColor: "black", width: "100%", textAlign: "center", fontWeight: "bold" }}>
                  Transportation Options
                </Typography>
              </Box>

              <Box m={1} display="flex" sx={{ gap:'1rem', margin: '0 auto' }} flexWrap="wrap">
                {/* card */}
                <motion.div
                  style={{
                    margin: '0 auto', // add this line to set margin to 0 auto
                  }}
                  >
                  <Card sx={{  flexBasis: 0, flexGrow: 1, width: "300px", borderRadius: 3, border: '1px solid grey',
                    "@media(max-width: 1000px)": {
                      width:"380px"
                    },
                    "@media(max-width: 470px)": {
                      width:"300px",
                    },
                    }}>
                    <CardMedia
                      padding="1rem"
                      component="img"
                      alt="green iguana"
                      height="100%"
                      width="100%"
                      image="http://localhost:3001/assets/transpo1.webp"
                    />
                    <CardContent>
                      <Typography color={dark} gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', textDecoration: 'underline' }}>
                        Public Transit
                      </Typography>
                      <Typography color={dark} gutterBottom variant="body1" component="div">
                        Whether you are a student, faculty, or staff member, using public transit can save you time and money. You will be able to access convenient bus or train routes and avoid the hassle of finding parking on campus. Riding public transit is also a more environmentally friendly alternative to driving alone.<br/><br></br>
                        To find the best transit options within the UCLA community, visit the UCLA Trip Planner and explore bus and train routes that can get you to campus. You can extend your savings even further by purchasing a discounted student transit pass, make more friends and reduce your carbon footprint!
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* card */}
                <motion.div
                  style={{
                    margin: '0 auto', // add this line to set margin to 0 auto
                  }}
                  >
                  <Card sx={{  flexBasis: 0, flexGrow: 1, width: "300px", borderRadius: 3, border: '1px solid grey',
                    "@media(max-width: 1000px)": {
                      width:"380px"
                    },
                    "@media(max-width: 470px)": {
                      width:"300px",
                    },
                    }}>
                    <CardMedia
                      padding="1rem"
                      component="img"
                      alt="green iguana"
                      height="100%"
                      width="100%"
                      image="http://localhost:3001/assets/transpo2.webp"
                    />
                    <CardContent>
                      <Typography color={dark} gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', textDecoration: 'underline' }}>
                        Telework
                      </Typography>
                      <Typography color={dark} gutterBottom variant="body1" component="div">
                        Working remotely through telework can provide many benefits for employees, such as saving time and money on commuting. You will be able to avoid the stress and expense of driving or taking public transit to work, and instead have the flexibility to work from the comfort of your own home. Teleworking is also a great way to improve work-life balance and increase productivity.<br/><br></br>
                        To explore telework options within the UCLA community, speak to your supervisor or human resources representative about the possibility of working remotely.<br></br><br></br>                    
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* card */}
                <motion.div
                  style={{
                    margin: '0 auto', // add this line to set margin to 0 auto
                  }}
                  >
                  <Card sx={{  flexBasis: 0, flexGrow: 1, width: "300px", borderRadius: 3, border: '1px solid grey',
                    "@media(max-width: 1000px)": {
                      width:"380px"
                    },
                    "@media(max-width: 470px)": {
                      width:"300px",
                    },
                    }}>
                    <CardMedia
                      padding="1rem"
                      component="img"
                      alt="green iguana"
                      height="100%"
                      width="100%"
                      image="http://localhost:3001/assets/transpo3.webp"
                    />
                    <CardContent>
                      <Typography color={dark} gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', textDecoration: 'underline' }}>
                        Carpool
                      </Typography>
                      <Typography color={dark} gutterBottom variant="body1" component="div">
                       Whether you are a student, faculty, or staff member, carpooling can save you time and money. You will be able to access high occupancy vehicle (HOV) lanes and share the cost of gas and other car-related expenses. Riding in a carpool is also a more environmentally friendly alternative to a single rider commute.<br/><br></br>
                       To find a carpool buddy within the UCLA community, visit the UCLA Trip Planner when you form a carpool or join an existing one. You can extend your savings even further by applying together for a reduced fee permit, make more friends and get more smiles-per-gallon!<br/><br></br>
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* card */}
                <motion.div
                  style={{
                    margin: '0 auto', // add this line to set margin to 0 auto
                  }}
                  >
                  <Card sx={{  flexBasis: 0, flexGrow: 1, width: "300px", borderRadius: 3, border: '1px solid grey',
                    "@media(max-width: 1000px)": {
                      width:"380px"
                    },
                    "@media(max-width: 470px)": {
                      width:"300px",
                    },
                    }}>
                    <CardMedia
                      padding="1rem"
                      component="img"
                      alt="green iguana"
                      height="100%"
                      width="100%"
                      image="http://localhost:3001/assets/transpo4.webp"
                    />
                    <CardContent>
                      <Typography color={dark} gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', textDecoration: 'underline' }}>
                        Biking
                      </Typography>
                      <Typography color={dark} gutterBottom variant="body1" component="div">
                        Biking to campus can be a convenient and eco-friendly way to get around while also providing a great workout. You will be able to avoid traffic congestion and parking difficulties while also reducing your carbon footprint. Plus, biking is a fun and healthy activity that can improve your mood and energy levels.<br/><br></br>
                        To find bike-friendly routes within the UCLA community, visit the UCLA Bike Shop and explore the various bike paths and lanes available on and around campus. You can also take advantage of the UCLA Bike Share Program, which offers affordable rentals and bike maintenance services. So why not ditch the car and hop on a bike for your daily commute?
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* card */}
                <motion.div
                  style={{
                    margin: '0 auto', // add this line to set margin to 0 auto
                  }}
                  >
                  <Card sx={{  flexBasis: 0, flexGrow: 1, width: "300px", borderRadius: 3, border: '1px solid grey',
                    "@media(max-width: 1000px)": {
                      width:"380px"
                    },
                    "@media(max-width: 470px)": {
                      width:"300px",
                    },
                    }}>
                    <CardMedia
                      padding="1rem"
                      component="img"
                      alt="green iguana"
                      height="100%"
                      width="100%"
                      image="http://localhost:3001/assets/transpo5.webp"
                    />
                    <CardContent>
                      <Typography color={dark} gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', textDecoration: 'underline' }}>
                        Walking
                      </Typography>
                      <Typography color={dark} gutterBottom variant="body1" component="div">
                        Walking to campus can provide many benefits for your health and well-being, while also reducing your carbon footprint. You will be able to enjoy the fresh air and sunshine while avoiding the stress and expense of driving or taking public transit to work. Walking is also a great way to improve cardiovascular health, reduce stress and anxiety, and increase overall fitness.<br/><br></br>
                        To find walking-friendly routes within the UCLA community, visit the UCLA Transportation website and explore the various walking paths available around campus. You can also take advantage of the many groups available at UCLA, which offer the opportunity to meet new people while staying active.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* card */}
                <motion.div
                  style={{
                    margin: '0 auto', // add this line to set margin to 0 auto
                  }}
                  >
                  <Card sx={{  flexBasis: 0, flexGrow: 1, width: "300px", borderRadius: 3, border: '1px solid grey',
                    "@media(max-width: 1000px)": {
                      width:"380px"
                    },
                    "@media(max-width: 470px)": {
                      width:"300px",
                    },
                    }}>
                    <CardMedia
                      padding="1rem"
                      component="img"
                      alt="green iguana"
                      height="100%"
                      width="100%"
                      image="http://localhost:3001/assets/transpo6.webp"
                    />
                    <CardContent>
                      <Typography color={dark} gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', textDecoration: 'underline' }}>
                        Vanpool
                      </Typography>
                      <Typography color={dark} gutterBottom variant="body1" component="div">
                        Vanpooling to campus can be a convenient and cost-effective way to get to work while also reducing your carbon footprint. You will be able to share the ride with other passengers and split the cost of gas and other car-related expenses. Vanpooling is also a great way to reduce traffic congestion and stress associated with commuting alone.<br/><br/>
                        To find vanpool options within the UCLA community, visit the UCLA Trip Planner and explore the various vanpool options available on and around campus. You can also take advantage of the UCLA Vanpool Program, which offers discounted rates and other incentives for vanpool participants. Do be careful in walking around at nighttime.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* card */}
                <motion.div
                  style={{
                    margin: '0 auto', // add this line to set margin to 0 auto
                  }}
                  >
                  <Card sx={{  flexBasis: 0, flexGrow: 1, width: "300px", borderRadius: 3, border: '1px solid grey',
                    "@media(max-width: 1000px)": {
                      width:"380px"
                    },
                    "@media(max-width: 470px)": {
                      width:"300px",
                    },
                    }}>
                    <CardMedia
                      padding="1rem"
                      component="img"
                      alt="green iguana"
                      height="100%"
                      width="100%"
                      image="http://localhost:3001/assets/transpo7.webp"
                    />
                    <CardContent>
                      <Typography color={dark} gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', textDecoration: 'underline' }}>
                        Campus Parking
                      </Typography>
                      <Typography color={dark} gutterBottom variant="body1" component="div">
                       Space is an extremely limited resource on campus. Although we highly recommend using sustainable transportation options, we understand that is not viable for everyone. To park in UCLA facilities, UCLA Transportation offers drivers parking permit options. Faculty and staff may contact their department Commute Coordinator for more information on permit availability and pay via payroll deduction, while students may apply each quarter.<br></br><br></br>
                       Student parking is not guaranteed, and access for a single occupancy vehicle permit is offered based on a prioritization process rather than the application submission date. An application must be submitted by the parking application deadline, and the priority order is as follows:<br></br><br></br>
                       <ul>
                        <li>Graduate Students</li>
                        <li>Eligible Regent Scholars</li>
                        <li>Upperclassmen (Seniors and Juniors)</li>
                        <li>Underclassmen (Sophomores and Freshmen)</li>
                       </ul>
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
                
              </Box>
            </Box>
          </motion.Box>

    );
};

export default TransportationWidget;
