import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/material';
import SocialMediaLinks from './SocialMediaLinks';
import Grid from '@mui/material/Unstable_Grid2'; 
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';




export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const currentYear = new Date().getFullYear();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid xs={8}>
          <Item> <p>&copy; {currentYear} Nitin Verma. All rights reserved. </p> </Item>
        </Grid>
        <Grid xs={4}>
          <Item sx={{height:"48px"}}> <SocialMediaLinks/>  </Item>
        </Grid>
        
      </Grid>
    </Box>
   
   <Box>
  
   

   </Box>
   
    <BottomNavigation sx={{}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
    </>
  );
}

