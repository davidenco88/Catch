// Import MUI Components
import { Stack } from '@mui/material';
import { Box } from '@mui/material';

// Import Router Components
import { Outlet } from 'react-router-dom';

// Import Project Components
import Navbar from '../components/Navbar/Navbar';
import Leftbar from '../components/Leftbar/Leftbar';
import Footer from '../components/Footer/Footer';

function Generic() {
  return (
    <Box height="100vh">
      <Navbar />
      <Stack
        direction="row"
        sx={{ justifyContent: 'space-between', height: '100%', width: '100%' }}>
        <Leftbar />
        <Outlet />
      </Stack>
      <Footer />
    </Box>
  );
}

export default Generic;
