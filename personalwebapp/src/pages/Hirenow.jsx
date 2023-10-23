import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Contactpage from "../components/Contactpage"

const theme = createTheme({
  direction: 'rtl',
  // other theme properties
});
const Hirenow = () => {
  
  return (
    <>
    <ThemeProvider theme={theme}> 
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:"10%",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Hire me
        </Typography>
        <Typography variant="h4" gutterBottom>
          I think people hire me because I am good at what I love to do.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          My work speaks for the goals of my clients; its crafted carefully,
          studied through the gamut of human psychology, and created to stand
          the test of time. My role is to listen and trust, research and
          explore, create and design, present and deliver, and to cater to your
          needs.{" "}
        </Typography>
        <Typography variant="subtitle2">
          Design is not just my passion, its a big part of my lifestyle. Yeah, I
          know its a cliché. Here, fill out the questionnaire below or read
          client feedbacks while I think of something less douchéy.
        </Typography>
        <Typography variant="h3">
          I am currently accepting new freelance design projects.
        </Typography>
        <Contactpage/>
      </Box>
      </ThemeProvider>
    </>
  );
};

export default Hirenow;
