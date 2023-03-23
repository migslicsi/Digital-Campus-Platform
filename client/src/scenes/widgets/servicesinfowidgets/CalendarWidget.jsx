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
  Tabs,
  Tab,
} from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";


const CalendarWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const blue = palette.primary.main;

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])

  
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
            Academic Calendar
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Keep track of important dates, deadlines, and events throughout the academic year with our comprehensive calendar.
            </Typography>
            
            <Typography mt="1rem" variant="h3" align="center" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
              Calendar List of Activities
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: '1rem'}}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor={main}
                indicatorColor="primary"
                aria-label="secondary tabs example"
              >
                <Tab value="one" label="March" />
                <Tab value="two" label="April" />
                <Tab value="three" label="May" />
                <Tab value="four" label="June" />

              </Tabs>
            </Box>
            
            {/* march */}
            <Box style={{ overflowX: "auto" }}>
            <div style={{ display: value === "one" ? "block" : "none" }}>
            <TableContainer component={Paper}>
              <Table aria-label="Calendar table">
                <TableHead>
                  <tr style={{ backgroundColor: "black", color: "white" }}>
                    <th colSpan="3" style={{ textAlign: "center" }}>MARCH 2023</th>
                  </tr>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Day</TableCell>
                    <TableCell>Activity/Deadline/Holiday</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>2-4</TableCell>
                    <TableCell>Thu-Sat</TableCell>
                    <TableCell>Conference on Sustainable Development and Climate Change</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6-7</TableCell>
                    <TableCell>Mon-Tue</TableCell>
                    <TableCell>Workshop on Digital Marketing Strategies for Small Businesses</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>8-9</TableCell>
                    <TableCell>Wed-Thu</TableCell>
                    <TableCell>Research Symposium on Artificial Intelligence and Machine Learning</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>13-15</TableCell>
                    <TableCell>Mon-Wed</TableCell>
                    <TableCell>International Conference on Education and Technology</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>18-20</TableCell>
                    <TableCell>Sat-Mon</TableCell>
                    <TableCell>Art and Music Festival featuring local artists and musicians</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>23-25</TableCell>
                    <TableCell>Thu-Sat</TableCell>
                    <TableCell>Leadership and Team Building Retreat for Corporate Executives</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>29-30</TableCell>
                    <TableCell>Tue-Wed</TableCell>
                    <TableCell>Workshop on Cross-Cultural Communication for Global Business Professionals</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </div>
            </Box>

            {/* april */}
            <Box style={{ overflowX: "auto" }}>
            <div style={{ display: value === "two" ? "block" : "none" }}>
            <TableContainer component={Paper}>
              <Table aria-label="Calendar table">
                <TableHead>
                  <tr style={{ backgroundColor: "black", color: "white" }}>
                    <th colSpan="3" style={{ textAlign: "center" }}>APRIL 2023</th>
                  </tr>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Day</TableCell>
                    <TableCell>Activity/Deadline/Holiday</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>2-3</TableCell>
                    <TableCell>Sat-Sun</TableCell>
                    <TableCell>Weekend Yoga Retreat for Health and Wellness Enthusiasts</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5-7</TableCell>
                    <TableCell>Tue-Thu</TableCell>
                    <TableCell>International Conference on Renewable Energy and Sustainability</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10-11</TableCell>
                    <TableCell>Mon-Tue</TableCell>
                    <TableCell>Workshop on Creative Writing and Publishing</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>13-15</TableCell>
                    <TableCell>Thu-Sat</TableCell>
                    <TableCell>Entrepreneurship and Innovation Summit for Startups and Investors</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>16-17</TableCell>
                    <TableCell>Sat-Sun</TableCell>
                    <TableCell>Community Service Project for Local Environmental Conservation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>20-22</TableCell>
                    <TableCell>Wed-Fri</TableCell>
                    <TableCell>International Conference on Business and Economics</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>25-26</TableCell>
                    <TableCell>Tue-Wed</TableCell>
                    <TableCell>Workshop on Photography and Visual Storytelling</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </div>
            </Box>

            {/* may */}
            <Box style={{ overflowX: "auto" }}>
            <div style={{ display: value === "three" ? "block" : "none" }}>
            <TableContainer component={Paper}>
              <Table aria-label="Calendar table">
                <TableHead>
                  <tr style={{ backgroundColor: "black", color: "white" }}>
                    <th colSpan="3" style={{ textAlign: "center" }}>MAY 2023</th>
                  </tr>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Day</TableCell>
                    <TableCell>Activity/Deadline/Holiday</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1-4</TableCell>
                    <TableCell>Mon-Thu</TableCell>
                    <TableCell>Final Examination for Undergraduate Students</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6-7</TableCell>
                    <TableCell>Sat-Sun</TableCell>
                    <TableCell>Weekend Community Service for Student Volunteers</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>8</TableCell>
                    <TableCell>Mon</TableCell>
                    <TableCell>Start of Summer Classes for Undergraduate Students</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>12-14</TableCell>
                    <TableCell>Fri-Sun</TableCell>
                    <TableCell>Retreat and Reflection Days for Graduating Seniors</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>15-19</TableCell>
                    <TableCell>Mon-Fri</TableCell>
                    <TableCell>Intensive Language Training for International Students</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>20-21</TableCell>
                    <TableCell>Sat-Sun</TableCell>
                    <TableCell>Leadership Training for Student Organizations</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>23</TableCell>
                    <TableCell>Wed</TableCell>
                    <TableCell>University Forum on Climate Change and Sustainability</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>25</TableCell>
                    <TableCell>Fri</TableCell>
                    <TableCell>Special School Forum, 2PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>27</TableCell>
                    <TableCell>Sun</TableCell>
                    <TableCell>Summer Sports Fest</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>29-31</TableCell>
                    <TableCell>Tue-Thu</TableCell>
                    <TableCell>Workshop on Research Methods and Data Analysis for Graduate Students</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </div>
            </Box>

            {/* june */}
            <Box style={{ overflowX: "auto" }}>
            <div style={{ display: value === "four" ? "block" : "none" }}>
            <TableContainer component={Paper}>
              <Table aria-label="Calendar table">
                <TableHead>
                  <tr style={{ backgroundColor: "black", color: "white" }}>
                    <th colSpan="3" style={{ textAlign: "center" }}>JUNE 2023</th>
                  </tr>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Day</TableCell>
                    <TableCell>Activity/Deadline/Holiday</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1-4</TableCell>
                    <TableCell>Wed-Sat</TableCell>
                    <TableCell>International Conference on Artificial Intelligence</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5-6</TableCell>
                    <TableCell>Sun-Mon</TableCell>
                    <TableCell>Weekend Camping Trip for Outdoor Enthusiasts Club</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>7-9</TableCell>
                    <TableCell>Tue-Thu</TableCell>
                    <TableCell>Faculty Development Workshop on Innovative Teaching Strategies</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>12-15</TableCell>
                    <TableCell>Sun-Wed</TableCell>
                    <TableCell>Annual Music Festival featuring local and international artists</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>16-18</TableCell>
                    <TableCell>Thu-Sat</TableCell>
                    <TableCell>Entrepreneurship Bootcamp for aspiring young entrepreneurs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>19-21</TableCell>
                    <TableCell>Sun-Tue</TableCell>
                    <TableCell>Graduation Ceremony for Master's and Doctoral Candidates</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>23-24</TableCell>
                    <TableCell>Thu-Fri</TableCell>
                    <TableCell>Workshop on Project Management for Business Professionals</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>25-27</TableCell>
                    <TableCell>Sat-Mon</TableCell>
                    <TableCell>Summer Film Festival showcasing award-winning independent films</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>28</TableCell>
                    <TableCell>Tue</TableCell>
                    <TableCell>Guest Lecture on Neuroscience and the Human Brain</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>30</TableCell>
                    <TableCell>Thu</TableCell>
                    <TableCell>Charity Fun Run for the Benefit of Local Orphanages</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </div>
            </Box>

            <Box mt="2rem">
            <Typography variant="h6" style={{ color: "white", backgroundColor: "black", width: "100%", textAlign: "center", fontWeight: "bold" }}>
              CALENDAR AND HOLIDAYS
            </Typography>
            </Box>


            <Box style={{ margin: "1rem", display: "flex", flexWrap: "wrap", gap: "0rem", justifyContent: "center"}}>
              {
                loading?
                <Box style={{ height: "450", width:"50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ClipLoader color={'#00D5FA'} loading={loading} size={50} />
                </Box>
                :
                <iframe
                src="https://calendar.google.com/calendar/embed?src=ciitplusplus%40gmail.com&ctz=Asia%2FManila"
                width="50%"
                height="350"
                frameBorder="0"
                scrolling="no"
                ></iframe>
              }
              
              <Box sx={{
                  marginLeft: "4rem",
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderLeft: "2px solid grey",
                  paddingLeft: "4rem",
                  '@media (max-width: 1402px)': {
                    width: '80%',
                    marginLeft: '0rem',
                    paddingLeft: '0rem',
                    borderLeft: 'none',
                    borderTop: '2px solid grey',
                  }
                }}>

                <Typography variant="h5" textAlign="center" mb="0.5rem" sx={{fontWeight: 'bold'}}>Holidays 2023</Typography>
                <table style={{ border: "1px solid grey", borderCollapse: "collapse", width: "100%", textAlign: "center" }}>
                  <thead>
                    <tr>
                      <th style={{ borderBottom: "1px solid grey" }}>Date</th>
                      <th style={{ borderBottom: "1px solid grey" }}>Holiday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>January 1</td>
                      <td>New Year's Day</td>
                    </tr>
                    <tr>
                      <td>April 9</td>
                      <td>Araw ng Kagitingan</td>
                    </tr>
                    <tr>
                      <td>April 21</td>
                      <td>Maundy Thursday</td>
                    </tr>
                    <tr>
                      <td>April 22</td>
                      <td>Good Friday</td>
                    </tr>
                    <tr>
                      <td>May 1</td>
                      <td>Labor Day</td>
                    </tr>
                    <tr>
                      <td>June 12</td>
                      <td>Independence Day</td>
                    </tr>
                    <tr>
                      <td>August 30</td>
                      <td>National Heroes Day</td>
                    </tr>
                    <tr>
                      <td>November 1</td>
                      <td>All Saints' Day</td>
                    </tr>
                    <tr>
                      <td>December 25</td>
                      <td>Christmas Day</td>
                    </tr>
                    <tr>
                      <td>December 30</td>
                      <td>Rizal Day</td>
                    </tr>
                    <tr>
                      <td>December 31</td>
                      <td>New Year's Eve</td>
                    </tr>
                  </tbody>
                </table>
              </Box>
              <style>
                {`
                  @media only screen 
                    and (min-device-width: 375px) 
                    and (max-device-width: 812px) 
                    and (-webkit-device-pixel-ratio: 3)
                    and (orientation: portrait) {
                    iframe {
                      width: 90%;
                      height: 350px;
                    }
                  }
                  @media (max-width: 1402px) {
                    iframe {
                      width: 100%;
                      aspect-ratio: 16/9;
                      height: 400px;
                    }
                  @media (max-width: 558px) {
                    iframe {
                      width: 90%;
                      aspect-ratio: 16/9;
                      height: 400px;
                    }
                  }
                  @media (max-width: 480px) {
                    iframe {
                      width: 85%;
                      height: 350px;
                      aspect-ratio: 16/9;
                    }
                  }
                `}
              </style>
            </Box>


          </motion.Box>

    );
};

export default CalendarWidget;
