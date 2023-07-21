import { Box, Typography } from '@mui/material';

export default function MainContent() {
  return (
    <Box
      flex={1}
      bgcolor="gray"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography>This is my content</Typography>
    </Box>
  );
}
