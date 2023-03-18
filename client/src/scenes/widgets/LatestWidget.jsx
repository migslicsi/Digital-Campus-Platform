import { Typography, useTheme, Divider } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const LatestWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          The Latest from the School:
        </Typography>
      
      {/* sticky post 1 */}
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
        <Typography sx={{fontWeight: 'bold'}} color={main}>Happy Women's Day!</Typography>
        <Typography color={medium}>March 17, 2023</Typography>
      <Typography color={medium} m="0.5rem 0">
       Today, we celebrate you our strong and independent Obebe girlies. We, Obelisk stands with every
       woman in the society as they continue to fight for gender equality, sexism, sexual harassment,
       and many other issues that they stand up for. 
      </Typography>
      <Divider m="1rem"/>

      {/* sticky post 2 */}
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/sticky1.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
        <Typography sx={{fontWeight: 'bold'}} color={main}>Bukas PH Webinar</Typography>
        <Typography color={medium}>March 5, 2023</Typography>
        <Typography color={medium} m="0.5rem 0">
         Our student loans partner, Bukas.ph , wishes to invite you to a learning session
         to get to know more about their affordable and flexible tuition payment
         methods through their Bukas Tuition Plan.
      </Typography>
      <Divider m="1rem"/>

      {/* sticky post 3 */}
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/sticky2.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
        <Typography sx={{fontWeight: 'bold'}} color={main}>School Annoucement</Typography>
        <Typography color={medium}>March 1, 2023</Typography>
        <Typography color={medium} m="0.5rem 0">
         Here is the scheduled face-to-face classes and onsite campus activities break 
         next week, from 𝗠𝗮𝗿𝗰𝗵 𝟲 𝘁𝗼 𝗠𝗮𝗿𝗰𝗵 𝟭𝟭, 𝟮𝟬𝟮𝟯. All classes will be shifted to the
         ODL set-up for the whole week during the above mentioned dates. Access to the
         campus will likewise be limited. Regular onsite classes and activities 
      </Typography>

    </WidgetWrapper>
  );
};

export default LatestWidget;
