import { Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const EventsWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  
  return (
        <motion.Box 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.5}}}
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
            School Events
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Get info on the latest events around the campus.
            </Typography>

            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">
            {/*event 1*/}
            <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            >
            <Card sx={{ width: 345, borderRadius: 3, boxShadow: '0 2px 8px rgba(0, 213, 250, 0.6)' }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/japan.png"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h4" component="div">
                  Japan Foundation Day 2023
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  <div style={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                    <CalendarMonthIcon /> Thursday, March 10th, 4:00pm <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <AttachMoneyIcon /> Free Admission <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <LocationOnIcon /> College of Social Sciences Bldg 1
                  </div>
                </Typography>
                </CardContent>
            </Card>
            </motion.div>
            
              {/*event 2*/}
              <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ width: 345, borderRadius: 3, boxShadow: '0 2px 8px rgba(0, 213, 250, 0.6)' }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/sportsfest.png"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h4" component="div">
                  Sportsfest 2023
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  <div style={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                    <CalendarMonthIcon /> 3rd Week of March <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <AttachMoneyIcon /> Free Admission <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <LocationOnIcon /> Gymnasium
                  </div>
                </Typography>
                </CardContent>
            </Card>
            </motion.div>

            {/*event 3*/}
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
            <Card sx={{ width: 345, borderRadius: 3, boxShadow: '0 2px 8px rgba(0, 213, 250, 0.6)' }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/pride.jpg"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h4" component="div">
                  Pride Club Celebration
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  <div style={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                    <CalendarMonthIcon /> Friday, March 25th, 3:00pm <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <AttachMoneyIcon /> Free for members / $10 for non members <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <LocationOnIcon /> Humanities Building Rm312
                  </div>
                </Typography>
                </CardContent>
            </Card>
            </motion.div>

            {/*event 4*/}
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
            <Card sx={{ width: 345, borderRadius: 3, boxShadow: '0 2px 8px rgba(0, 213, 250, 0.6)' }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/fair.jpg"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h4" component="div">
                  School Job Fair 
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  <div style={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                    <CalendarMonthIcon /> Wednesday, March 28-30, 8:00am <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <AttachMoneyIcon /> 5 <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <LocationOnIcon /> Jose Rizal Lobby
                  </div>
                </Typography>
                </CardContent>
            </Card>
            </motion.div>

            {/*event 5*/}
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
            <Card sx={{ width: 345, borderRadius: 3, boxShadow: '0 2px 8px rgba(0, 213, 250, 0.6)' }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/alumni.jpg"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h4" component="div">
                  Alumni Night 2023
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  <div style={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                    <CalendarMonthIcon /> Saturday, April 2nd, 7:00pm <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <AttachMoneyIcon /> Free (Alumni Only) <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <LocationOnIcon /> Theatre Hall C
                  </div>
                </Typography>
                </CardContent>
            </Card>
            </motion.div>

            {/*event 6*/}
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
            <Card sx={{ width: 345, borderRadius: 3, boxShadow: '0 2px 8px rgba(0, 213, 250, 0.6)' }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/science.jpg"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h4" component="div">
                  95th Annual Art and Tech Fair
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  <div style={{ display: "flex", alignItems: "left", justifyContent: "left" }}>
                    <CalendarMonthIcon /> 2nd Week of April, 12:00nn <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <AttachMoneyIcon /> Free <br></br>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                    <LocationOnIcon /> Library Wing A & B
                  </div>
                </Typography>
                </CardContent>
            </Card>
            </motion.div>


            </Box>
          </motion.Box>

    );
};

export default EventsWidget;
