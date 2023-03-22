import { Button, Divider, useTheme, Box, Typography, useMediaQuery, Grid } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { motion } from "framer-motion";

const ClinicWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [yrlvl, setyrlvl] = React.useState('');

  const handleChange = (event) => {
    setyrlvl(event.target.value);
  };


  
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
            School Clinic
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Schedule a meeting with the school clinic for your medical needs.
            </Typography>

            <Grid container spacing={0} mb="1rem" ml="0.5rem" pr="1rem">
            <Grid item xs={12} sm={6}>
                <img src="http://localhost:3001/assets/clinic.png" alt="clinic" style={{ width: '100%', height: '100%'}} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src="http://localhost:3001/assets/clinic2.jpg" alt="clinic" style={{ width: '100%', height: '100%'}} />
            </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
                The SCHOOL CLINIC is responsible for safe-guarding the health of the scholars and school personnel in campus.
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ pl: 1 }}>
                The clinic is open from 8:00 A.M. to 12:00 P.M. and 1:00 P.M. to 5:00 P.M. (Mondays to Fridays except Saturdays, Sundays and Special Holidays).
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ pl: 1 }}>
                SERVICES:
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ pl: 1 }}>
                <ol>
                <li>CONSULTATION – medical / dental</li>
                <li>EMERGENCY &amp; FIRST AID MANAGEMENT - includes administration of over-the-counter medications, debridement/dressing of wounds, hot/cold compress, immobilization thru application of splints/elastic bandage and the like.</li>
                <li>CLINIC CONFINEMENT - the school nurse may recommend immediate confinement after evaluation and ascertaining the severity of the illness. Clinic confinement is limited to 2-3 hours only. The nurse will provide clinic certification after clinic confinement and to be countersigned by the class adviser before the scholar is admitted back to his/her classroom.</li>
                <li>MONITORING &amp; INSPECTION - Prevention of illness and safety measures. Scholars Grooming and Neatness. School Canteen menu and sanitation.</li>
                <li>REFERRAL - In case of persistent symptoms or illness, the school nurse informs the parents/guardians and class adviser of the scholars immediately. Scholars will then be referred and brought to the nearest medical clinic or medical facility for further evaluation and management. If confinement is necessary, parents/guardians are advised to proceed immediately to the said medical facility.</li>
                </ol>
            </Typography>
            
            <Box
             sx={{ border: "1px solid grey", borderRadius: "10px", p: "1rem" }}>
            <Typography 
            pt="1rem" 
            pl="1rem" 
            pb="0.5rem"
            variant="h2"
            color={dark}
            align="center"
            >
            Schedule A Clinic Appointment
            </Typography>
            <Box
            mt="2rem"
            display="grid"
            gap="2rem"
            gridTemplateColumns={isNonMobile ? "repeat(4, 1fr)" : "repeat(1, 1fr)"}
            alignItems="center"
            >
            <Typography variant="h4" color={dark}>
                Full Name:
            </Typography>
            <TextField label="" variant="outlined" />

            <Typography variant="h4" color={dark}>
                Student Number
            </Typography>
            <TextField label="" variant="outlined" />

            <Typography variant="h4" color={dark}>
                Year Level
            </Typography>
            <FormControl sx={{ minWidth: 120 }} size="medium">
                <InputLabel id="demo-select-small"></InputLabel>
                <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={yrlvl}
                label=""
                onChange={handleChange}
                >
                <MenuItem value={10}>1st Year</MenuItem>
                <MenuItem value={20}>2nd Year</MenuItem>
                <MenuItem value={30}>3rd Year </MenuItem>
                <MenuItem value={40}>4th Year </MenuItem>
                </Select>
            </FormControl>

            <Typography variant="h4" color={dark}>
                Preferred Date:
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                <DatePicker
                    inputFormat="MM/dd/yyyy"
                    style={{ width: "8rem", fontSize: "1rem" }}
                    renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                    )}
                />
                </DemoContainer>
            </LocalizationProvider>
         </Box>

        <Box mt="2rem" display="flex" justifyContent="center">
        <Button sx={{ width: '20rem' }} variant="contained">
        <Typography variant="subtitle1" style={{ fontSize: '1.2rem' }}>Submit</Typography>
        </Button>
        </Box>
        <Box mt="1.5rem" mb="1.5rem">
        </Box>
        </Box>
        </motion.Box>

    );
};

export default ClinicWidget;
