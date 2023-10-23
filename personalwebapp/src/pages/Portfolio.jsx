
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";

const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Portfolio = () => {
  return (
    <Grid sx={{marginBottom:"10%"}} container spacing={2}>
      <Grid item xs={12}>
        <Section>
        <div>
          <Avatar alt="" src="https://i.pinimg.com/736x/43/10/e8/4310e84e3beeede4c1060d5207c2f41e.jpg" />
          
          </div>
          <Typography variant="h4">Contact Information</Typography>
          <address>
            <Typography>Email: nitinvermanv61506@gmail.com</Typography>
            <Typography>Phone: 9015308881</Typography>
            <Typography>
              LinkedIn: <a href="LinkedIn Profile">LinkedIn Profile</a>
            </Typography>
            <Typography>
              GitHub: <a href="GitHub Profile">GitHub Profile</a>
            </Typography>
          </address>
          
        </Section>
      </Grid>

      <Grid item xs={12}>
        <Section>
          <Typography variant="h4">Summary</Typography>
          <Typography>
            A passionate and skilled MERN stack developer with years of experience in building dynamic web applications. Proficient in JavaScript, React, Node.js, and MongoDB. A problem solver with a strong commitment to delivering high-quality software solutions.
          </Typography>
        </Section>
      </Grid>

      <Grid item xs={12}>
        <Section>
          <Typography variant="h4">Work Experience</Typography>
          <article>
            <Typography variant="h6">Software Developer at spaceWindow Company</Typography>
            <Typography>
              <em>06-2023 - Present</em>
            </Typography>
            <ul>
              <li>Developed and maintained web applications using the MERN stack.</li>
              <li>Collaborated with cross-functional teams to deliver feature-rich solutions.</li>
              <li>Implemented responsive and user-friendly front-end interfaces with React.</li>
              <li>Designed and optimized database schemas using MongoDB.</li>
              <li>Improved application performance and scalability through code optimization and best practices.</li>
            </ul>
          </article>
        </Section>
      </Grid>

      <Grid item xs={12}>
        <Section>
          <Typography variant="h4">Education</Typography>
          <article>
            <Typography variant="h6">Bachelor Computer Science</Typography>
            <Typography>gpgc bilaspur, bilaspur, h.p</Typography>
            <Typography>
              <em>Graduated: 2023</em>
            </Typography>
          </article>
        </Section>
      </Grid>

      <Grid sx={{}} item xs={12}>
        <Section>
          <Typography variant="h4">Skills</Typography>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>HTML5/CSS3</li>
            <li>RESTful API Development</li>
            <li>Git/GitHub</li>
            <li>Responsive Web Design</li>
            <li>Problem Solving</li>
          </ul>
        </Section>
      </Grid>
    </Grid>
  );
};

export default Portfolio;

