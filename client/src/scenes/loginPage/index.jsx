import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form.jsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])

  return (
    <motion.div>
    {
      loading ?
      <Box
        sx={{
          position: "center center",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            opacity: loading ? 1 : 0, // Set opacity based on loading state
            transition: `opacity 1s ease-out ${loading ? "" : "1s"}`, // Add transition animation with 1s delay when loader is finished
          }}
        >
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <img
              alt="logo"
              src={
                theme.palette.mode === "dark"
                ? "https://ciit-plusplus-backend.onrender.com/assets/cicon-clean-USD2.png"
                : "https://ciit-plusplus-backend.onrender.com/assets/cicon-cleanb.png"
              }
              style={{ width: "300px", height: "auto", marginBottom: "250px" }}
            />
          </Box>
          <CircleLoader color={"#00D5FA"} loading={loading} size={60} />
        </Box>
      </Box>
      :
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      >
      <Box
        sx={{
          backgroundImage: "url(https://ciit-plusplus-backend.onrender.com/assets/bg3-4.webp)",
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(10px) opacity(0.8)",
          // Add media queries here
          "@media(max-width: 1000px)": {
            backgroundImage: "url(https://ciit-plusplus-backend.onrender.com/assets/bgfc.png)",
            backgroundPosition: "center center",
          },
          "@media(max-width: 600px)": {
            backgroundImage: "url(https://ciit-plusplus-backend.onrender.com/assets/bgfc.png)",
            backgroundPosition: "center center",
          },
        }}
      >
      <Box
       width="25%"
       display="absolute"
       p="2rem"
       borderRadius="1.5rem"
       borderStyle="solid"
       backgroundColor={theme.palette.background.alt}
       border="2px solid rgba(0,213,253,255)"
       sx={{
       backdropFilter: "none",
       mr: "10%",
       ml: "auto",
       boxShadow: "none",
       "@media(max-width: 1000px)": {
       width: "80%",
       mr: "auto",
       },
       "@media(max-width: 600px)": {
       width: "80%",
       mr: "auto",
       },
       }}
        >
          <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="2rem"
        >
           <img
            src={
              theme.palette.mode === "dark"
              ? "https://ciit-plusplus-backend.onrender.com/assets/cicon-clean-USD2.png"
              : "https://ciit-plusplus-backend.onrender.com/assets/cicon-cleanb.png"
            }
            alt="Your Logo"
            style={{ maxWidth: "50%", maxHeight: "50%" }}
          />
        </Box>

        <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem" }}
          color= " rgba(0,213,253,255)"
        >
          <center>Let's Get Started!</center>
        </Typography>
        <Form />
      </Box>
    </Box>
    </motion.div>
    }
    
    </motion.div>
  );
};

export default LoginPage;