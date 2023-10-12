
import { Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <Grid container spacing={2}>
        <Grid item>
          <IconButton color="primary" href="https://www.facebook.com/your-facebook-page">
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="primary" href="https://twitter.com/your-twitter-profile">
            <TwitterIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="primary" href="https://www.instagram.com/your-instagram-profile">
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default SocialMediaLinks;