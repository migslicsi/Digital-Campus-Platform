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
  Button,
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

const InternshipsWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const light = palette.neutral.light;
  const [internships, setInternships] = useState([]);
  const internshipsCollectionRef = collection(db, "internships")
  const [newCompany, setNewCompany] = useState("");
  const [newField, setNewField] = useState("");
  const [newSetup, setNewSetup] = useState("");
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  //updated states
  const [updatedCompany, setUpdatedCompany] = useState()
  const [updatedField, setUpdatedField] = useState()
  const [updatedSetup, setUpdatedSetup] = useState()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEdit = (id) => {
    setOpenEdit(true);
  };

  const handleCloseEdit = (id) => {
    setOpenEdit(false);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "internships", id);
    await deleteDoc(userDoc);
    toast.success('OJT Opportunity sucessfully deleted', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(internshipsCollectionRef, (snapshot) => {
      setInternships(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  }, []);

  const createUser = async () => {
    await addDoc(internshipsCollectionRef, { Company: newCompany, Field: newField, Setup: newSetup});
    toast.success('OJT Opportunity created!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  
  const user = useSelector((state) => state.user);

   const updateUser = async (id) => {
    const userDoc = doc(db, "internships", id);
    await updateDoc(userDoc, {Company: updatedCompany, Field: updatedField, Setup: updatedSetup});
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
            Internships
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Explore our internship opportunities and gain real-world experience in your field of study.
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
                  <TextField id="outlined-basic" label="Company" variant="outlined" 
                  onChange={(event) => {setNewCompany(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Field" variant="outlined"
                  onChange={(event) => {setNewField(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Setup" variant="outlined" 
                  onChange={(event) => {setNewSetup(event.target.value)
                  }}/>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      createUser();
                      handleClose();
                    }}
                  ><Typography p={1}>Create Internship</Typography></Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>


            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">
            <TableContainer component={Paper}>
              <Table aria-label="Calendar table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "black", color: "white" }}>
                    <TableCell colSpan={5} style={{ textAlign: "center" }}>
                      <Typography color="white">Internship/OJT Opportunities</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell align="left">Company Name</TableCell>
                    <TableCell align="left">Field</TableCell>
                    <TableCell colSpan={2} align="left">Work Setup</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {internships.map((internships) => (
                    <TableRow colSpan={5} key={internships.company}>
                      <TableCell align="left">
                        <Typography>{internships.Company}</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography>{internships.Field}</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography>{internships.Setup}</Typography>
                      </TableCell>
                      {user.isAdmin && (
                      <TableCell align="left">
                        <IconButton onClick={handleOpenEdit}><EditIcon/></IconButton>
                        <IconButton onClick={() => {deleteUser(internships.id)}}>
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
                                <IconButton
                                  aria-label="close"
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
                                <TextField id="outlined-basic" label="Company" variant="outlined" defaultValue={internships.Company} 
                                onChange={(event) => {setUpdatedCompany(event.target.value)
                                }}/>
                                <TextField id="outlined-basic" label="Field" variant="outlined" defaultValue={internships.Field} 
                                onChange={(event) => {setUpdatedField(event.target.value)
                                }}/>
                                <TextField id="outlined-basic" label="Work Setup" variant="outlined" defaultValue={internships.Setup} 
                                onChange={(event) => {setUpdatedSetup(event.target.value)
                                }}/>
                                <Button 
                                  variant="outlined" 
                                  onClick={() => {
                                    updateUser(internships.id);
                                    handleCloseEdit();
                                  }}
                                ><Typography p={1}>Update Company</Typography></Button>
                                </Stack>
                              </Box>
                            </Fade>
                          </Modal>
                      </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Box>
          </motion.Box>
    );
};

export default InternshipsWidget;
