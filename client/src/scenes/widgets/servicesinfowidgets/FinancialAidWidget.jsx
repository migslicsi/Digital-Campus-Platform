import { Button, Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

const FinancialAidWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const neutralLight = palette.background.default;
  const [financialaid, setfinancialaid] = useState([]);
  const financialaidCollectionRef = collection(db, "financialaid")
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [open, setOpen] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);

	//updated states
	const [selectedFinancialAid, setselectedFinancialAid] = useState(null);
	const [updatedTitle, setUpdatedTitle] = useState("");
	const [updatedDescription, setUpdatedDescription] = useState("");

	const handleOpenEdit = (selectedFinancialAid) => {
		setselectedFinancialAid(selectedFinancialAid);
		setUpdatedTitle(selectedFinancialAid.Title);
		setUpdatedDescription(selectedFinancialAid.Description);
		setOpenEdit(true);
	  };

	const handleCloseEdit = () => {
	setOpenEdit(false);
	};

	const updateUser = async () => {
		const userDoc = doc(db, "financialaid", selectedFinancialAid.id);
		await updateDoc(userDoc, {
		  Title: updatedTitle, Description: updatedDescription
		});
		toast.success('FAQ updated!', {
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
    const userDoc = doc(db, "financialaid", id);
    await deleteDoc(userDoc);
    toast.success('Entry deleted', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(financialaidCollectionRef, (snapshot) => {
      setfinancialaid(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  }, []);

  const createUser = async () => {
    await addDoc(financialaidCollectionRef, { Title: newTitle, Description: newDescription});
    toast.success('Entry created!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  
  const user = useSelector((state) => state.user);
  
  return (
        <Box 
          flexBasis="70%"
          borderRadius="10px"
        >
        <motion.Box 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
            <Typography 
            pt="1rem" 
            pl="1rem" 
            pb="0.5rem"
            variant="h2"
            color={dark}
            >
            Financial Aid
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Explore our financial aid options and resources to help fund your education.
            </Typography>
            
            <img src="http://localhost:3001/assets/ciitbg.jpg" alt="clinic" style={{ width: '100%', height: '38%'}} />

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto', 
              paddingLeft: isNonMobileScreens ? '4rem' :'2rem', 
              paddingRight: isNonMobileScreens ?'4rem': '0rem', 
              paddingTop:'0.5rem', 
              paddingBottom: isNonMobileScreens ? '2rem': '0.5rem' 
              }}>
              <div style={{ flex: 1 }}>
                <Box
                  sx={{ height: '80%', width: '80%' }}
                >
                  <Typography
                    variant={isNonMobileScreens ? "h4" : "h5"}
                    style={{ textDecoration: "underline" }}
                  >
                    What are the requirements to apply for a Bukas tuition installment plan at CIIT College of Arts and Technology?
                  </Typography>
                  <Typography mt="0.5rem" variant="h6" component="p">
                    To apply for an installment plan, you must fit the following criteria:
                    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                      <li style={{ display: "flex", alignItems: "center" }}>
                        <CheckCircleOutlineIcon style={{ marginRight: "8px" }} />
                        You must be a Filipino citizen at least 18 years old.
                      </li>
                      <li style={{ display: "flex", alignItems: "center" }}>
                        <CheckCircleOutlineIcon style={{ marginRight: "8px" }} />
                        You must be enrolled at CIIT College of Arts and Technology.
                      </li>
                      <li style={{ display: "flex", alignItems: "center" }}>
                        <CheckCircleOutlineIcon style={{ marginRight: "8px" }} />
                        You must be in college or graduate school.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </div>
              <div style={{ flex: 1, display: isNonMobileScreens ? 'flex' : 'none', justifyContent: 'center' }}>
                <motion.div
                  whileHover={{ scale: 0.8, transition: { duration: 0.2 }  }}
                  style={{ width: '80%', height: '80%' }}
                >
                  <img src="http://localhost:3001/assets/Req1.png" alt="clinic" style={{ width: '100%', height: '100%' }} />
                </motion.div>
              </div>
            </div>

            <Box mt="2rem">
            <Typography variant="h6" style={{ color: "white", backgroundColor: "black", width: "100%", textAlign: "center", fontWeight: "bold" }}>
            Bukas Quick Guide
            </Typography>
            </Box>
            
            
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
                  <TextField id="outlined-basic" label="Title" variant="outlined" 
                  onChange={(event) => {setNewTitle(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Description" variant="outlined"
                  onChange={(event) => {setNewDescription(event.target.value)
                  }}/>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      createUser();
                      handleClose();
                    }}
                  ><Typography p={1}>Create FAQ</Typography></Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>

            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">

            <Typography
             variant={isNonMobileScreens ? "h4" : "h5"}
             style={{ fontWeight: "bold" }}
            >Before you get started, make sure you’ve prepared all the necessary requirements.</Typography>
            
            <Stack m={1} gap={2}>
            {financialaid.map((financialaid) => (
            <Accordion key={financialaid.id} style={{ backgroundColor: 'transparent', border: '1px solid #ccc'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                  {financialaid.Title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">
                  {financialaid.Description}
                </Typography>
                {user.isAdmin && (
                <Stack direction="row" justifyContent="flex-end">
                    <IconButton onClick={() => handleOpenEdit(financialaid)}><EditIcon/></IconButton>
                    <IconButton onClick={() => {deleteUser(financialaid.id)}}>
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
                        <TextField id="outlined-basic" label="Title" variant="outlined" value={updatedTitle}
                        onChange={(event) => {setUpdatedTitle(event.target.value)
                        }}/>
                        <TextField id="outlined-basic" label="Description" variant="outlined" value={updatedDescription}
                        onChange={(event) => {setUpdatedDescription(event.target.value)
                        }}/>
                        <Button 
                          variant="outlined" 
                          onClick={() => {
                          updateUser(financialaid.id);
                          handleCloseEdit();
                          }}
                        ><Typography p={1}>Update Entry</Typography></Button>
                        </Stack>
                        </Box>
                      </Fade>
                      </Modal>

                </Stack>
                )}
              </AccordionDetails>
            </Accordion>
            ))}
            </Stack>

            
          </Box>
          </motion.Box>
          </Box>

    );
};

export default FinancialAidWidget;
