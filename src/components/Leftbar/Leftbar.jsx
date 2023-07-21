// Import MUI Icons
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import HistoryIcon from '@mui/icons-material/History';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';

// Import MUI Components
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const listItems = [
  { id: 1, icon: <HomeIcon />, label: 'Home' },
  { id: 2, icon: <LocalShippingIcon />, label: 'Viajes' },
  { id: 3, icon: <TimeToLeaveIcon />, label: 'Vehiculos' },
  { id: 4, icon: <HistoryIcon />, label: 'Historial Carga' },
  { id: 5, icon: <AirlineSeatReclineExtraIcon />, label: 'Conductores' },
  { id: 6, icon: <StarIcon />, label: 'Catch' },
  { id: 7, icon: <StarBorderIcon />, label: 'Catch Admin' },
  { id: 8, icon: <GroupIcon />, label: 'Usuarios' },
  { id: 9, icon: <SettingsIcon />, label: 'Parametros' }
];

export default function Leftbar() {
  return (
    <Box width={250} p={2} bgcolor="skyblue" sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box>
        <List>
          {listItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
