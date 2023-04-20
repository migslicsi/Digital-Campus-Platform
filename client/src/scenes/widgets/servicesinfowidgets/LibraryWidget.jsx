import { Divider, useTheme, Box, Typography, useMediaQuery, Card, CardMedia, CardContent } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";

const LibraryWidget = () => {
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
            Library
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Access our various library services to support your academic and research needs. Visit the library website for info on viewing and borrowing books.
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
                  image="http://localhost:3001/assets/lib1.png"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Printing Services
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
                  image="http://localhost:3001/assets/lib2.jpg"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Artwork Scanning
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
                  image="http://localhost:3001/assets/lib3.jpg"
                 style={{ objectFit: "contain" }}
              />
              </Card>
              <CardContent>
                  <Typography sx={{ fontStyle: 'bold',  letterSpacing: 2  }} align="center" color={dark} gutterBottom variant="h4" component="div">
                    Screen Calibration Service
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                  </Typography>
                  </CardContent>
              </motion.div>

            </Box>
          </motion.Box>

    );
};

export default LibraryWidget;
