// Import MUI Components
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';

// Import React Router Components
import { useNavigate } from 'react-router-dom';

// Import Project Components
import TripsTable from '../../components/TripsTable/TripsTable';

export default function Trips() {
  const navigate = useNavigate();

  return (
    <Box
      flex={1}
      sx={{
        width: '100%',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'auto'
      }}>
      <Stack
        sx={{
          width: '100%',
          maxWidth: 1024,
          padding: 4,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', ml: 2 }}>
          VIAJES
        </Typography>
        <Button variant="contained" onClick={() => navigate('/trips/new-service')} sx={{ mr: 2 }}>
          Nuevo Servicio
        </Button>
      </Stack>
      <TripsTable />
    </Box>
  );
}
