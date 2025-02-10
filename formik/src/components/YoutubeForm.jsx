import { useFormik } from 'formik';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function YoutubeForm() {
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.channel) {
      errors.channel = 'Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
    validate,
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
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Channel"
            name="channel"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
            error={formik.touched.channel && Boolean(formik.errors.channel)}
            helperText={formik.touched.channel && formik.errors.channel}
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
