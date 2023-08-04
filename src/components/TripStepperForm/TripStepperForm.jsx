// Import React Elements
import { useState } from 'react';

// Import MUI Components
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

// Import MUI ICons
import FileUploadIcon from '@mui/icons-material/FileUpload';

// Import Redux Elements
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// Import Redux Slices
import { incrementStep, decrementStep, resetStep } from '../../pages/Trips/tripsReduxSlice';

const steps = [
  {
    label: 'Información del servicio'
  },
  {
    label: 'Origen de la carga'
  },
  {
    label: 'Destino de la carga'
  },
  {
    label: 'Información de cargue y descargue'
  }
];

export default function TripStepperForm() {
  const [fileName1, setFileName1] = useState('');
  const [fileName2, setFileName2] = useState('');
  const activeStep = useSelector((state) => state.trip.activeStep);
  const dispatch = useDispatch();

  const handleSelectImage1 = (e) => {
    const file = e.target.files[0];
    setFileName1(file.name);
  };

  const handleSelectImage2 = (e) => {
    const file = e.target.files[0];
    setFileName2(file.name);
  };

  const handleNext = () => {
    dispatch(incrementStep());
  };

  const handleBack = () => {
    dispatch(decrementStep());
  };

  const handleReset = () => {
    dispatch(resetStep());
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical" sx={{ width: '100%' }}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Paper elevation={2} sx={{ p: 2 }}>
                <Box component="form">
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="cargoOwner-label">Generador *</InputLabel>
                    <Select
                      labelId="cargoOwner-label"
                      id="cargoOwner"
                      // value={age}
                      label="Generador *">
                      <MenuItem value="Generador 1">Generador 1</MenuItem>
                      <MenuItem value="Generador 2">Generador 2</MenuItem>
                      <MenuItem value="Generador 3">Generador 3</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="cargoDescription"
                    label="Descripción de la carga *"
                    multiline
                    maxRows={4}
                    margin="normal"
                    sx={{ width: '100%' }}
                  />
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="typeService-label">Tipo de servicio *</InputLabel>
                    <Select
                      labelId="typeService-label"
                      id="typeService"
                      // value={age}
                      label="Tipo de servicio *">
                      <MenuItem value="Vehículo Luv">Vehículo Luv</MenuItem>
                      <MenuItem value="Vehículo Turbo">Vehículo Turbo</MenuItem>
                      <MenuItem value="Camión Sencillo">Camión Sencillo</MenuItem>
                      <MenuItem value="Doble Troque">Doble Troque</MenuItem>
                      <MenuItem value="Mini Mula">Mini Mula</MenuItem>
                      <MenuItem value="Tractomula 2 Troques">Tractomula 2 Troques</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="cargoType-label">Tipo de carga *</InputLabel>
                    <Select
                      labelId="cargoType-label"
                      id="cargoType"
                      // value={age}
                      label="Tipo de carga *">
                      <MenuItem value="Carga refrigerada">Carga refrigerada</MenuItem>
                      <MenuItem value="Granel solido">Granel solido</MenuItem>
                      <MenuItem value="General">General</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="typeVehicle-label">Tipo de vehiculo *</InputLabel>
                    <Select
                      labelId="typeVehicle-label"
                      id="typeVehicle"
                      // value={age}
                      label="Tipo de vehiculo *">
                      <MenuItem value="Estacas">Estacas</MenuItem>
                      <MenuItem value="Furgón">Furgón</MenuItem>
                      <MenuItem value="Termoking">Termoking</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" component="label" endIcon={<FileUploadIcon />}>
                        Cargar
                        <input type="file" hidden onChange={handleSelectImage1} />
                      </Button>
                      <Box sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Imagen de la carga 1 *</Typography>
                      </Box>
                    </Stack>
                    <Box
                      sx={{
                        mt: 1,
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        overflow: 'hidden'
                      }}>
                      <Typography>{fileName1}</Typography>
                    </Box>
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" component="label" endIcon={<FileUploadIcon />}>
                        Cargar
                        <input type="file" hidden onChange={handleSelectImage2} />
                      </Button>
                      <Box sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Imagen de la carga 2 *</Typography>
                      </Box>
                    </Stack>
                    <Box
                      sx={{
                        mt: 1,
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        overflow: 'hidden'
                      }}>
                      <Typography>{fileName2}</Typography>
                    </Box>
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="declaredAmount-label">
                      Valor declarado de la carga *
                    </InputLabel>
                    <OutlinedInput
                      id="declaredAmount-label"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Valor declarado de la carga *"
                      type="number"
                    />
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="weight-label">Peso de la carga *</InputLabel>
                    <OutlinedInput
                      id="weight-label"
                      startAdornment={<InputAdornment position="start">kg</InputAdornment>}
                      label="Peso de la carga *"
                      type="number"
                    />
                  </FormControl>
                </Box>
              </Paper>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
