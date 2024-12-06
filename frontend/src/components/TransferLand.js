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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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

const StyledFormControl = styled(FormControl)({
  width: '100%',
});

function TransferLand() {
  const [formData, setFormData] = useState({
    propertyId: '',
    newOwnerAddress: '',
    transferAmount: '',
    transferType: 'sale',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you'll add the blockchain interaction logic
      console.log('Transfer submitted:', formData);
      setNotification({
        open: true,
        message: 'Land transfer initiated successfully!',
        severity: 'success',
      });
    } catch (error) {
      setNotification({
        open: true,
        message: 'Error transferring land: ' + error.message,
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
          Transfer Land Ownership
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="propertyId"
                label="Property ID"
                fullWidth
                required
                value={formData.propertyId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="newOwnerAddress"
                label="New Owner's Wallet Address"
                fullWidth
                required
                value={formData.newOwnerAddress}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledFormControl>
                <InputLabel>Transfer Type</InputLabel>
                <Select
                  name="transferType"
                  value={formData.transferType}
                  onChange={handleChange}
                  required
                  label="Transfer Type"
                >
                  <MenuItem value="sale">Sale</MenuItem>
                  <MenuItem value="gift">Gift</MenuItem>
                  <MenuItem value="inheritance">Inheritance</MenuItem>
                </Select>
              </StyledFormControl>
            </Grid>
            {formData.transferType === 'sale' && (
              <Grid item xs={12}>
                <TextField
                  name="transferAmount"
                  label="Transfer Amount (in ETH)"
                  type="number"
                  fullWidth
                  required
                  value={formData.transferAmount}
                  onChange={handleChange}
                />
              </Grid>
            )}
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Initiate Transfer
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

export default TransferLand;
