import { Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import { motion } from "framer-motion";

const AnnoucementsWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  
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

            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">
            
            {/* your content here */}

            </Box>
          </motion.Box>

    );
};

export default AnnoucementsWidget;
