import { useFormik } from 'formik';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  console.log('Form values', formik.values);

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Form
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextField
            label="Channel"
            name="channel"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#1a73e8',
              '&:hover': {
                backgroundColor: '#155ab6',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              },
              '&:focus': {
                backgroundColor: '#0f47a1',
                boxShadow: '0 0 10px rgba(15, 71, 161, 0.5)',
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default YoutubeForm;
