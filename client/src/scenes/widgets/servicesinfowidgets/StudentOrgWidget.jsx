import { Card, CardMedia, CardContent, Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import { useState } from "react";

const StudentOrgWidget = () => {
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
            Student Organizations
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Join and participate in our student-led organizations, clubs, and activities.
            </Typography>

            <Box m={1} display="flex" sx={{ pb:"1rem", gap: '1.5rem' }} flexWrap="wrap">

              {/* house card1 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org1.png"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Telon
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>
              
              {/* house card2 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org2.jpg"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Tunes
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

              {/* house card3 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org3.png"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Syntax
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>
              
              {/* house card4 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org4.png"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Spades
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

              {/* house card5 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org5.jpg"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Safezone
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

             {/* house card6 */}
             <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org6.jpg"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Pixelhive
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

              {/* house card7 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org7.jpg"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Lightbox
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

              {/* house card8 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org8.jpg"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Gestalt
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

             {/* house card9 */}
             <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org9.jpg"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    CIIT Scholar's Guild
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

              {/* house card10 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org10.png"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    CGC
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

              {/* house card11 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org11.png"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Cosplay Arcade
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

             {/* house card12 */}
             <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org12.jpg"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Atelier
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

              {/* house card13 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org13.jpg"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    24 Frames
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

              {/* house card14 */}
              <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org14.png"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Obelisk
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

             {/* house card15 */}
             <motion.div
              style={{
                margin: '0 auto', // add this line to set margin to 0 auto
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              >
              <Card sx={{ height: 350, width: 345, borderRadius: 3,
              "@media(max-width: 1238px)": {
                width:"260px",
                height:"220px"
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
                  image="http://localhost:3001/assets/org15.png"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    CSC
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>



            </Box>
          </motion.Box>

    );
};

export default StudentOrgWidget;
