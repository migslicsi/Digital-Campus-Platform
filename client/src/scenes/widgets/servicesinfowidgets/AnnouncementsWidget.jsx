import { 
  Divider, 
  useTheme, 
  Box, 
  Typography, 
  useMediaQuery,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";

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

const AnnoucementsWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const light = palette.neutral.light;
  const [annoucements, setAnnoucements] = useState([]);
  const annoucementsCollectionRef = collection(db, "annoucements")
  const [newFrom, setNewFrom] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newTo, setNewTo] = useState("");
  const [newBody, setNewBody] = useState("");
  const [open, setOpen] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);

	//updated states
	const [selectedAnnoucement, setSelectedAnnoucement] = useState(null);
	const [updatedFrom, setUpdatedFrom] = useState("");
	const [updatedTo, setUpdatedTo] = useState("");
	const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedBody, setUpdatedBody] = useState("");

	const handleOpenEdit = (selectedAnnoucement) => {
		setSelectedAnnoucement(selectedAnnoucement);
		setUpdatedFrom(selectedAnnoucement.From);
		setUpdatedTo(selectedAnnoucement.To);
		setUpdatedTitle(selectedAnnoucement.Title);
    setUpdatedBody(selectedAnnoucement.Body);
		setOpenEdit(true);
	  };

	const handleCloseEdit = () => {
	setOpenEdit(false);
	};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "annoucements", id);
    await deleteDoc(userDoc);
    toast.success('Announcement deleted!', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(annoucementsCollectionRef, (snapshot) => {
      setAnnoucements(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  }, []);

  const createUser = async () => {
    await addDoc(annoucementsCollectionRef, { From: newFrom, To: newTo, Title: newTitle, Body: newBody});
    toast.success('Announcement created!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  
  const user = useSelector((state) => state.user);

  const updateUser = async () => {
		const userDoc = doc(db, "annoucements", selectedAnnoucement.id);
		await updateDoc(userDoc, {
		  From: updatedFrom,
		  To: updatedTo,
		  Title: updatedTitle,
      Body: updatedBody,
		});
		toast.success('Announcement updated!', {
		  position: toast.POSITION.TOP_RIGHT
		});
		handleCloseEdit();
	  };

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
            Announcements
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Get the latest updates and news about events, initiatives, and happenings in CIIT.
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
                  <TextField id="outlined-basic" label="From" variant="outlined" 
                  onChange={(event) => {setNewFrom(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="To" variant="outlined"
                  onChange={(event) => {setNewTo(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Title" variant="outlined" 
                  onChange={(event) => {setNewTitle(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Description/Annoucement" variant="outlined" 
                  onChange={(event) => {setNewBody(event.target.value)
                  }}/>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      createUser();
                      handleClose();
                    }}
                  ><Typography p={1}>Create Announcement</Typography></Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>
            
            <Grid container spacing={2}>
              {annoucements.map((annoucements) => (
                <Grid item  key={annoucements.id} xs={12} sm={6} md={6} lg={6}>
                  <Card  sx={{ width: '100%', borderRadius: 3, my: 2, boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)'}}>
                    <CardContent>
                      <Typography pl="2rem" pr="2rem" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        From the: {annoucements.From} <br/> To: {annoucements.To}
                      </Typography>
                      <Typography pl="2rem" pr="2rem" variant="h5" component="div">
                        {annoucements.Title}
                      </Typography>
                      <Typography pl="2rem" pr="2rem" variant="body2">
                        {annoucements.Body}
                      </Typography>
                      
                      {user.isAdmin && (
                      <Stack direction="row" spacing={1} justifyContent="flex-end">
                            <IconButton onClick={() => handleOpenEdit(annoucements)}><EditIcon/></IconButton>
                            <IconButton onClick={() => {deleteUser(annoucements.id)}}>
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
                                <TextField id="outlined-basic" label="From" variant="outlined" value={updatedFrom}
                                onChange={(event) => {setUpdatedFrom(event.target.value)
                                }}/>
                                <TextField id="outlined-basic" label="To" variant="outlined" value={updatedTo}
                                onChange={(event) => {setUpdatedTo(event.target.value)
                                }}/>
                                <TextField id="outlined-basic" label="Title" variant="outlined" value={updatedTitle}
                                onChange={(event) => {setUpdatedTitle(event.target.value)
                                }}/>
                                <TextField id="outlined-basic" label="Body" variant="outlined" value={updatedBody}
                                onChange={(event) => {setUpdatedBody(event.target.value)
                                }}/>
                                <Button 
                                  variant="outlined" 
                                  onClick={() => {
                                  updateUser(annoucements.id);
                                  handleCloseEdit();
                                  }}
                                ><Typography p={1}>Update Announcemenet</Typography></Button>
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

export default AnnoucementsWidget;
