// Import MUI Components
import Stack from '@mui/material/Stack';

// Import Project Components
import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Box height="100vh">
      <Navbar />
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', height: '100%' }}>
        <Leftbar />
        <MainContent />
      </Stack>
      <Footer />
    </Box>
  );
}

export default App;
