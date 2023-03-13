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
import PsychologyIcon from '@mui/icons-material/Psychology';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';

const ServicesWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const navigate = useNavigate();

    return (
    <WidgetWrapper marginTop="1.5rem">
     <FlexBetween>
        <Box sx={{ width: '100%'}}>
         <nav aria-label="main menu">
            <Typography 
            sx={{fontWeight: 'bold'}} 
            mb="0.5rem"fontSize="large" 
            color={main}>
            School Services
            </Typography>
            <Divider/>
            <List onClick={() => navigate("/services-information-page")}>
             
             <ListItem disablePadding>
                <ListItemButton>
                 <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
                 <Typography color={dark}>School Clinic</Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                >
                 <ListItemIcon><PsychologyIcon /></ListItemIcon>
                  <Typography color={dark}>Councelling</Typography>
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
                 <ListItemIcon><HomeWorkOutlinedIcon /></ListItemIcon>
                  <Typography color={dark}>Housing</Typography>
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

              <ListItem disablePadding>
                <ListItemButton>
                 <ListItemIcon><DirectionsBusOutlinedIcon /></ListItemIcon>
                  <Typography color={dark}>Transportation Help</Typography>
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