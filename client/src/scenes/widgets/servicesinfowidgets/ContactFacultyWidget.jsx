import { 
  Divider, 
  useTheme, 
  Box, 
  Typography, 
  useMediaQuery,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";

const ContactFacultyWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const light = palette.neutral.light;
  
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
            Contact Faculty
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Find and contact our faculty members for guidance, advice, and support.
            </Typography>

            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">
            <TableContainer component={Paper}>
              <Table aria-label="Calendar table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "black", color: "white" }}>
                    <TableCell colSpan={3} style={{ textAlign: "center" }}>
                      <Typography color="white">School Directory (updated as of 2/2/23)</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="left">Department</TableCell>
                    <TableCell align="left">Contact Details</TableCell>
                    <TableCell align="left">Contact Them For:</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">College Registrar</TableCell>
                    <TableCell align="left">Ms. Imay Santos <br></br>registrar@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Any concerns with Edusuite or your enrollment process</li>
                            <li>Conflicts with your schedule</li>
                            <li>Completing your enrollment/admission requirements</li>
                            <li>Change of Grades</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Finance</TableCell>
                    <TableCell align="left">Finance Service Desk <br></br>college.financehelp@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Payment concerns</li>
                            <li>Discounts</li>
                            <li>Assessments / SOA</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">IT Department</TableCell>
                    <TableCell align="left">Service Desk <br></br>it.help@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Google account concerns</li>
                            <li>Workstation and application concerns</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Library</TableCell>
                    <TableCell align="left">Ms. Demi Realino <br></br>library@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Borrowing and returning of books</li>
                            <li>Follow up of Pending Library Accountabilities</li>
                            <li>Library website error concerns</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Physical Facilities</TableCell>
                    <TableCell align="left">Mr. Jaypee Barbasa <br></br>jaypee.barbasa@ciit.edu.ph <br></br>facilities@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Documents need to Pick Up on campus </li>
                            <li>Delivery of Rented PC/Tablet</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Edtech Coach</TableCell>
                    <TableCell align="left">Mr. Bille Lagarde <br></br>lagarde.bille@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>How to use Canvas LMS</li>
                            <li>How to use Edusuite</li>
                            <li>How to use Zoom</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">College Dean</TableCell>
                    <TableCell align="left">Mr. Francis Ian Quesada <br></br>francis.quesada@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Signatory of Leave of Absence</li>
                            <li>Supervises overall academic operations / Academic Heads</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">College Dean</TableCell>
                    <TableCell align="left">Mr. Francis Ian Quesada <br></br>francis.quesada@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Signatory of Leave of Absence</li>
                            <li>Supervises overall academic operations / Academic Heads</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Program Head for Arts Program</TableCell>
                    <TableCell align="left">Mr. Mario  Serrano <br></br>mario.serrano@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Any concerns in the subject equivalency of Arts students</li>
                            <li>Concerns with subject advising</li>
                            <li>Curriculum updates</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Program Coordinators for CS/EMC Programs</TableCell>
                    <TableCell align="left">
                      Mr. Alejandro Ortega (CS) <br></br>alejandro.ortega@ciit.edu.ph<br></br>
                      Mr. Bille Lagarde (EMC) <br></br>lagarde.bille@ciit.edu.ph<br></br>
                    </TableCell>
                    <TableCell align="left">
                            <li>Any concerns in the subject equivalency of  CS/EMC students</li>
                            <li>Concerns with subject advising</li>
                            <li>Curriculum updates</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Program Head for General Education</TableCell>
                    <TableCell align="left">Ms. Mylyn  Velasquez<br></br>mylyn.velasquez@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Any concerns in the general education subjects</li>
                            <li>Concerns with subject advising</li>
                            <li>Curriculum updates</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Student Affairs</TableCell>
                    <TableCell align="left">Mr.  Ralph Cagabcab<br></br>sao@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Scholarships</li>
                            <li>Student Organizations</li>
                            <li>Student Communications</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Placement Office</TableCell>
                    <TableCell align="left">Ms. Jessica Digol<br></br>Ms. Anne Aguilar<br></br>ciit.placement@ciit.edu.ph </TableCell>
                    <TableCell align="left">
                            <li>College Internship Program and Practicum Dashboard</li>
                            <li>Company Partners List and Referrals</li>
                            <li>Placement Consultation and Career Coaching</li>
                            <li>Job Placement and Other Career Services</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Guidance Center</TableCell>
                    <TableCell align="left">Mr. Marlowe Sarabia<br></br>Ms. Vanessa Cauilan<br></br>Ms. Mirzie Panganiban<br></br>guidance@ciit.edu.ph </TableCell>
                    <TableCell align="left">
                            <li>Concerns related to students' psychological and emotional well-being.</li>
                            <li>Enrollment Clearance concerns</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Student Discipline & Formation</TableCell>
                    <TableCell align="left">Mr.  Don Arellano<br></br>don.arellano@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Disciplinary and Character Formation concerns.</li>
                            <li>Individual Mentoring & Coaching</li>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Clinic</TableCell>
                    <TableCell align="left">Ms. Iris  Panganiban<br></br>Mr. Justine Ace Gallarza<br></br>clinic@ciit.edu.ph</TableCell>
                    <TableCell align="left">
                            <li>Medical and health-related concerns</li>
                            <li>Enrollment Clearance concerns</li>
                            <li>Health-related absences </li>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </Box>
          </motion.Box>
    );
};

export default ContactFacultyWidget;
