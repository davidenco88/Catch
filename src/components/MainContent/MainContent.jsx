// Import MUI Componenets
import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// Import mock data
import trips from './trips';

export default function MainContent() {
  const columns = [
    { field: 'originDateTime', headerName: 'Fecha Carga', width: 120 },
    { field: 'destinationDateTime', headerName: 'Fecha Descarga', width: 120 },
    { field: 'originCity', headerName: 'Origen', width: 100 },
    { field: 'destinationCity', headerName: 'Destino', width: 100 },
    { field: 'cargoType', headerName: 'Naturaleza Carga', width: 150 },
    { field: 'amountOffered', headerName: 'Valor Servicio', width: 120 },
    { field: 'tripState', headerName: 'Estado', width: 150 },
    { field: 'cargoDescription', headerName: 'Descripción', width: 150 }
  ];

  const rows = trips.map((trip) => ({
    id: trip.id,
    originDateTime: trip.originDateTime,
    destinationDateTime: trip.destinationDateTime,
    originCity: trip.originCity,
    destinationCity: trip.destinationCity,
    cargoType: trip.cargoType,
    cargoDescription: trip.cargoDescription,
    amountOffered: trip.amountOffered,
    tripState: trip.tripState
  }));

  return (
    <Box
      flex={1}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 4,
        overflow: 'auto'
      }}>
      <Paper flex={1} elevation={10} sx={{ height: 400, width: '100%', maxWidth: 1024 }}>
        <DataGrid rows={rows} columns={columns} />
      </Paper>
    </Box>
  );
}
