import { Grid, Divider, useTheme, Box, Typography, useMediaQuery,} from "@mui/material"
import * as React from 'react';
import LatestWidget from "./LatestWidget";

const ServicesInfoHome = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const neutralLight = palette.background.default;
  
  return (
        <Box 
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
            Welcome to the Services & Information Hub for Students!
            </Typography>
            <Divider />

            <Box maxWidth={500} mx="auto">
              <LatestWidget />
            </Box>
            <br /><br />
            <Typography variant="h3" align="center">CIIT++ was developed and designed by Angelo Licsi and Karlo Quiambao</Typography>
         </Box>
    );
};

export default ServicesInfoHome;
