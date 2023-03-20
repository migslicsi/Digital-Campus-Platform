import { Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const HousingWidget = () => {
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
            
            {/* house card */}
            <motion.div
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
