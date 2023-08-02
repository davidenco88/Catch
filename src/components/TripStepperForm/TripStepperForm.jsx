import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
  // const [activeStep, setActiveStep] = React.useState(0);
  const activeStep = useSelector((state) => state.trip.activeStep);
  const dispatch = useDispatch();

  const handleNext = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(incrementStep());
  };

  const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch(decrementStep());
  };

  const handleReset = () => {
    // setActiveStep(0);
    dispatch(resetStep());
  };

  return (
    <Box sx={{ maxWidth: 1024 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Paper elevation={2}>
                <Box component="form">
                  <Typography>Formulario</Typography>
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
