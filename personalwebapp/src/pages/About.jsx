
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import  Buttons  from '../components/Buttons';

const About = () => {
  return (
    <Container sx={{marginBottom:"10%"}} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sx={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}} xs={12} sm={6}>
          <Avatar
            sx={{ width: 200, height: 200 }}
            alt="profile"
            src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&ga=GA1.1.654423603.1692776753&semt=ais"
          />
          <Buttons/>

        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1">About Me</Typography>
          <Typography variant="body1" color="#40128B">
            Hello there! Im Nitin Verma, a passionate and dedicated Full Stack Developer with a flair for crafting dynamic and user-centric web applications. With a strong foundation in the MERN (MongoDB, Express.js, React, Node.js) stack, I thrive on transforming ideas into functional and elegant digital experiences.
          </Typography>
          <Typography variant="h1">My Journey</Typography>
          <Typography variant="body1" color="#27E1C1">
            My journey in the world of web development began with a fascination for how lines of code could shape the online world. As I embarked on my educational path, I honed my skills in both front-end and back-end technologies. This journey allowed me to blend creativity with logic, resulting in innovative solutions that marry form and function seamlessly.
          </Typography>
          <Typography variant="h5">Why I Love What I Do</Typography>
          <Typography variant="body1" color="#3E54AC">
            The ever-evolving nature of web development keeps me fueled with excitement. Whether its staying up-to-date with the latest industry trends or diving into complex problem-solving, I find joy in every step of the process. I believe that each line of code has the potential to make a positive impact, and that belief drives me to push the boundaries of whats possible in the digital realm.
          </Typography>
          <Typography variant="h5">What Sets Me Apart</Typography>
          <Typography variant="body1" color='#0F6292'>
            My dedication to clean, efficient code and a keen eye for detail set me apart in the competitive world of development. Im not just a developer; Im a problem solver, a collaborator, and a creator. I thrive on challenges and approach each project with enthusiasm, turning concepts into reality while ensuring a seamless user experience.
          </Typography>
          <Typography variant="h4">Lets Connect</Typography>
          <Typography variant="body1" color="#793FDF">
            Im not just about coding; Im about building relationships and connections too. Whether youre a fellow developer, a potential collaborator, or someone looking to bring your digital ideas to life, Im excited to connect and explore how we can work together to make the web an even better place.
          </Typography>
          <Typography variant="subtitle2">
            Feel free to explore my portfolio to see some of the projects Ive brought to fruition. Lets embark on this digital journey together!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;

