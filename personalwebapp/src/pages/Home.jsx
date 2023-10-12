import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ComputerIcon from "@mui/icons-material/Computer";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const image={
  backgroundImage:'url("https://cdn.pixabay.com/photo/2014/06/24/17/38/smoke-376543_640.jpg")',
  backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item style={image}
            sx={{
              backgroundColor: "#0F0F0F",
              height: "100vh",
              color: "white",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
            
            }}
          >
            <h1>LOOKING FOR A WEB DEVELOPER?</h1>
            <p>
              i M A Web Develper & Programmer Living in Bilaspur,Himachal
              Pardesh.i make Web Application usaually with mern stack{" "}
            </p>
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item sx={{
          backgroundColor:"black",color:"white",
          }}>
            {" "}
            <img
              src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=sph"
              alt="error"
              width="300px"
            />{" "}
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item sx={{
          backgroundColor:"black",color:"white",
          }}>
            <Typography variant="body2" gutterBottom>
            <WavingHandIcon /> Hi there! I m Nitin verma, a passionate MERN
            stack developer with a love for crafting robust web applications.
            With a keen eye for design and a knack for turning ideas into
            functional software, I bring dreams to life in the digital world.
            <TipsAndUpdatesIcon />
            My journey in the world of web development started 2 years ago, and
            since then, I ve been on a continuous quest for knowledge and
            innovation.
            <ComputerIcon />
            Whether its building interactive front-end experiences using React,
            creating scalable back-end solutions with Node.js and Express, or
            seamlessly connecting it all with MongoDB, I thrive on the
            full-stack challenges that MERN presents When Im not coding, you can
            find me exploring the latest tech trends, enjoying a cup of coffee,
            or collaborating with fellow developers to solve complex problems.{" "}
            <SelfImprovementIcon />
            Lets connect and discuss how we can make the web a more exciting and
            functional place together! Feel free to reach out for collaborations
            or to chat about all things MERN.
            <ContactMailIcon />
            </Typography>
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item sx={{
          backgroundColor:"black",color:"white",
          }} >
            <Button>Learn more</Button>
            <Button>Contact me</Button>
            <Button>Na! not intrested good by</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
