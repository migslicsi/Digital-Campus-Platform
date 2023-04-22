import { Button, Divider, useTheme, Box, Typography, useMediaQuery, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
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

const ITWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const [ithelp, setithelp] = useState([]);
  const ithelpCollectionRef = collection(db, "ithelp")
  const [newquestion, setNewQuestion] = useState("");
  const [newanswer, setNewAnswer] = useState("");
  const [open, setOpen] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);

	//updated states
	const [selectedItHelp, setselectedItHelp] = useState(null);
	const [updatedquestion, setUpdatedquestion] = useState("");
	const [updatedanswer, setUpdatedanswer] = useState("");

	const handleOpenEdit = (selectedItHelp) => {
		setselectedItHelp(selectedItHelp);
		setUpdatedquestion(selectedItHelp.question);
		setUpdatedanswer(selectedItHelp.answer);
		setOpenEdit(true);
	  };

	const handleCloseEdit = () => {
	setOpenEdit(false);
	};

	const updateUser = async () => {
		const userDoc = doc(db, "ithelp", selectedItHelp.id);
		await updateDoc(userDoc, {
		  question: updatedquestion, answer: updatedanswer
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
    const userDoc = doc(db, "ithelp", id);
    await deleteDoc(userDoc);
    toast.success('FAQ deleted!', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(ithelpCollectionRef, (snapshot) => {
      setithelp(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  }, []);

  const createUser = async () => {
    await addDoc(ithelpCollectionRef, { question: newquestion, answer: newanswer});
    toast.success('FAQ created!', {
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
            IT Help
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Get technical support and troubleshooting assistance for your IT needs.
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
                  <TextField id="outlined-basic" label="Question" variant="outlined" 
                  onChange={(event) => {setNewQuestion(event.target.value)
                  }}/>
                  <TextField id="outlined-basic" label="Answer" variant="outlined"
                  onChange={(event) => {setNewAnswer(event.target.value)
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

            <Stack m={1} gap={2}>
            {ithelp.map((ithelp) => (
            <Accordion key={ithelp.id} style={{ backgroundColor: 'transparent', border: '1px solid #ccc'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                  {ithelp.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">
                  {ithelp.answer}
                </Typography>
                {user.isAdmin && (
                <Stack direction="row" justifyContent="flex-end">
                  <IconButton onClick={() => handleOpenEdit(ithelp)}><EditIcon/></IconButton>
                    <IconButton onClick={() => {deleteUser(ithelp.id)}}>
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
                        <TextField id="outlined-basic" label="Question" variant="outlined" value={updatedquestion}
                        onChange={(event) => {setUpdatedquestion(event.target.value)
                        }}/>
                        <TextField id="outlined-basic" label="Answer" variant="outlined" value={updatedanswer}
                        onChange={(event) => {setUpdatedanswer(event.target.value)
                        }}/>
                        <Button 
                          variant="outlined" 
                          onClick={() => {
                          updateUser(ithelp.id);
                          handleCloseEdit();
                          }}
                        ><Typography p={1}>Update FAQ</Typography></Button>
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
          </motion.Box>

    );
};

export default ITWidget;
