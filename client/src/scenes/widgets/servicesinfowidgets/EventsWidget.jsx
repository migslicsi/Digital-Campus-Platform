import { Grid, Divider, useTheme, Box, Typography, useMediaQuery, Button } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "framer-motion";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect } from "react";
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
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

const EventsWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const [events, setEvents] = useState([]);
  const eventsCollectionRef = collection(db, "events")
  const [newDate, setnewDate] = useState("");
  const [newLocation, setnewLocation] = useState("");
  const [newName, setnewName] = useState("");
  const [newPrice, setnewPrice] = useState("");
  const [open, setOpen] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);

	//updated states
	const [selectedEvents, setSelectedEvents] = useState(null);
	const [updatedDate, setUpdatedDate] = useState("");
	const [updatedLocation, setUpdatedLocation] = useState("");
	const [updatedName, setUpdatedName] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");

	const handleOpenEdit = (selectedEvents) => {
		setSelectedEvents(selectedEvents);
		setUpdatedDate(selectedEvents.Date);
		setUpdatedLocation(selectedEvents.Location);
		setUpdatedName(selectedEvents.Name);
    setUpdatedPrice(selectedEvents.Price);
		setOpenEdit(true);
	  };

	const handleCloseEdit = () => {
	setOpenEdit(false);
	};

	const updateUser = async () => {
		const userDoc = doc(db, "events", selectedEvents.id);
		await updateDoc(userDoc, {
		  Name: updatedName, Location: updatedLocation, Price: updatedPrice, Date: updatedDate
		});
		toast.success('Event updated!', {
		  position: toast.POSITION.TOP_RIGHT
		});
		handleCloseEdit();
	  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "events", id);
    await deleteDoc(userDoc);
    toast.success('Event deleted!', {
      position: toast.POSITION.TOP_RIGHT
    });
  }
  useEffect(() => {
    const unsubscribe = onSnapshot(eventsCollectionRef, (snapshot) => {
      setEvents(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  }, []);

  const createUser = async () => {
    await addDoc(eventsCollectionRef, { Name: newName, Location: newLocation, Price: newPrice, Date: newDate});
    toast.success('Event created!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  
  const user = useSelector((state) => state.user);
  
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
        Events
        </Typography>
        <Divider />

        <Typography 
        pt="1rem"
        pl="1rem" 
        pb="0.5rem" 
        variant={isNonMobileScreens ? "body1" : "body2"}
        color={main}
        >Get info on the latest events around the campus.
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
              <TextField id="outlined-basic" label="Event Name" variant="outlined" 
              onChange={(event) => {setnewName(event.target.value)
              }}/>
              <TextField id="outlined-basic" label="Data" variant="outlined"
              onChange={(event) => {setnewDate(event.target.value)
              }}/>
              <TextField id="outlined-basic" label="Admission Price" variant="outlined" 
              onChange={(event) => {setnewPrice(event.target.value)
              }}/>
              <TextField id="outlined-basic" label="Location" variant="outlined" 
              onChange={(event) => {setnewLocation(event.target.value)
              }}/>
              <Button 
                variant="outlined" 
                onClick={() => {
                  createUser();
                  handleClose();
                }}
              ><Typography p={1}>Create Event</Typography></Button>
              </Stack>
            </Box>
          </Fade>
        </Modal>
        
        <Grid container spacing={2}>
          {events.map((events) => (
            <Grid item key={events.id} xs={12} sm={6} md={6} lg={6}>
              <Card sx={{ width: '100%', borderRadius: 3, my: 2, boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)'}}>
                <CardContent>
                  <Typography pt="1rem" pl="2rem" pr="2rem" color={dark} gutterBottom variant="h4" component="div">
                    {events.Name}
                  </Typography>
                  <div style={{ paddingLeft:'2rem', display: 'flex', alignItems: 'center' }}>
                    <CalendarMonthIcon />
                    <Typography pl="0.5rem" pr="2rem" variant="body" component="div">
                      {events.Date}
                    </Typography>
                  </div>
                  <div style={{ paddingLeft:'2rem', display: 'flex', alignItems: 'center' }}>
                    <AttachMoneyIcon />
                    <Typography pl="0.5rem" pr="2rem" variant="body">
                      {events.Price}
                    </Typography>
                  </div>
                  <div style={{ paddingLeft:'2rem', display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon />
                    <Typography pl="0.5rem" pr="2rem" variant="body">
                      {events.Location}
                    </Typography>
                  </div>

                  
                  {user.isAdmin && (
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                        <IconButton onClick={() => handleOpenEdit(events)}><EditIcon/></IconButton>
                        <IconButton onClick={() => {deleteUser(events.id)}}>
                        <DeleteIcon/>
                        </IconButton>

                        <Modal
                          closeAfterTransition
                          open={openEdit} 
                          onClose={handleCloseEdit}
                          >
                          <Fade in={openEdit}>
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
                            <IconButton aria-label="close"
                            sx={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              color: 'primary.main',
                            }}
                            onClick={handleCloseEdit}
                            >
                            <CloseRoundedIcon />
                            </IconButton>
                            <Stack spacing={1} justifyContent="flex-end">
                            <TextField id="outlined-basic" label="Name" variant="outlined" value={updatedName}
                            onChange={(event) => {setUpdatedName(event.target.value)
                            }}/>
                            <TextField id="outlined-basic" label="Date" variant="outlined" value={updatedDate}
                            onChange={(event) => {setUpdatedDate(event.target.value)
                            }}/>
                            <TextField id="outlined-basic" label="Price" variant="outlined" value={updatedPrice}
                            onChange={(event) => {setUpdatedPrice(event.target.value)
                            }}/>
                            <TextField id="outlined-basic" label="Location" variant="outlined" value={updatedLocation}
                            onChange={(event) => {setUpdatedLocation(event.target.value)
                            }}/>
                            <Button 
                              variant="outlined" 
                              onClick={() => {
                              updateUser(events.id);
                              handleCloseEdit();
                              }}
                            ><Typography p={1}>Update Event</Typography></Button>
                            </Stack>
                            </Box>
                          </Fade>
                          </Modal>

                  </Stack>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
       </Grid>
        
      </motion.Box>
);
};

export default EventsWidget;
