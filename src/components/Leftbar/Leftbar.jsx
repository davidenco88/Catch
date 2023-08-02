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

// Import React Router Components
import { useNavigate } from 'react-router-dom';

const listItems = [
  { id: 1, icon: <HomeIcon />, label: 'Home', link: '/' },
  { id: 2, icon: <LocalShippingIcon />, label: 'Viajes', link: '/trips' },
  { id: 3, icon: <TimeToLeaveIcon />, label: 'Vehiculos', link: '/vehicles' },
  { id: 4, icon: <HistoryIcon />, label: 'Historial Carga', link: '/load-history' },
  { id: 5, icon: <AirlineSeatReclineExtraIcon />, label: 'Conductores', link: '/drivers' },
  { id: 6, icon: <StarIcon />, label: 'Catch', link: '/catch' },
  { id: 7, icon: <StarBorderIcon />, label: 'Catch Admin', link: '/catch-admin' },
  { id: 8, icon: <GroupIcon />, label: 'Usuarios', link: '/users' },
  { id: 9, icon: <SettingsIcon />, label: 'Parametros', link: '/trips/new-service' }
];

export default function Leftbar() {
  const navigate = useNavigate();

  return (
    <Box width={250} p={2} bgcolor="skyblue" sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box>
        <List>
          {listItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => navigate(item.link)}>
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
