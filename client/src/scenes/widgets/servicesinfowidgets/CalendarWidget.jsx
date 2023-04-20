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
  Button,
} from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import {db} from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";


const CalendarWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const blue = palette.primary.main;
  const [calendar, setCalendar] = useState([]);
  const calendarCollectionRef = collection(db, "calendar")
  const [newDate, setNewDate] = useState("");
  const [newDay, setNewDay] = useState("");
  const [newActivity, setNewActivity] = useState("");
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "calendar", id);
    await deleteDoc(userDoc);
    toast.success('Calendar entry sucessfully deleted', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(calendarCollectionRef, (snapshot) => {
      const sortedCalendar = snapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
      setCalendar(sortedCalendar);
    });
    return unsubscribe;
  }, []);
  

  const createUser = async () => {
    await addDoc(calendarCollectionRef, { Date: newDate, Activity: newActivity, Day: newDay});
    toast.success('Calendar entry created!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const user = useSelector((state) => state.user);

  
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

            <Stack direction="row" spacing={1} justifyContent="flex-end">
              {user.isAdmin && (
                <IconButton aria-label="delete" onClick={handleOpen}>
                  <AddIcon />
                </IconButton>
              )}
            </Stack>

            <Modal
              closeAfterTransition
              open={open} 
              onClose={handleClose}
            >
              <Fade in={open}>
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
                    onClick={handleClose}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                  <Stack spacing={1} justifyContent="flex-end">
                  <TextField id="outlined-basic" label="Date" variant="outlined" 
                  onChange={(event) => {setNewDate(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Day/s" variant="outlined"
                  onChange={(event) => {setNewDay(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Activity/Event" variant="outlined" 
                  onChange={(event) => {setNewActivity(event.target.value)
                  }}/>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      createUser();
                      handleClose();
                    }}
                  ><Typography p={1}>Create Calendar Entry</Typography></Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>

            {/* calendar */}
            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">
            <TableContainer component={Paper}>
              <Table aria-label="Calendar table">
                <TableHead>
                  <TableRow >
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="left">Day/s</TableCell>
                    <TableCell colSpan={2} align="left">Activity/Event</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {calendar.map((calendar) => (
                    <TableRow colSpan={5} key={calendar}>
                      <TableCell align="left">
                        <Typography>{calendar.Date}</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography>{calendar.Day}</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography>{calendar.Activity}</Typography>
                      </TableCell>
                      {user.isAdmin && (
                      <TableCell align="left">
                        <IconButton><EditIcon/></IconButton>
                        <IconButton onClick={() => {deleteUser(calendar.id)}}>
                          <DeleteIcon/>
                          </IconButton>
                      </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                src="https://calendar.google.com/calendar/embed?src=ateneo.edu_4bp7jq54ifkut95r4a2t5vongs%40group.calendar.google.com&ctz=Asia%2FManila"
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
