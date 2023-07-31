import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>HOME</h1>
  },
  {
    path: '/trips',
    element: <h1>VIAJES</h1>
  },
  {
    path: '/vehicles',
    element: <h1>VEHICULOS</h1>
  },
  {
    path: '/load-history',
    element: <h1>HISTORIAL DE CARGA</h1>
  },
  {
    path: '/drivers',
    element: <h1>CONDUCTORES</h1>
  },
  {
    path: '/catch',
    element: <h1>CATCH</h1>
  },
  {
    path: '/catch-admin',
    element: <h1>CATCH ADMINISTRADOR</h1>
  },
  {
    path: '/users',
    element: <h1>USUARIOS</h1>
  },
  {
    path: '/parameters',
    element: <h1>PARAMETROS</h1>
  }
]);

export default router;
