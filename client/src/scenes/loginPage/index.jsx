import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form.jsx";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
        sx={{
          backgroundImage: "url(http://localhost:3001/assets/bg3.png)",
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(10px) opacity(0.8)",
          // Add media queries here
          "@media(max-width: 600px)": {
            backgroundImage: "url(http://localhost:3001/assets/bg3-mobile.png)",
          },
        }}
      >
      <Box
       width={isNonMobileScreens ? "25%" : "93%"}
       display="absolute"
       p="2rem"
       borderRadius="1.5rem"
       borderStyle="solid" 
       bgcolor=" transparent" // Change the background color to transparent with some opacity
       border=" 2px solid rgba(0,213,253,255)"
       sx={{ 
        backdropFilter: "blur(10px)",
        mr: "10%",
        ml: "auto",
        }}
        >
          <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="2rem"
        >
           <img
            src="http://localhost:3001/assets/cicon2.png"
            alt="Your Logo"
            style={{ maxWidth: "50%", maxHeight: "50%" }}
          />
        </Box>

        <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem" }}
          color= " rgba(255, 255, 255, 255)"
        >
          <center>Let's get started!</center>
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;