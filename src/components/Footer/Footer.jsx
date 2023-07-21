import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <AppBar position="fixed" color="primary" p={2} sx={{ top: 'auto', bottom: 0 }}>
      <Box p={1} pl={3}>
        <Typography variant="body1" fontWeight={200}>
          @DavidencoDev 2023
        </Typography>
      </Box>
    </AppBar>
  );
}
