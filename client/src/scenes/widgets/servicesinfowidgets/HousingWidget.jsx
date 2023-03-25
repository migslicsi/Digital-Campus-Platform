import { IconButton, Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const HousingWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
        <motion.Box 
            initial={{ opacity: 0 }}
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
            Housing
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Discover your housing options and resources for living on or off campus.
            </Typography>

            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">

            <Typography pl="1rem" mt="0.5rem" variant="h6" component="p">
            Truly a home away from home, it consists of student dormitories and apartments that encourage socio-spiritual nurturing while also supporting physical and academic development. Competent and caring residence deans and assistants cooperate with parents in helping the students realize their potential while doing their studies. Choose from the different dormitories and apartments that will suit your needs.
            </Typography>
            
            {/* house card */}
            <motion.div
            style={{
              margin: '0 auto', // add this line to set margin to 0 auto
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
              cursor: "pointer",
            }}
            onClick={handleOpen}
            >
            <Card sx={{ height: 350, width: 550, borderRadius: 3,
            "@media(max-width: 1000px)": {
              width:"380px"
            },
            "@media(max-width: 470px)": {
              width:"300px",
              height:"200px"
            },
            }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="http://localhost:3001/assets/house1.jpg"
             />
            </Card>
            <CardContent>
                <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                  Acacia Residences
                </Typography>
                <Typography variant="h7" color="text.secondary">
                </Typography>
                </CardContent>
            </motion.div>
            <Modal 
              closeAfterTransition
              open={open} 
              onClose={handleClose}
            >
              <Fade in={open}>
                <Box 
                  width="80%" 
                  height="90%" 
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <IconButton
                    aria-label="close"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      color: 'primary.main',
                    }}
                    onClick={handleClose}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                  <Typography variant="h3" underline="always" fontWeight="bold">
                    Acacia Residences
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Acacia has rooms good for two occupants only. Each room also has its own toilet. It has a big parking space nearby, making it easy for students with vehicles to park their cars or motorbikes.
                    <ul>
                      <li>Number of rooms: 59</li>
                      <li>Number of occupants per room: 2</li>
                      <li>Total number of occupants: 118</li>
                      <li>Rate: P2,800 per month</li>
                      <li>Note: Dorm and apartment fees are subject to change without prior notice.</li>
                      <li>Home Dean:</li>
                      <li>Elmer Lagarile</li>
                      <li>E-mail: emlagarile@aup.edu.ph</li>
                    </ul>
                    <Box sx={{ width: '100%', height: '100%' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4658929182765!2d121.03962401526019!3d14.629474980289483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7b13bb7e85f%3A0xeb723961f1d4bbdc!2sJose%20Building!5e0!3m2!1sen!2sph!4v1679766549135!5m2!1sen!2sph"
                        width="100%"
                        height={isNonMobileScreens ? "350px" : "250px"}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                      />
                    </Box>
                  </Typography>
                </Box>
              </Fade>
            </Modal>

            
            {/* house card */}
            <motion.div
            style={{
              margin: '0 auto', // add this line to set margin to 0 auto
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            >
            <Card sx={{ height: 350, width: 550, borderRadius: 3,
            "@media(max-width: 1000px)": {
              width:"380px"
            },
            "@media(max-width: 470px)": {
              width:"300px",
              height:"200px"
            },
            }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="http://localhost:3001/assets/house8.jpg"
             />
            </Card>
            <CardContent>
                <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                  Eastern Residence Hall
                </Typography>
                <Typography variant="h7" color="text.secondary">
                </Typography>
                </CardContent>
            </motion.div>

            {/* house card */}
            <motion.div
            style={{
              margin: '0 auto', // add this line to set margin to 0 auto
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            >
            <Card sx={{ height: 350, width: 550, borderRadius: 3,
            "@media(max-width: 1000px)": {
              width:"380px"
            },
            "@media(max-width: 470px)": {
              width:"300px",
              height:"200px"
            },
            }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="http://localhost:3001/assets/house2.jpg"
             />
            </Card>
            <CardContent>
                <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                  Varsity Residences
                </Typography>
                <Typography variant="h7" color="text.secondary">
                </Typography>
                </CardContent>
            </motion.div>

            {/* house card */}
            <motion.div
            style={{
              margin: '0 auto', // add this line to set margin to 0 auto
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            >
            <Card sx={{ height: 350, width: 550, borderRadius: 3,
            "@media(max-width: 1000px)": {
              width:"380px"
            },
            "@media(max-width: 470px)": {
              width:"300px",
              height:"200px"
            },
            }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="http://localhost:3001/assets/house3.jpg"
             />
            </Card>
            <CardContent>
                <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                  Arezzo Place
                </Typography>
                <Typography variant="h7" color="text.secondary">
                </Typography>
                </CardContent>
            </motion.div>

            {/* house card */}
            <motion.div
            style={{
              margin: '0 auto', // add this line to set margin to 0 auto
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            >
            <Card sx={{ height: 350, width: 550, borderRadius: 3,
            "@media(max-width: 1000px)": {
              width:"380px"
            },
            "@media(max-width: 470px)": {
              width:"300px",
              height:"200px"
            },
            }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="http://localhost:3001/assets/house4.jpg"
             />
            </Card>
            <CardContent>
                <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                  Jose Rizal Hall
                </Typography>
                <Typography variant="h7" color="text.secondary">
                </Typography>
                </CardContent>
            </motion.div>

            {/* house card */}
            <motion.div
            style={{
              margin: '0 auto', // add this line to set margin to 0 auto
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            >
            <Card sx={{ height: 350, width: 550, borderRadius: 3,
            "@media(max-width: 1000px)": {
              width:"380px"
            },
            "@media(max-width: 470px)": {
              width:"300px",
              height:"200px"
            },
            }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="http://localhost:3001/assets/house5.jpg"
             />
            </Card>
            <CardContent>
                <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                  Will Apartments
                </Typography>
                <Typography variant="h7" color="text.secondary">
                </Typography>
                </CardContent>
            </motion.div>

            {/* house card */}
            <motion.div
            style={{
              margin: '0 auto', // add this line to set margin to 0 auto
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            >
            <Card sx={{ height: 350, width: 550, borderRadius: 3,
            "@media(max-width: 1000px)": {
              width:"380px"
            },
            "@media(max-width: 470px)": {
              width:"300px",
              height:"200px"
            },
            }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="http://localhost:3001/assets/house6.jpg"
             />
            </Card>
            <CardContent>
                <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                  Benaroya Hall
                </Typography>
                <Typography variant="h7" color="text.secondary">
                </Typography>
                </CardContent>
            </motion.div>

            {/* house card */}
            <motion.div
            style={{
              margin: '0 auto', // add this line to set margin to 0 auto
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            >
            <Card sx={{ height: 350, width: 550, borderRadius: 3,
            "@media(max-width: 1000px)": {
              width:"380px"
            },
            "@media(max-width: 470px)": {
              width:"300px",
              height:"200px"
            },
            }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="http://localhost:3001/assets/house7.jpg"
             />
            </Card>
            <CardContent>
                <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                  Furion Residences
                </Typography>
                <Typography variant="h7" color="text.secondary">
                </Typography>
                </CardContent>
            </motion.div>

            </Box>
          </motion.Box>

          

    );
};

export default HousingWidget;
