import { Grid, Divider, useTheme, Box, Typography, useMediaQuery,} from "@mui/material"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ServicesInfoHome = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  
  return (
        <Box 
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
            Welcome to the Services & Information Hub for Students!
            </Typography>
            <Divider />

            <Box
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            >
            <Accordion style={{ backgroundColor: 'transparent', border: '1px solid #ccc'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                  IMPORTANT REMINDERS IN ACCESSING THE SERVICES & INFORMATION HUB
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">
                <ol>
                  <li>Use Google Chrome browser on a non-mobile device; clear the browser's cache and/or use Incognito mode.</li>
                  <li>Ensure to satisfy the captcha. The login concern will always reoccur whenever the captcha is unsatisfied.</li>
                  <li>If it says "Bad Credentials", click on the "Forgot Password". Reset email password may go in the Junk Folder</li>
                </ol>
              </Typography>
              </AccordionDetails>
            </Accordion>

            <Typography
             pt="2rem"
             variant={isNonMobileScreens ? "h4" : "h5"}
            >What's New in March 2023</Typography>
            </Box>

            <Grid container spacing={1} pl={"1rem"}>
            <Grid item xs={12} md={4}>
              <Box border={1} borderColor="grey.500" borderRadius={4} p={2} width="100%">
                <Typography variant="h6" gutterBottom>
                  Box 1
                </Typography>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla auctor,
                  tincidunt felis sit amet, commodo odio. Suspendisse potenti. Nunc pretium nunc eget enim
                  convallis, quis ullamcorper velit pharetra.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box border={1} borderColor="grey.500" borderRadius={4} p={2} width="100%">
                <Typography variant="h6" gutterBottom>
                  Box 2
                </Typography>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla auctor,
                  tincidunt felis sit amet, commodo odio. Suspendisse potenti. Nunc pretium nunc eget enim
                  convallis, quis ullamcorper velit pharetra.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box border={1} borderColor="grey.500" borderRadius={4} p={2} width="100%">
                <Typography variant="h6" gutterBottom>
                  Box 3
                </Typography>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla auctor,
                  tincidunt felis sit amet, commodo odio. Suspendisse potenti. Nunc pretium nunc eget enim
                  convallis, quis ullamcorper velit pharetra.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        
        

        </Box>
    );
};

export default ServicesInfoHome;
