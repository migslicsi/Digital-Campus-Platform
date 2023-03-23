import { Divider, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
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
import { useNavigate } from "react-router-dom";


const InformationWidget = () => {
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
                School Information
                </Typography>
                <Divider/>
                <List onClick={() => navigate("/services-information-page")}>
                 
                 <ListItem disablePadding>
                    <ListItemButton>
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
        )
    }
    
    export default InformationWidget;
