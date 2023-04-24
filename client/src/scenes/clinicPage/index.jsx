import { Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import ClinicWidget from "scenes/widgets/servicesinfowidgets/ClinicWidget";
import * as React from 'react';
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
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StadiumOutlinedIcon from '@mui/icons-material/StadiumOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { useState } from "react";
import ServicesInfoHome from "scenes/widgets/ServicesInfoHome";
import {motion} from "framer-motion"

/* import of widgets */
import EventsWidget from "scenes/widgets/servicesinfowidgets/EventsWidget";
import AnnoucementsWidget from "scenes/widgets/servicesinfowidgets/AnnouncementsWidget";
import CalendarWidget from "scenes/widgets/servicesinfowidgets/CalendarWidget";    
import ContactFacultyWidget from "scenes/widgets/servicesinfowidgets/ContactFacultyWidget";
import FinancialAidWidget from "scenes/widgets/servicesinfowidgets/FinancialAidWidget";
import InternshipsWidget from "scenes/widgets/servicesinfowidgets/InternshipsWidget";
import ITWidget from "scenes/widgets/servicesinfowidgets/ITWidget";
import LibraryWidget from "scenes/widgets/servicesinfowidgets/LibraryWidget";
import RegistrarWidget from "scenes/widgets/servicesinfowidgets/RegistrarWidget";
import ScholarshipsWidget from "scenes/widgets/servicesinfowidgets/ScholarshipsWidget";
import HandbookWidget from "scenes/widgets/servicesinfowidgets/HandbookWidget";            

const ClinicPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const neutralLight = palette.background.alt;
  const navigate = useNavigate();
  const [currentWidget, setCurrentWidget] = useState('Home');
  const [activeButton, setActiveButton] = useState(null);


  const handleWidgetSelection = (widget) => {
    setCurrentWidget(widget);
    setActiveButton(widget);
  };

  return (
    
    <motion.Box
    initial={{opacity: 0}}
    animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
    exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <Navbar />
      <Box
        mt="70px"
        width="100%"
        padding="0rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        sx={{
          "@media(max-width: 1000px)": {
            marginTop:"100px",
          },
          }}
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
                    selected={activeButton === 'Clinic'}
                    onClick={() => handleWidgetSelection('Clinic')}>
                    <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
                    <Typography color={dark}>School Clinic</Typography>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton
                    selected={activeButton === 'Registrar'}
                    onClick={() => handleWidgetSelection('Registrar')}
                    >  
                    <ListItemIcon><AddToQueueIcon /></ListItemIcon>
                      <Typography color={dark}>Registrar</Typography>
                    </ListItemButton>
                  </ListItem>
                  
                  <ListItem disablePadding>
                    <ListItemButton
                    selected={activeButton === 'Library'}
                    onClick={() => handleWidgetSelection('Library')}
                    >
                    <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                      <Typography color={dark}>Library</Typography>
                    </ListItemButton>
                  </ListItem> 

                  <ListItem disablePadding>
                    <ListItemButton
                    selected={activeButton === 'Financial'}
                    onClick={() => handleWidgetSelection('Financial')}
                    >
                    <ListItemIcon><SavingsOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Financial Aid</Typography>
                    </ListItemButton>
                  </ListItem>   

                  <ListItem disablePadding>
                    <ListItemButton
                    selected={activeButton === 'Scholarships'}
                    onClick={() => handleWidgetSelection('Scholarships')}
                    >
                    <ListItemIcon><SchoolOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Scholarships</Typography>
                    </ListItemButton>
                  </ListItem>   

                  <ListItem disablePadding>
                    <ListItemButton
                    selected={activeButton === 'IT'}
                    onClick={() => handleWidgetSelection('IT')}
                    >
                    <ListItemIcon><DevicesOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>IT Help</Typography>
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
                    selected={activeButton === 'Events'}
                    >
                     <ListItemIcon><StadiumOutlinedIcon /></ListItemIcon>
                     <Typography color={dark}>School Events</Typography>
                    </ListItemButton>
                  </ListItem>
    
                  <ListItem disablePadding>
                    <ListItemButton
                    selected={activeButton === 'Calendar'}
                    onClick={() => handleWidgetSelection('Calendar')}
                    >
                     <ListItemIcon><CalendarTodayOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Academic Calendar</Typography>
                    </ListItemButton>
                  </ListItem>
    
                  <ListItem disablePadding>
                    <ListItemButton
                    selected={activeButton === 'Annoucements'}
                    onClick={() => handleWidgetSelection('Annoucements')}
                    >
                     <ListItemIcon><CampaignOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Announcements</Typography>
                    </ListItemButton>
                  </ListItem>
                  
                  <ListItem disablePadding>
                    <ListItemButton
                    selected={activeButton === 'Handbook'}
                    onClick={() => handleWidgetSelection('Handbook')}
                    >
                     <ListItemIcon><BookOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Handbook</Typography>
                    </ListItemButton>
                  </ListItem> 
  
                  <ListItem disablePadding>
                    <ListItemButton
                    selected={activeButton === 'Faculty'}
                    onClick={() => handleWidgetSelection('Faculty')}
                    >
                     <ListItemIcon><FolderSharedOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>School Directory</Typography>
                    </ListItemButton>
                  </ListItem>    
                  
                  <ListItem disablePadding>
                    <ListItemButton
                    selected={activeButton === 'Internships'}
                    onClick={() => handleWidgetSelection('Internships')}
                    >
                     <ListItemIcon><WorkOutlineOutlinedIcon /></ListItemIcon>
                      <Typography color={dark}>Internships</Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
             </nav>
            </Box>
         </FlexBetween>
        </WidgetWrapper>
        </Box>
        
          
          <Box 
            mt="25px"
            flexBasis="70%"
            borderRadius="10px"
            padding="1rem"
            backgroundColor={neutralLight}
          >
            {currentWidget === 'Home' && <ServicesInfoHome />}
            {currentWidget === 'Clinic' && <ClinicWidget />}
            {currentWidget === 'Events' && <EventsWidget />}
            {currentWidget === 'Internships' && <InternshipsWidget />}
            {currentWidget === 'Faculty' && <ContactFacultyWidget />}
            {currentWidget === 'Annoucements' && <AnnoucementsWidget />}
            {currentWidget === 'Calendar' && <CalendarWidget />}
            {currentWidget === 'IT' && <ITWidget />}
            {currentWidget === 'Scholarships' && <ScholarshipsWidget />}
            {currentWidget === 'Financial' && <FinancialAidWidget />}
            {currentWidget === 'Library' && <LibraryWidget />}
            {currentWidget === 'Registrar' && <RegistrarWidget />}
            {currentWidget === 'Handbook' && <HandbookWidget />}
          </Box>
      </Box>
    </motion.Box>
  );
};

export default ClinicPage;
