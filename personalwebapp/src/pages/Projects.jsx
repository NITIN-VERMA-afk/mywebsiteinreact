import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import GitProjectCard from "../components/Gridprojectcard";

const projects = [
  {
    name: "Project 1",
    description: "A cool project",
    language: "JavaScript",
    updated_at: "2023-10-12",
    html_url: "https://github.com/yourusername/project1",
  },
  {
    name: "Project 2",
    description: "Another awesome project",
    language: "Python",
    updated_at: "2023-10-10",
    html_url: "https://github.com/yourusername/project2",
  },
  {
    name: "Project 3",
    description: "Another awesome project",
    language: "TypeScript",
    updated_at: "2023-10-10",
    html_url: "https://github.com/yourusername/project2",
  },
  {
    name: "Project 4",
    description: "Another awesome project",
    language: "TypeScript",
    updated_at: "2023-10-10",
    html_url: "https://github.com/yourusername/project2",
  },
  
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={3} key={index}>
            <GitProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
