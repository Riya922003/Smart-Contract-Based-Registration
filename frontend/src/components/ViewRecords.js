import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const SearchSection = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const SearchButton = styled(Button)({
  height: '100%',
});

const PropertyCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const OwnershipHistory = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function ViewRecords() {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyDetails, setPropertyDetails] = useState(null);

  // Mock data for demonstration
  const mockPropertyDetails = {
    propertyId: 'PROP123',
    surveyNumber: 'SUR456',
    location: '123 Blockchain Street, Crypto City',
    area: 1200,
    currentPrice: 2.5,
    currentOwner: '0x1234...5678',
    ownershipHistory: [
      {
        date: '2023-08-15',
        from: '0xabcd...efgh',
        to: '0x1234...5678',
        price: 2.5,
        transactionType: 'Sale',
      },
      {
        date: '2023-07-01',
        from: '0xijkl...mnop',
        to: '0xabcd...efgh',
        price: 2.0,
        transactionType: 'Sale',
      },
    ],
  };

  const handleSearch = async () => {
    try {
      // Here you'll add the blockchain interaction logic to fetch property details
      // For now, we'll use mock data
      setPropertyDetails(mockPropertyDetails);
    } catch (error) {
      console.error('Error fetching property details:', error);
    }
  };

  return (
    <StyledContainer maxWidth="lg">
      <StyledPaper>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          View Land Records
        </Typography>

        <SearchSection>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                fullWidth
                label="Search by Property ID or Survey Number"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <SearchButton
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSearch}
                startIcon={<SearchIcon />}
              >
                Search
              </SearchButton>
            </Grid>
          </Grid>
        </SearchSection>

        {propertyDetails && (
          <>
            <PropertyCard>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Property Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography><strong>Property ID:</strong> {propertyDetails.propertyId}</Typography>
                    <Typography><strong>Survey Number:</strong> {propertyDetails.surveyNumber}</Typography>
                    <Typography><strong>Location:</strong> {propertyDetails.location}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography><strong>Area:</strong> {propertyDetails.area} sq ft</Typography>
                    <Typography><strong>Current Price:</strong> {propertyDetails.currentPrice} ETH</Typography>
                    <Typography><strong>Current Owner:</strong> {propertyDetails.currentOwner}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </PropertyCard>

            <OwnershipHistory>
              <Typography variant="h6" gutterBottom>
                Ownership History
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>From</TableCell>
                      <TableCell>To</TableCell>
                      <TableCell>Price (ETH)</TableCell>
                      <TableCell>Transaction Type</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {propertyDetails.ownershipHistory.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.from}</TableCell>
                        <TableCell>{record.to}</TableCell>
                        <TableCell>{record.price}</TableCell>
                        <TableCell>{record.transactionType}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </OwnershipHistory>
          </>
        )}
      </StyledPaper>
    </StyledContainer>
  );
}

export default ViewRecords;
