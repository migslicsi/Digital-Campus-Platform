import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form.jsx";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(px) opacity(0.8)", // Add backdrop-filter property here
      }}
    >
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        borderRadius="1.5rem"
        bgcolor="rgba(255, 255, 255, 255)" // Change the background color to transparent with some opacity
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color={theme.palette.primary.main}
          mb="1.5rem"
          textAlign="center"
        >
          CIIT++
        </Typography>
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem" }}
          color={theme.palette.text.primary}
        >
          Welcome to CIIT++, The Exclusive Online Campus Platform for CIIT Students!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
