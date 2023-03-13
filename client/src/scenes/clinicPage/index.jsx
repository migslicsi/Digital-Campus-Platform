import { Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import ClinicWidget from "scenes/widgets/ClinicWidget";
import * as React from 'react';
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
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StadiumOutlinedIcon from '@mui/icons-material/StadiumOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import { useState } from "react";
import EventsWidget from "scenes/widgets/EventsWidget";
import ServicesInfoHome from "scenes/widgets/ServicesInfoHome";

const ClinicPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const navigate = useNavigate();
  const [currentWidget, setCurrentWidget] = useState('Home');

  const handleWidgetSelection = (widget) => {
    setCurrentWidget(widget);
  };


  return (
    
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="0rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
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
                <List>
                
                <ListItem disablePadding>
                    <ListItemButton
                    onClick={() => handleWidgetSelection('Clinic')}
                    >
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

          <WidgetWrapper marginTop="1.5rem">
          <FlexBetween>
            <Box sx={{ width: '100%'}}>
             <nav aria-label="main menu">
                <Typography 
                sx={{fontWeight: 'bold'}} 
                mb="0.5rem"fontSize="large" 
                color={main}>
                School Information
                </Typography>
                <Divider/>
                <List>
                 
                 <ListItem disablePadding>
                    <ListItemButton
                    onClick={() => handleWidgetSelection('Events')}
                    >
                     <ListItemIcon><StadiumOutlinedIcon /></ListItemIcon>
                     <Typography color={dark}>School Events</Typography>
                    </ListItemButton>
                  </ListItem>
    
                  <ListItem disablePadding>
                    <ListItemButton>
                     <ListItemIcon><CalendarTodayOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Academic Calendar</Typography>
                    </ListItemButton>
                  </ListItem>
    
                  <ListItem disablePadding>
                    <ListItemButton>
                     <ListItemIcon><CampaignOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Annoucements</Typography>
                    </ListItemButton>
                  </ListItem>
                  
                  <ListItem disablePadding>
                    <ListItemButton>
                     <ListItemIcon><BookOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Handbook</Typography>
                    </ListItemButton>
                  </ListItem> 
    
                  <ListItem disablePadding>
                    <ListItemButton>
                     <ListItemIcon><HistoryEduOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Admission/Enrollment Hub</Typography>
                    </ListItemButton>
                  </ListItem>   
    
                  <ListItem disablePadding>
                    <ListItemButton>
                     <ListItemIcon><Diversity1OutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Student Organizations</Typography>
                    </ListItemButton>
                  </ListItem> 
    
                  <ListItem disablePadding>
                    <ListItemButton>
                     <ListItemIcon><FolderSharedOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Contact Faculty</Typography>
                    </ListItemButton>
                  </ListItem>   
    
                  <ListItem disablePadding>
                    <ListItemButton>
                     <ListItemIcon><StoreMallDirectoryOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>School Directory</Typography>
                    </ListItemButton>
                  </ListItem>     
                  
                  <ListItem disablePadding>
                    <ListItemButton>
                     <ListItemIcon><WorkOutlineOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Internships</Typography>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                     <ListItemIcon><AssuredWorkloadOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Alumni Hub</Typography>
                    </ListItemButton>
                  </ListItem>
    
                </List>
             </nav>
            </Box>
         </FlexBetween>
        </WidgetWrapper>
        </Box>
        
          
          <Box 
            flexBasis="70%"
            borderRadius="10px"
            padding="1rem"
          >
            {currentWidget === 'Home' && <ServicesInfoHome />}
            {currentWidget === 'Clinic' && <ClinicWidget />}
            {currentWidget === 'Events' && <EventsWidget />}
          </Box>
        
      </Box>
    </Box>
  );
};

export default ClinicPage;
