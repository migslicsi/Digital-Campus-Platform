import { Divider, useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import ServicesWidget from "scenes/widgets/ServicesWidget";
import InformationWidget from "scenes/widgets/InformationWidget";

const InformationPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

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
          <ServicesWidget />
          <InformationWidget />
        </Box>
        
          </Box>
      </Box>
  );
};

export default InformationPage;
