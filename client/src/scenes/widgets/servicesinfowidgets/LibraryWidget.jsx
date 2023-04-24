import { IconButton, Stack, Divider, useTheme, Box, Typography, useMediaQuery, Card, CardMedia, CardContent } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const LibraryWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  
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
              <Card onClick={handleOpen1} sx={{ height: 350, width: 345, borderRadius: 3,
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
                  image="https://ciit-plusplus-backend.onrender.com/assets/lib1.png"
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

              <Modal
              closeAfterTransition
              open={open1} 
              onClose={handleClose1}
              >
              <Fade in={open1}>
                <Box 
                   minWidth="350px" 
                   minHeight="300px" 
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '16px',
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
                    onClick={handleClose1}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                  <Stack
                    spacing={1}
                    justifyContent={isNonMobileScreens ? 'flex-end' : 'center'}
                    sx={{
                      '& > *': {
                        width: isNonMobileScreens ? '750px' : '100%', // set iframe width based on screen size
                        maxWidth: '100%',
                      },
                    }}
                    >
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSd6wnlsMeDNh57phNiFCustcf88MzEPOMmoCBQZ6xZIqx4jGg/viewform?embedded=true"
                      height="750"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                      scrolling="yes"
                    >
                      Loading...
                    </iframe>
                  </Stack>                
                  </Box>
              </Fade>
              </Modal>

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
              <Card onClick={handleOpen2} sx={{ height: 350, width: 345, borderRadius: 3,
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
                  image="https://ciit-plusplus-backend.onrender.com/assets/lib2.jpg"
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

              <Modal
              closeAfterTransition
              open={open2} 
              onClose={handleClose2}
              >
              <Fade in={open2}>
                <Box 
                   minWidth="350px" 
                   minHeight="300px" 
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '16px',
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
                    onClick={handleClose2}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                  <Stack
                    spacing={1}
                    justifyContent={isNonMobileScreens ? 'flex-end' : 'center'}
                    sx={{
                      '& > *': {
                        width: isNonMobileScreens ? '750px' : '100%', // set iframe width based on screen size
                        maxWidth: '100%',
                      },
                    }}
                    >
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLScIDzmINeu_VnjxD81jptEw8EKiP6pJ9xOJ_Y9ZoE_b6cigVQ/viewform?embedded=true"
                      height="750"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                      scrolling="yes"
                    >
                      Loading...
                    </iframe>
                  </Stack>                
                  </Box>
              </Fade>
              </Modal>

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
              <Card onClick={handleOpen3} sx={{ height: 350, width: 345, borderRadius: 3,
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
                  image="https://ciit-plusplus-backend.onrender.com/assets/lib3.jpg"
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

              <Modal
              closeAfterTransition
              open={open3} 
              onClose={handleClose3}
              >
              <Fade in={open3}>
                <Box 
                   minWidth="350px" 
                   minHeight="300px" 
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '16px',
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
                    onClick={handleClose3}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                  <Stack
                    spacing={1}
                    justifyContent={isNonMobileScreens ? 'flex-end' : 'center'}
                    sx={{
                      '& > *': {
                        width: isNonMobileScreens ? '750px' : '100%', // set iframe width based on screen size
                        maxWidth: '100%',
                      },
                    }}
                    >
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdMAJ3HdZsj6aC7DpS3PgRURoIRuXmRAFIKjQecyKxvTC03BQ/viewform?embedded=true"
                      height="750"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                      scrolling="yes"
                    >
                      Loading...
                    </iframe>
                  </Stack>                
                  </Box>
              </Fade>
              </Modal>

            </Box>
          </motion.Box>

    );
};

export default LibraryWidget;
