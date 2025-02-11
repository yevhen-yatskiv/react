import { Formik, Form, Field } from 'formik';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';

function SimpleForm() {
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

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Form
        </Typography>
        <Formik
          initialValues={{ name: '', email: '', channel: '' }}
          validate={validate}
          onSubmit={(values) => {
            console.log('Form data', values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    label="Channel"
                    name="channel"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    error={touched.channel && Boolean(errors.channel)}
                    helperText={touched.channel && errors.channel}
                  />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default SimpleForm;
