import { Divider, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const ServicesWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const navigate = useNavigate();

    return (
    <WidgetWrapper marginTop="1.5rem">
     <FlexBetween>
        <Box sx={{ width: '100%', "&:hover": { cursor: "pointer" } }} onClick={() => navigate("/services-information-page")}>
         <nav aria-label="main menu">
            <Typography 
            sx={{fontWeight: 'bold'}} 
            mb="0.5rem"fontSize="large" 
            color={main}>
            School Services
            </Typography>
            <Divider/>
            <List>
             
             <ListItem disablePadding>
                <ListItemButton>
                 <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
                 <Typography color={dark}>School Clinic</Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                 <ListItemIcon><AddToQueueIcon /></ListItemIcon>
                  <Typography color={dark}>Registrar</Typography>
                </ListItemButton>
              </ListItem>
              
              <ListItem disablePadding>
                <ListItemButton>
                 <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                  <Typography color={dark}>Library</Typography>
                </ListItemButton>
              </ListItem> 

              <ListItem disablePadding>
                <ListItemButton>
                 <ListItemIcon><SavingsOutlinedIcon /></ListItemIcon>
                  <Typography color={dark}>Financial Aid</Typography>
                </ListItemButton>
              </ListItem>   

              <ListItem disablePadding>
                <ListItemButton>
                 <ListItemIcon><SchoolOutlinedIcon /></ListItemIcon>
                  <Typography color={dark}>Scholarships</Typography>
                </ListItemButton>
              </ListItem>   

              <ListItem disablePadding>
                <ListItemButton>
                 <ListItemIcon><DevicesOutlinedIcon /></ListItemIcon>
                  <Typography color={dark}>IT Help</Typography>
                </ListItemButton>
              </ListItem>       

            </List>
         </nav>
        </Box>
     </FlexBetween>
    </WidgetWrapper>
    )
}

export default ServicesWidget;