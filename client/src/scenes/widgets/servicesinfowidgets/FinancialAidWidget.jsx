import { Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FinancialAidWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const neutralLight = palette.background.default;
  
  return (
        <Box 
          flexBasis="70%"
          borderRadius="10px"
        >
        <motion.Box 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
            <Typography 
            pt="1rem" 
            pl="1rem" 
            pb="0.5rem"
            variant="h2"
            color={dark}
            >
            Financial Aid
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Explore our financial aid options and resources to help fund your education.
            </Typography>
            
            <img src="http://localhost:3001/assets/ciitbg.jpg" alt="clinic" style={{ width: '100%', height: '38%'}} />

            <Box mt="1rem" backgroundColor={neutralLight} borderRadius={1} pl="4rem" pr="4rem" pt="0.5rem" pb="0.5rem" alignItems="center">
              <Typography
                variant={isNonMobileScreens ? "h4" : "h5"}
                textAlign="center"
                style={{ textDecoration: "underline" }}
              >
                Who is Bukas.ph?
              </Typography>
              <Typography mt="0.5rem" mb="1.5rem" variant="p" component="p">
                As an education financing platform, Bukas provides access to quality education through affordable, flexible, and easy tuition loans.<br /><br />
                As a team, they continue to partner and work with like-minded schools toward building a better tomorrow for the Filipino youth.<br /><br />
                Since 2019, Bukas has partnered with 72 colleges and universities and has funded over 13,000 college and graduate students, and counting!<br /><br />
                Got further questions? Email Bukas at info@bukas.ph or visit www.bukas.ph
              </Typography>
            </Box>


            <Box mt="2rem">
            <Typography variant="h6" style={{ color: "white", backgroundColor: "black", width: "100%", textAlign: "center", fontWeight: "bold" }}>
            Bukas Quick Guide
            </Typography>
            </Box>
            
            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">

            <Typography
             variant={isNonMobileScreens ? "h4" : "h5"}
             style={{ fontWeight: "bold" }}
            >Before you get started, make sure you’ve prepared all the necessary requirements.</Typography>
            
            <Accordion style={{ width:'100%', backgroundColor: 'transparent', border: '1px solid #ccc'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{ textDecoration: 'underline'}}>
                Do you have a valid and active mobile number?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">
                Account verification and important application updates will be sent to your mobile, therefore you must have a working mobile number.
              </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion style={{ width:'100%', backgroundColor: 'transparent', border: '1px solid #ccc'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{ textDecoration: 'underline'}}>
                Do you have a guardian?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">
                We will require you to provide a guardian who is at least 21 years old and currently residing in the Philippines. Your guardian must also have a contactable mobile number and an active email address.
              </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ width:'100%', backgroundColor: 'transparent', border: '1px solid #ccc'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{ textDecoration: 'underline'}}>
                Do you have a guarantor?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography>
                A guarantor is someone who will be obliged with handling and taking care of the payments of the student. They must be ready to provide proof of income during your application.
              </Typography>
              <br></br>
              <Typography>
                You may choose from these three options when selecting your guarantor:
              </Typography>
              <ol>
                <li>
                  <Typography>
                    Have your guardian sign on as your guarantor
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Sign on as your own guarantor (for working students)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Choose another guarantor apart from your guardian
                  </Typography>
                </li>
              </ol>
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ width:'100%', backgroundColor: 'transparent', border: '1px solid #ccc'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{ textDecoration: 'underline'}}>
                Do you have the required documents?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">
                You only need your proof of address, student ID (or a valid government ID) , and your assessment form (this can also be your Statement of Account or Enrollment Permit).
                </Typography>
              </AccordionDetails>
            </Accordion>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto', 
              paddingLeft: isNonMobileScreens ? '4rem' :'2rem', 
              paddingRight: isNonMobileScreens ?'4rem': '0rem', 
              paddingTop:'0.5rem', 
              paddingBottom: isNonMobileScreens ? '2rem': '0.5rem' 
              }}>
              <div style={{ flex: 1 }}>
                <Box
                  sx={{ height: '80%', width: '80%' }}
                >
                  <Typography
                    variant={isNonMobileScreens ? "h4" : "h5"}
                    style={{ textDecoration: "underline" }}
                  >
                    What are the requirements to apply for a Bukas tuition installment plan at CIIT College of Arts and Technology?
                  </Typography>
                  <Typography mt="0.5rem" variant="h6" component="p">
                    To apply for an installment plan, you must fit the following criteria:
                    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                      <li style={{ display: "flex", alignItems: "center" }}>
                        <CheckCircleOutlineIcon style={{ marginRight: "8px" }} />
                        You must be a Filipino citizen at least 18 years old.
                      </li>
                      <li style={{ display: "flex", alignItems: "center" }}>
                        <CheckCircleOutlineIcon style={{ marginRight: "8px" }} />
                        You must be enrolled at CIIT College of Arts and Technology.
                      </li>
                      <li style={{ display: "flex", alignItems: "center" }}>
                        <CheckCircleOutlineIcon style={{ marginRight: "8px" }} />
                        You must be in college or graduate school.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </div>
              <div style={{ flex: 1, display: isNonMobileScreens ? 'flex' : 'none', justifyContent: 'center' }}>
                <motion.div
                  whileHover={{ scale: 0.8, transition: { duration: 0.2 }  }}
                  style={{ width: '80%', height: '80%' }}
                >
                  <img src="http://localhost:3001/assets/Req1.png" alt="clinic" style={{ width: '100%', height: '100%' }} />
                </motion.div>
              </div>
            </div>
          </Box>
          </motion.Box>
          </Box>

    );
};

export default FinancialAidWidget;
