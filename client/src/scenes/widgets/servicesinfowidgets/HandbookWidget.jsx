import { Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';



const HandbookWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:620px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const defaultScale = isNonMobileScreens ? 1.25 : 0.8;

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
            Handbook
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Learn about our school policies, procedures, and guidelines through our comprehensive handbook.
            </Typography>

            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">
              <Box sx={{ 
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  height: '700px',
                  width: '100%',
                  overflow: 'scroll',
              }}>
                <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.worker.min.js">
                  <Viewer fileUrl="http://localhost:3001/assets/handbook.pdf" defaultScale={defaultScale} />
                </Worker>
              </Box>
            </Box>

          </motion.Box>

    );
};

export default HandbookWidget;
