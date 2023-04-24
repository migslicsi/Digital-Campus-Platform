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
    toast.success('Staff deleted!', {
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
    toast.success('Staff created!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const user = useSelector((state) => state.user);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const [clinicServices, setClinicServices] = useState([]);
  const clinicservicesCollectionRef = collection(db, "clinicservices")
  const [newService, setNewService] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const deleteUser1 = async (id) => {
    const userDoc = doc(db, "clinicservices", id);
    await deleteDoc(userDoc);
    toast.success('Service deleted!', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(clinicservicesCollectionRef, (snapshot) => {
      setClinicServices(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  }, []);

  const createUser1 = async () => {
    await addDoc(clinicservicesCollectionRef, { Service: newService, Description: newDescription});
    toast.success('Service created!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  //clinic staff
  const [openEdit, setOpenEdit] = useState(false);

	//updated states
	const [selectedClinicStaff, setSelectedClinicStaff] = useState(null);
	const [updatedName, setUpdatedName] = useState("");
	const [updatedSpecialization, setUpdatedSpecialization] = useState("");

	const handleOpenEdit = (selectedClinicStaff) => {
		setSelectedClinicStaff(selectedClinicStaff);
		setUpdatedName(selectedClinicStaff.Name);
		setUpdatedSpecialization(selectedClinicStaff.Specialization);
		setOpenEdit(true);
	  };

	const handleCloseEdit = () => {
	setOpenEdit(false);
	};

	const updateUser = async () => {
		const userDoc = doc(db, "clinicstaff", selectedClinicStaff.id);
		await updateDoc(userDoc, {
		  Name: updatedName,
		  Specialization: updatedSpecialization,
		});
		toast.success('Staff updated!', {
		  position: toast.POSITION.TOP_RIGHT
		});
		handleCloseEdit();
	  };

  //clinic services
  const [openEdit1, setOpenEdit1] = useState(false);

	//updated states
	const [selectedClinicServices, setSelectedClinicServices] = useState(null);
	const [updatedService, setUpdatedService] = useState("");
	const [UpdatedDescription, setUpdatedDescription] = useState("");

	const handleOpenEdit1 = (selectedClinicServices) => {
		setSelectedClinicServices(selectedClinicServices);
		setUpdatedService(selectedClinicServices.Service);
		setUpdatedDescription(selectedClinicServices.Description);
		setOpenEdit1(true);
	  };

	const handleCloseEdit1 = () => {
	setOpenEdit1(false);
	};

	const updateUser1 = async () => {
		const userDoc = doc(db, "clinicservices", selectedClinicServices.id);
		await updateDoc(userDoc, {
		  Service: updatedService,
      Description: UpdatedDescription,
		});
		toast.success('Service updated!', {
		  position: toast.POSITION.TOP_RIGHT
		});
		handleCloseEdit1();
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
                <img src="https://ciit-plusplus-backend.onrender.com/assets/clinic.png" alt="clinic" style={{ width: '100%', height: '100%'}} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src="https://ciit-plusplus-backend.onrender.com/assets/clinic2.jpg" alt="clinic" style={{ width: '100%', height: '100%'}} />
            </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
                The SCHOOL CLINIC is responsible for safe-guarding the health of the scholars and school personnel in campus.
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ pl: 1 }}>
                The clinic is open from 8:00 A.M. to 12:00 P.M. and 1:00 P.M. to 5:00 P.M. (Mondays to Fridays except Saturdays, Sundays and Special Holidays).
            </Typography>

            <br></br>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h3" gutterBottom sx={{ pl: 1 }}>
                    Services:
                </Typography>
                {user.isAdmin && (
                <IconButton aria-label="delete" onClick={handleOpen2}>
                    <AddIcon />
                </IconButton>
                )}
            </Box>

            <Modal
              closeAfterTransition
              open={open2} 
              onClose={handleClose2}
            >
              <Fade in={open2}>
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
                    onClick={handleClose2}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                  <Stack spacing={1} justifyContent="flex-end">
                  <TextField id="outlined-basic" label="Service" variant="outlined" 
                  onChange={(event) => {setNewService(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Description" variant="outlined"
                  onChange={(event) => {setNewDescription(event.target.value)
                  }}/>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      createUser1();
                      handleClose2();
                    }}
                  ><Typography p={1}>Create Service</Typography></Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>
            
            <Table>
                <TableBody>
                    {clinicServices.map((clinicServices) => (
                    <TableRow key={clinicServices.id}>
                        <TableCell>{clinicServices.Service}</TableCell>
                        <TableCell>{clinicServices.Description}</TableCell>
                        {user.isAdmin && (
                        <TableCell align="left">
                            <IconButton onClick={() => handleOpenEdit1(clinicServices)}><EditIcon/></IconButton>
                            <IconButton onClick={() => {deleteUser1(clinicServices.id)}}>
                            <DeleteIcon/>
                            </IconButton>

                            <Modal
                              closeAfterTransition
                              open={openEdit1} 
                              onClose={handleCloseEdit1}
                              >
                              <Fade in={openEdit1}>
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
                                onClick={handleCloseEdit1}
                                >
                                <CloseRoundedIcon />
                                </IconButton>
                                <Stack spacing={1} justifyContent="flex-end">
                                <TextField id="outlined-basic" label="Service" variant="outlined" value={updatedService}
                                onChange={(event) => {setUpdatedService(event.target.value)
                                }}/>
                                <TextField id="outlined-basic" label="Field" variant="outlined" value={UpdatedDescription}
                                onChange={(event) => {setUpdatedDescription(event.target.value)
                                }}/>
                                <Button 
                                  variant="outlined" 
                                  onClick={() => {
                                  updateUser1(clinicServices.id);
                                  handleCloseEdit1();
                                  }}
                                ><Typography p={1}>Update Service</Typography></Button>
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
                    <TableRow key={clinicStaff.id}>
                        <TableCell>{clinicStaff.Name}</TableCell>
                        <TableCell>{clinicStaff.Specialization}</TableCell>
                        {user.isAdmin && (
                        <TableCell align="left">
                            <IconButton onClick={() => handleOpenEdit(clinicStaff)}><EditIcon/></IconButton>
                            <IconButton onClick={() => {deleteUser(clinicStaff.id)}}>
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
                                <TextField id="outlined-basic" label="Specialization" variant="outlined" value={updatedSpecialization}
                                onChange={(event) => {setUpdatedSpecialization(event.target.value)
                                }}/>
                                <Button 
                                  variant="outlined" 
                                  onClick={() => {
                                  updateUser(clinicStaff.id);
                                  handleCloseEdit();
                                  }}
                                ><Typography p={1}>Update Staff</Typography></Button>
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

            
          <Box mt="2rem" display="flex" justifyContent="center">
            <Button onClick={handleOpen1} sx={{ width: '20rem' }} variant="contained">
            <Typography variant="subtitle1" style={{ fontSize: '1.2rem' }}>Schedule a consultation</Typography>
            </Button>
            </Box>
            <Box mt="1.5rem" mb="1.5rem">
            
            <Modal
              closeAfterTransition
              open={open1} 
              onClose={handleClose1}
              >
              <Fade in={open1}>
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
                    onClick={handleClose1}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                  <Stack
                    spacing={1}
                    justifyContent={isNonMobileScreens ? 'flex-end' : 'center'}
                    sx={{
                      '& > *': {
                        width: isNonMobileScreens ? '750px' : '100%', // set iframe width based on screen size
                        maxWidth: '100%',
                      },
                    }}
                    >
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeWKkxNNOfQJSOOGH27MVzBLM5XN0G2hKAveQAle0W68A2RYQ/viewform?embedded=true"
                      height="750"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                      scrolling="yes"
                    >
                      Loading...
                    </iframe>
                  </Stack>                
                  </Box>
              </Fade>
              </Modal>
          </Box>
        </motion.Box>

        

    );
};

export default ClinicWidget;
