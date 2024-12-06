import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  styled,
  Snackbar,
  Alert,
} from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

function RegisterLand() {
  const [formData, setFormData] = useState({
    area: '',
    location: '',
    price: '',
    surveyNumber: '',
    propertyId: '',
    documents: null,
  });
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      documents: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you'll add the blockchain interaction logic
      console.log('Form submitted:', formData);
      setNotification({
        open: true,
        message: 'Land registered successfully!',
        severity: 'success',
      });
    } catch (error) {
      setNotification({
        open: true,
        message: 'Error registering land: ' + error.message,
        severity: 'error',
      });
    }
  };

  const handleCloseNotification = () => {
    setNotification((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <StyledContainer maxWidth="md">
      <StyledPaper elevation={3}>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Register Land Property
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="propertyId"
                label="Property ID"
                fullWidth
                required
                value={formData.propertyId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="surveyNumber"
                label="Survey Number"
                fullWidth
                required
                value={formData.surveyNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="location"
                label="Property Location"
                fullWidth
                required
                value={formData.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="area"
                label="Area (in sq. ft.)"
                type="number"
                fullWidth
                required
                value={formData.area}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="price"
                label="Price (in ETH)"
                type="number"
                fullWidth
                required
                value={formData.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="application/pdf"
                style={{ display: 'none' }}
                id="documents-file"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="documents-file">
                <Button variant="contained" color="primary" component="span">
                  Upload Property Documents
                </Button>
              </label>
              {formData.documents && (
                <Typography variant="body2" style={{ marginTop: 8 }}>
                  Selected file: {formData.documents.name}
                </Typography>
              )}
            </Grid>
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Register Property
          </SubmitButton>
        </StyledForm>
      </StyledPaper>
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
}

export default RegisterLand;
