// Import MUI Components
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';

// Import Project Components
import TripStepperForm from '../../components/TripStepperForm/TripStepperForm';

export default function NewService() {
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
          NUEVO SERVICIO
        </Typography>
      </Stack>
      <TripStepperForm />
    </Box>
  );
}
