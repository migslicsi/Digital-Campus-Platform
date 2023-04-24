import { IconButton, Stack, Divider, useTheme, Box, Typography, useMediaQuery, Card, CardContent, CardMedia } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import WidgetWrapper from "components/WidgetWrapper";

const LatestWidget = () => {
  const { palette } = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const theme = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <WidgetWrapper>
        <Typography color={dark} variant="h5" fontWeight="500" sx={{ textAlign: "center" }} >
          Help us finish our thesis! Answer the survey.
        </Typography>
      
      <Box display="flex" justifyContent="center">
      <img
        width="60%"
        height="auto"
        alt="advert"
        src={
          theme.palette.mode === "dark"
            ? "https://ciit-plusplus-backend.onrender.com/assets/cicon-clean-USD.png"
            : "https://ciit-plusplus-backend.onrender.com/assets/cicon-cleanb-US.png"
        }
        style={{
          borderRadius: "0.75rem",
          margin: "0.75rem 0",
          cursor: "pointer",
        }}
        onClick={handleModalOpen}
      />
      </Box>

    <Modal closeAfterTransition open={isModalOpen} onClose={handleModalClose}>
      <Fade in={isModalOpen}>
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
            onClick={handleModalClose}
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
              src="https://docs.google.com/forms/d/e/1FAIpQLSdMJYLaG6WketWs0B2dTGIHOmDCa3HMvmaXVR9suw_jZZtT8w/viewform?embedded=true"
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
    </WidgetWrapper>
  );
};

export default LatestWidget;
