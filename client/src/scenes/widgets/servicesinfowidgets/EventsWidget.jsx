import { Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";

const EventsWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  
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
            School Events
            </Typography>
            <Divider />

            <Typography 
            pt="1rem"
            pl="1rem" 
            pb="0.5rem" 
            variant={isNonMobileScreens ? "body1" : "body2"}
            color={main}
            >Get info on the latest events around the campus.
            </Typography>

            <Box m={1} display="flex" sx={{ gap: '1rem' }} flexWrap="wrap">
            {/*event 1*/}
            <Card sx={{ maxWidth: 345, borderRadius: 3,  }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/japan.png"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h5" component="div">
                  Japan Foundation Day 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque lacinia urna non aliquet vestibulum.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

              {/*event 2*/}
              <Card sx={{ maxWidth: 345, borderRadius: 3  }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/sportsfest.png"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h5" component="div">
                  Japan Foundation Day 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque lacinia urna non aliquet vestibulum.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            {/*event 3*/}
            <Card sx={{ maxWidth: 345, borderRadius: 3  }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/pride.jpg"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h5" component="div">
                  Japan Foundation Day 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque lacinia urna non aliquet vestibulum.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            {/*event 4*/}
            <Card sx={{ maxWidth: 345, borderRadius: 3  }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/fair.jpg"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h5" component="div">
                  Japan Foundation Day 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque lacinia urna non aliquet vestibulum.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            {/*event 5*/}
            <Card sx={{ maxWidth: 345, borderRadius: 3  }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/alumni.jpg"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h5" component="div">
                  Japan Foundation Day 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque lacinia urna non aliquet vestibulum.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            {/*event 6*/}
            <Card sx={{ maxWidth: 345, borderRadius: 3  }}>
             <CardMedia
                padding="1rem"
                component="img"
                alt="green iguana"
                height="140"
                image="http://localhost:3001/assets/science.jpg"
             />
               <CardContent>
                <Typography color={dark} gutterBottom variant="h5" component="div">
                  Japan Foundation Day 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque lacinia urna non aliquet vestibulum.
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>


            </Box>
          </motion.Box>

    );
};

export default EventsWidget;
