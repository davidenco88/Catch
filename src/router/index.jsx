import { createBrowserRouter } from 'react-router-dom';

// Import Project Components
import Generic from '../layouts/Generic';
import Home from '../pages/Home/Home';
import Trips from '../pages/Trips/Trips';
import NewService from '../pages/Trips/NewService';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Generic />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'trips',
        element: <Trips />
      },
      {
        path: 'trips/new-service',
        element: <NewService />
      },
      {
        path: 'vehicles',
        element: <h1>VEHICULOS</h1>
      },
      {
        path: 'load-history',
        element: <h1>HISTORIAL DE CARGA</h1>
      },
      {
        path: 'drivers',
        element: <h1>CONDUCTORES</h1>
      },
      {
        path: 'catch',
        element: <h1>CATCH</h1>
      },
      {
        path: 'catch-admin',
        element: <h1>CATCH ADMINISTRADOR</h1>
      },
      {
        path: 'users',
        element: <h1>USUARIOS</h1>
      },
      {
        path: 'parameters',
        element: <h1>PARAMETROS</h1>
      }
    ]
  }
]);

export default router;
