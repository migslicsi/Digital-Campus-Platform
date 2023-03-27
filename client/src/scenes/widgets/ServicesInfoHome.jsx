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
  const neutralLight = palette.background.default;
  
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
            
            <img src="http://localhost:3001/assets/homebg.webp" alt="clinic" style={{ width: '100%', height: '100%'}} />

            <Box mt="1rem" pl="4rem" pr="4rem" backgroundColor={neutralLight} borderRadius={1}>
            <Typography
             variant={isNonMobileScreens ? "h4" : "h5"}
             style={{ textDecoration: "underline" }}
             textAlign="center"
            >Purpose:</Typography>
            <Typography mt="0.5rem" variant="h6" component="p" textAlign="center">
              Our hub is designed to provide a comprehensive range of services and information to support your academic and personal success. From academic support and career services to counseling and mental health resources, we've got you covered. Our team is here to help you navigate the challenges of student life and make the most of your time on campus. So take a look around, explore our services and resources, and discover how we can help you achieve your goals.
            </Typography>
            </Box>

            <Box mt="1rem"backgroundColor={neutralLight} pl="4rem" pr="4rem" borderRadius={1}>
            <Typography
             variant={isNonMobileScreens ? "h4" : "h5"}
             textAlign="center"
             style={{ textDecoration: "underline" }}
            >Vision:</Typography>
            <Typography mt="0.5rem" mb="1.5rem" variant="h6" component="p" textAlign="center">
              Our vision is a society in which every student engages with social and environmental challenges during their time at university, empowering them to become active citizens: we do this by mainstreaming student social action, providing practical opportunities alongside training and skill development. We aim to reach students who otherwise wouldn’t engage and empower them to become active citizens, so that they can achieve positive change now and after they graduate.
            </Typography>
            </Box>


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

            <Accordion style={{ backgroundColor: 'transparent', border: '1px solid #ccc', marginTop: "1.5rem"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                  IMPORTANT COLLEGE-WIDE ANNOUCEMENTS
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">General Annoucements:
                <ol>
                  <li>Student services are available online and onsite during weekdays from 9:00 am to 6:00 pm starting Q1 SY 2022-2023</li>
                  <li> Important dates to remember can now be added to your Google Calendar</li>
                  <li>You may now view subject equivalencies</li>
                  <li>Our School Clinic would like to remind those who are currently processing their medical clearance to kindly check the medical results released by the laboratory to make sure that there are no further instructions given on the status of your medical results. The comprehensive instructions were sent to your respective CIIT email addresses (Subject: READ: Checking of Online Medical Results before Submission to the Clinic). Please make sure to read it thoroughly.</li>
                </ol>
              </Typography>
              <Typography variant="p">IT Related Annoucements:
                <ol>
                  <li>Student_CIIT password is "iamciitstudent"</li>
                  <li>PC Lab student password "ciitstudent"</li>
                  <li>To all students, please make sure to update your password every term to avoid account compromise. Make sure to log out of the account if you are not using your own equipment. Compromised passwords may lead to data leaks. Please refer to #1 for password guidelines.</li>
                </ol>
              </Typography>
              </AccordionDetails>
            </Accordion>
            </Box>

            <Grid container spacing={1} pt={"1.75rem"} pl={"1rem"}>
            <Grid item xs={12} md={4}>
              <Box border={1} borderColor="grey.500" borderRadius={4} p={2} width="100%">
                <Typography variant="h4" align="left" mb="1rem">
                  Contact Us
                </Typography>
                <Typography align="left" mb="1rem">
                  To get in contact with us, please email us at usp@saonet.ucla.edu or call us at 310.206.2980.
                </Typography>
                <Typography align="left">
                  You can also schedule an appointment with us just use the email cc: appt.set
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box border={1} borderColor="grey.500" borderRadius={4} p={2} width="100%">
                <Typography variant="h4" align="left" mb="1rem">
                  Visit Us
                </Typography>
                <Typography align="left" mb="1rem">
                Monday to Friday 9am-5pm<br></br>Excluding university holidays
                </Typography>
                <Typography align="left">
                Student Activities Center, Suite B52
                220 Westwood Plaza
                Box 951453
                Campus Mail: 145306
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box border={1} borderColor="grey.500" borderRadius={4} p={2} width="100%">
                <Typography variant="h4" align="left" mb="1rem">
                  Stay in the Know
                </Typography>
                <Typography align="left" mb="1rem">
                  Use #UndocuBruin to reach the UndocuBruin Community
                </Typography>
                <Typography align="left">
                  Join our email listserv for students to stay updated.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
    );
};

export default ServicesInfoHome;
