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

const ScholarshipsWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const light = palette.neutral.light;
  const [scholarships, setscholarships] = useState([]);
  const scholarshipsCollectionRef = collection(db, "scholarships")
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDiscount, setNewDiscount] = useState("");
  const [newEligibility, setNewEligibility] = useState("");
  const [newPrivileges, setNewPrivileges] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "scholarships", id);
    await deleteDoc(userDoc);
    toast.success('Scholarship sucessfully deleted', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(scholarshipsCollectionRef, (snapshot) => {
      setscholarships(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  }, []);

  const createUser = async () => {
    await addDoc(scholarshipsCollectionRef, { Name: newName, Description: newDescription, Discount: newDiscount, Eligibility: newEligibility, Privileges: newPrivileges});
    toast.success('Scholarship created!', {
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
                  <TextField id="outlined-basic" label="Name" variant="outlined" 
                  onChange={(event) => {setNewName(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Description" variant="outlined"
                  onChange={(event) => {setNewDescription(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Discount" variant="outlined" 
                  onChange={(event) => {setNewDiscount(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Eligibility" variant="outlined" 
                  onChange={(event) => {setNewEligibility(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Privileges" variant="outlined" 
                  onChange={(event) => {setNewPrivileges(event.target.value)
                  }}/>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      createUser();
                      handleClose();
                    }}
                  ><Typography p={1}>Create Scholarship</Typography></Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>
            
            <Grid container spacing={2}>
              {scholarships.map((scholarships) => (
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Card sx={{ width: '100%', borderRadius: 3, my: 2, boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)'}}>
                    <CardContent>
                      <Typography pl="1rem" pr="1rem" variant="h3">
                        {scholarships.Name}
                      </Typography>
                      <Typography mt="1rem" pl="1rem" pr="1rem" variant="body" component="div">
                        <li>{scholarships.Description}</li>
                        <li>{scholarships.Discount}</li>
                        <li>{scholarships.Eligibility}</li>
                        <li>{scholarships.Privileges}</li>
                      </Typography>
                      
                      {user.isAdmin && (
                      <Stack direction="row" spacing={1} justifyContent="flex-end">
                        <IconButton><EditIcon/></IconButton>
                            <IconButton onClick={() => {deleteUser(scholarships.id)}}>
                            <DeleteIcon/>
                            </IconButton>
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

export default ScholarshipsWidget;
