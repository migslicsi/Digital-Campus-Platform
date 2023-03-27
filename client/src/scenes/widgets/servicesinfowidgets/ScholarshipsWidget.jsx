import { Button, Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const ScholarshipsWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const neutralLight = palette.background.default;
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  
  
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
            Scholarships
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Explore our scholarship opportunities and resources to help fund your education.
            </Typography>

            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">
            
            <Box mt="1rem" backgroundColor={neutralLight} borderRadius={1} pl="4rem" pr="4rem" pt="0.5rem" pb="0.5rem" alignItems="center">
              <Typography mt="0.5rem" mb="1.5rem" variant="p" component="p">
               CIIT caters to a diverse student population that have different socio-economic status. Difficulties in pursuing their studies are
               faced by students who cannot cope with the financial demands of their schooling.  In response to this need, CIIT provides a Student 
               Financial Assistance Program to eligible students who have high academic achievement and great potential to be successful in their 
               chosen field but do not have the financial means to pursue it.
              </Typography>
            </Box>
      
            <Box sx={{ width: '100%', gap: '1rem' }} display="flex" flexWrap="wrap"> 
              
              <Stack sx={{ width: '100%',  margin: '0 auto', }} spacing={1}>
                <Item>
                  <Typography mb="1rem" mt="1rem" variant="h5" align="center" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                    Future CIITzen Scholarship Grant
                  </Typography>
                  <Box m="2rem">
                    <Typography variant="body1">
                        Priveleges:
                    </Typography>
                    <ul>
                        <Typography component="li" variant="body1">Discounted Tuition Fees</Typography>
                        <Typography component="li" variant="body1">Discounted Lab Fees</Typography>
                        <Typography component="li" variant="body1">Discounted Misc Fees</Typography>
                  </ul>
                  <br></br>
                  <Typography variant="body1">
                        Who is Eligible?
                    </Typography>
                    <ul>
                        <Typography component="li" variant="body1">Incoming College Students either from Senior High School or Colleges.</Typography>
                        <Typography component="li" variant="body1">Part of the top fifty who passed the College Admission Test </Typography>
                        <Typography component="li" variant="body1">Must not have any major offense</Typography>
                    </ul>
                  <br></br>
                  <Typography variant="body1">
                        What are the Retention Requirements?
                    </Typography>
                    <ul>
                        <Typography component="li" variant="body1">Shall not have any failing grades</Typography>
                        <Typography component="li" variant="body1">Must maintain a termly GPA of 2.8 or higher</Typography>
                        <Typography component="li" variant="body1">Shall not be placed in any level of academic conditional status</Typography>
                        <Typography component="li" variant="body1">Must not have any major offense</Typography>
                    </ul>
                  <br></br>
                  <Typography variant="body1">
                        I'd like more details on the discounts.
                    </Typography>
                    <ul>
                        <Typography component="li" variant="body1">20% on Tuition and Miscellaneous Fees</Typography>
                    </ul>
                  <br></br>
                  <Typography variant="body1">
                        How do I apply?
                    </Typography>
                    <ul>
                        <Typography component="li" variant="body1">Students granted with this scholarship no longer need to pass any credentials nor requirements given to other scholarship types.</Typography>
                    </ul>

                  </Box>
                </Item>
              </Stack>

              <Stack sx={{ width: '100%',  margin: '0 auto', }} spacing={1}>
                <Item>
                  <Typography mb="1rem" mt="1rem" variant="h5" align="center" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                    Financial Aid Scholarship
                  </Typography>
                  <Box m="2rem">
                    <Typography variant="body1">
                        Priveleges:
                    </Typography>
                    <ul>
                        <Typography component="li" variant="body1">Discounted Tuition Fees</Typography>
                        <Typography component="li" variant="body1">Discounted Lab Fees</Typography>
                        <Typography component="li" variant="body1">Discounted Misc Fees</Typography>
                  </ul>
                  <br></br>
                  <Typography variant="body1">
                        Who is Eligible?
                    </Typography>
                    <ul>
                      <Typography component="li" variant="body1">Must be an undergraduate student of a Diploma or Bachelor's Degree in CIIT</Typography>
                      <Typography component="li" variant="body1">Must have completed a minimum of one (1) year in CIIT</Typography>
                      <Typography component="li" variant="body1">Proof of a Monthly Family budget per person below P8,000 (excluding Home loan, rent, utilities and food)</Typography>
                      <Typography component="li" variant="body1">Trimestral GPA of at least 2.8</Typography>
                      <Typography component="li" variant="body1">Must not have any grade lower than 2.00 in any subject at any given period</Typography>
                      <Typography component="li" variant="body1">Must have no failing grades</Typography>
                      <Typography component="li" variant="body1">Must not have any major offense</Typography>
                      <Typography component="li" variant="body1">Student Output and/or Portfolio</Typography>
                    </ul>

                  <br></br>
                  <Typography variant="body1">
                        What are the Retention Requirements?
                    </Typography>
                    <ul>
                      <Typography component="li" variant="body1">Photocopy of grades/class cards or Certificate of grades from the Registrar</Typography>
                      <Typography component="li" variant="body1">Clearance from Discipline Officer from any major offense</Typography>
                      <Typography component="li" variant="body1">Must be able to retain the GPA (2.8 or higher) prescribed by the scholarship discount bracket.</Typography>
                      <Typography component="li" variant="body1">If the student was not able to retain the grade requirement of his/her discount bracket, he/she will be placed to a lesser bracket or lose his/her scholarship.</Typography>
                      <Typography component="li" variant="body1">If the student was able to surpass the grade requirement of his/her discount bracket, he/she may be accommodated to a higher discount bracket depending on the available it of the funds or recommendation of the scholarship board.</Typography>
                      <Typography component="li" variant="body1">Shall not have any failing grades</Typography>
                      <Typography component="li" variant="body1">Must not have a dropped or unauthorized withdrawn subject</Typography>
                      <Typography component="li" variant="body1">Must enroll in the recommended subjects based on the Program Curriculum</Typography>
                      <Typography component="li" variant="body1">Scholar is allowed to shift to another course only once</Typography>
                      <Typography component="li" variant="body1">Signed MOU for Renewal of Scholarship</Typography>
                      <Typography component="li" variant="body1">Accomplished 10 hours per week service hours.</Typography>
                    </ul>
                  <br></br>
                  <Typography variant="body1">
                        I'd like more details on the discounts.
                    </Typography>
                    <ul>
                      <Typography component="li" variant="body1">50%  to 80% on Tuition and Miscellaneous Fees</Typography>
                    </ul>
                    <Box mt="2rem" style={{ textAlign: 'center' }}>
                      <Typography mb="1rem" variant="h6">
                        Ready To Apply?
                      </Typography>
                      <Button variant="outlined" 
                      style={{ width: '200px' }}>
                        Apply Now</Button>
                    </Box>

                  </Box>
                </Item>
              </Stack>
              
              <Stack sx={{ width: '100%',  margin: '0 auto', }} spacing={1}>
                <Item>
                  <Typography mb="1rem" mt="1rem" variant="h5" align="center" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                    Interweave Scholarship
                  </Typography>
                  <Box m="2rem">
                    <Typography variant="body1">
                        Priveleges:
                    </Typography>
                    <ul>
                        <Typography component="li" variant="body1">Discounted Tuition Fees</Typography>
                        <Typography component="li" variant="body1">Discounted Lab Fees</Typography>
                        <Typography component="li" variant="body1">Discounted Misc Fees</Typography>
                  </ul>
                  <br></br>
                  <Typography variant="body1">
                        Who is Eligible?
                    </Typography>
                    <ul>
                    <Typography component="li" variant="body1">Incoming College Students either from CIIT SHS or other Senior High Schools</Typography>
                    <Typography component="li" variant="body1">Must be a SHS Graduate with Completed Admission Credentials</Typography>
                    <Typography component="li" variant="body1">Passed the College Admission Test</Typography>
                    <Typography component="li" variant="body1">Average Grade in Previous School must be at least be equivalent to 3.2 (or 93%) based on CIIT Grading System</Typography>
                    <Typography component="li" variant="body1">Must have no failing grades</Typography>
                    <Typography component="li" variant="body1">Must not have any major offense</Typography>
                    <Typography component="li" variant="body1">Student Output and/or Portfolio</Typography>
                    </ul>

                  <br></br>
                  <Typography variant="body1">
                        What are the Retention Requirements?
                    </Typography>
                    <ul>
                    <Typography component="li" variant="body1">Photocopy of grades/class cards or Certificate of grades from the Registrar</Typography>
                    <Typography component="li" variant="body1">Clearance from Discipline Officer from any major offense</Typography>
                    <Typography component="li" variant="body1">Must be a Dean's Lister (refer here for Dean's List Qualifications)</Typography>
                    <Typography component="li" variant="body1">Shall not have any failing grades</Typography>
                    <Typography component="li" variant="body1">Must not have a dropped or unauthorized withdrawn subject</Typography>
                    <Typography component="li" variant="body1">Must enroll in the recommended subjects based on the Program Curriculum</Typography>
                    <Typography component="li" variant="body1">Scholar is allowed to shift to another course only once</Typography>
                    <Typography component="li" variant="body1">Signed MOU for Renewal of Scholarship</Typography>
                    <Typography component="li" variant="body1">Accomplished 10 hours per week service hours.</Typography>
                    </ul>
                  <br></br>
                  <Typography variant="body1">
                        I'd like more details on the discounts.
                    </Typography>
                    <ul>
                      <Typography component="li" variant="body1">100% on Tuition, Laboratory and Miscellaneous Fees</Typography>
                    </ul>
                    <Box mt="2rem" style={{ textAlign: 'center' }}>
                      <Typography mb="1rem" variant="h6">
                        Ready To Apply?
                      </Typography>
                      <Button variant="outlined" 
                      style={{ width: '200px' }}>
                        Apply Now</Button>
                    </Box>

                  </Box>
                </Item>
              </Stack>

            </Box>
            </Box>
          </motion.Box>

    );
};

export default ScholarshipsWidget;
