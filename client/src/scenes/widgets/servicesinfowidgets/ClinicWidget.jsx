import {   Table, TableHead,
    TableBody,
    TableCell,
    TableRow,Button, Divider, useTheme, Box, Typography, useMediaQuery, Grid } from "@mui/material";
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

const ClinicWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [clinicStaff, setClinicStaff] = useState([]);
  const clinicstaffCollectionRef = collection(db, "clinicstaff")
  const [newName, setNewName] = useState("");
  const [newSpecialization, setNewSpecialization] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "clinicstaff", id);
    await deleteDoc(userDoc);
    toast.success('Clinic Staff sucessfully deleted', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(clinicstaffCollectionRef, (snapshot) => {
      setClinicStaff(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  }, []);

  const createUser = async () => {
    await addDoc(clinicstaffCollectionRef, { Name: newName, Specialization: newSpecialization});
    toast.success('Clinic Staff created!', {
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
            School Clinic
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Schedule a meeting with the school clinic for your medical needs.
            </Typography>

            <Grid container spacing={0} mb="1rem" ml="0.5rem" pr="1rem">
            <Grid item xs={12} sm={6}>
                <img src="http://localhost:3001/assets/clinic.png" alt="clinic" style={{ width: '100%', height: '100%'}} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src="http://localhost:3001/assets/clinic2.jpg" alt="clinic" style={{ width: '100%', height: '100%'}} />
            </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
                The SCHOOL CLINIC is responsible for safe-guarding the health of the scholars and school personnel in campus.
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ pl: 1 }}>
                The clinic is open from 8:00 A.M. to 12:00 P.M. and 1:00 P.M. to 5:00 P.M. (Mondays to Fridays except Saturdays, Sundays and Special Holidays).
            </Typography>

            <br></br>
            <Typography variant="h3" gutterBottom sx={{ pl: 1 }}>
                Services:
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ pl: 1 }}>
                <ol>
                <li>CONSULTATION – medical / dental</li>
                <li>EMERGENCY &amp; FIRST AID MANAGEMENT - includes administration of over-the-counter medications, debridement/dressing of wounds, hot/cold compress, immobilization thru application of splints/elastic bandage and the like.</li>
                <li>CLINIC CONFINEMENT - the school nurse may recommend immediate confinement after evaluation and ascertaining the severity of the illness. Clinic confinement is limited to 2-3 hours only. The nurse will provide clinic certification after clinic confinement and to be countersigned by the class adviser before the scholar is admitted back to his/her classroom.</li>
                <li>MONITORING &amp; INSPECTION - Prevention of illness and safety measures. Scholars Grooming and Neatness. School Canteen menu and sanitation.</li>
                <li>REFERRAL - In case of persistent symptoms or illness, the school nurse informs the parents/guardians and class adviser of the scholars immediately. Scholars will then be referred and brought to the nearest medical clinic or medical facility for further evaluation and management. If confinement is necessary, parents/guardians are advised to proceed immediately to the said medical facility.</li>
                </ol>
            </Typography>
            <br></br>
            <br/>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h3" gutterBottom sx={{ pl: 1 }}>
                    Clinic Staff:
                </Typography>
                {user.isAdmin && (
                <IconButton aria-label="delete" onClick={handleOpen}>
                    <AddIcon />
                </IconButton>
                )}
            </Box>


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
                  <TextField id="outlined-basic" label="Specialization" variant="outlined"
                  onChange={(event) => {setNewSpecialization(event.target.value)
                  }}/>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      createUser();
                      handleClose();
                    }}
                  ><Typography p={1}>Create Staff</Typography></Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>
            
            <Table>
                <TableBody>
                    {clinicStaff.map((clinicStaff) => (
                    <TableRow key={clinicStaff.Name}>
                        <TableCell>{clinicStaff.Name}</TableCell>
                        <TableCell>{clinicStaff.Specialization}</TableCell>
                        {user.isAdmin && (
                        <TableCell align="left">
                            <IconButton><EditIcon/></IconButton>
                            <IconButton onClick={() => {deleteUser(clinicStaff.id)}}>
                            <DeleteIcon/>
                            </IconButton>
                        </TableCell>
                        )}
                    </TableRow>
                    ))}
                </TableBody>
            </Table>

            
        <Box mt="2rem" display="flex" justifyContent="center">
        <Button sx={{ width: '20rem' }} variant="contained">
        <Typography variant="subtitle1" style={{ fontSize: '1.2rem' }}>Schedule a consultation</Typography>
        </Button>
        </Box>
        <Box mt="1.5rem" mb="1.5rem">
        </Box>
        </motion.Box>

    );
};

export default ClinicWidget;
