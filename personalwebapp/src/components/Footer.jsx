import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import SocialMediaLinks from "./SocialMediaLinks";
import Grid from "@mui/material/Unstable_Grid2";

export default function LabelBottomNavigation() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid xs={12}>
            <Item sx={{display:"flex",justifyContent:"space-between",alignItems:"center",position:"fixed",bottom:"0",width:"99%"}}>
              <p>&copy; {currentYear} Nitin Verma. All rights reserved. </p>
              <p>
               
                <SocialMediaLinks />
              </p>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box></Box>
    </>
  );
}
