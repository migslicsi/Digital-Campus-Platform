import { Divider, useTheme, Box, Typography, IconButton,} from "@mui/material"
import * as React from 'react';
import LatestWidget from "./LatestWidget";
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';

const ServicesInfoHome = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;

  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const [chipData] = React.useState([
    { key: 0, label: 'React' },
    { key: 1, label: 'ExpressJS' },
    { key: 2, label: 'MongoDB' },
    { key: 3, label: 'Firebase' },
    { key: 4, label: 'NodeJS' },
    { key: 5, label: 'Framer Motion' },
    { key: 6, label: 'Material UI' },
    { key: 7, label: 'Adobe PS' },
    { key: 8, label: 'Restful API' },
    { key: 9, label: 'Toastify' },
  ]);
  
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
            align="center"
            >
            Welcome to the Services & Information Hub for Students!
            </Typography>
            <Divider />

            <Box maxWidth={500} mx="auto">
              <LatestWidget />
            </Box>
            <br /><br />
            <Typography variant="h4" align="center">CIIT++ was developed and designed by Angelo Licsi and Karlo Quiambao</Typography>
            <br />
            <Typography variant="h5" align="center">Languages/Technologies Used:</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                m: 0,
              }}
              component="ul"
              >
                
              {chipData.map((data) => {
                return (
                  <ListItem key={data.key}>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: data.key * 0.2, type: 'spring', stiffness: 100, damping: 15 }}
                  >
                    <Chip
                      label={data.label}
                      backgroundColor="palette.primary"
                      style={{ fontSize: "20px", padding: "36px" }}
                      sx={{ "&:hover": { backgroundColor: palette.primary.light, transform: "scale(1.1)", cursor: "pointer" } }}
                    />
                  </motion.div>
                </ListItem>
                );
              })}
            </Box>
         </Box>
    );
};

export default ServicesInfoHome;
