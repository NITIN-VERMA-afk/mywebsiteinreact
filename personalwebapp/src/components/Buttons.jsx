
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Contact Me</Button>
      <Button>view Projects</Button>
      <Button>Hire</Button>
    </ButtonGroup>
  );
}