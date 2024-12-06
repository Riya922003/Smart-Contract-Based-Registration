import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  styled,
  Box,
  useTheme,
  useMediaQuery,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Avatar,
  Rating,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SearchIcon from '@mui/icons-material/Search';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VerifiedIcon from '@mui/icons-material/Verified';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import GavelIcon from '@mui/icons-material/Gavel';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
}));

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  padding: '24px',
});

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

const HeroContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(12, 0, 8),
  background: 'linear-gradient(45deg, #1a73e8 30%, #0052cc 90%)',
  color: 'white',
  borderRadius: '0 0 50% 50% / 4%',
  marginBottom: theme.spacing(6),
}));

const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),
}));

const IconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1.5rem',
  '& > svg': {
    fontSize: '3rem',
    color: theme.palette.primary.main,
  },
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(6),
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  background: 'rgba(255, 255, 255, 0.1)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  padding: '10px 24px',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
  },
}));

const RotatingShowcase = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '250px',
  perspective: '1000px',
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(16),
}));

const ShowcaseItem = styled(Paper)(({ theme, rotation }) => ({
  position: 'absolute',
  width: '200px',
  height: '250px',
  top: '50%',
  left: '50%',
  transform: `translate(-50%, -50%) rotateY(${rotation}deg) translateZ(250px)`,
  transition: 'all 0.5s ease-in-out',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  zIndex: Math.abs(Math.round(Math.cos(rotation * Math.PI / 180) * 10)),
}));

const RoleCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  borderRadius: '15px',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  borderRadius: '15px',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
}));

const FooterSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
  color: 'white',
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(8),
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
  margin: theme.spacing(0, 1),
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-3px)',
  },
}));

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [rotation, setRotation] = useState(0);
  const [feedbackRating, setFeedbackRating] = useState(0);

  const showcaseItems = [
    {
      title: 'Smart Contracts',
      description: 'Automated and secure property transfers using blockchain technology',
      icon: <SecurityIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />,
    },
    {
      title: 'Digital Records',
      description: 'Immutable and transparent land ownership records',
      icon: <VerifiedUserIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />,
    },
    {
      title: 'Quick Processing',
      description: 'Fast and efficient property registration and verification',
      icon: <SpeedIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />,
    },
  ];

  const faqItems = [
    {
      question: 'How does blockchain ensure security in land registry?',
      answer: 'Blockchain technology creates an immutable record of all transactions, making it impossible to alter or tamper with land records. Each transaction is verified by multiple nodes in the network, ensuring transparency and security.',
    },
    {
      question: 'What documents are required for land registration?',
      answer: 'Required documents typically include proof of identity, property documents, tax receipts, and any previous ownership records. The exact requirements may vary based on your location and property type.',
    },
    {
      question: 'How long does the registration process take?',
      answer: 'With our blockchain-based system, the registration process is significantly faster than traditional methods. Most registrations can be completed within 24-48 hours after document verification.',
    },
  ];

  const testimonials = [
    {
      name: 'Garvit Budhiraja',
      role: 'Property Owner',
      comment: 'The blockchain-based land registry system has revolutionized how we handle property transactions. It\'s secure, transparent, and incredibly efficient.',
      rating: 5,
      avatar: '/images/avatars/garvit.jpg'
    },
    {
      name: 'Rohan Gautam',
      role: 'Real Estate Agent',
      comment: 'As a real estate professional, this platform has made my job significantly easier. The verification process is streamlined and foolproof.',
      rating: 5,
      avatar: '/images/avatars/rohan.jpg'
    },
    {
      name: 'Shashidhar Kittur',
      role: 'Land Inspector',
      comment: 'The transparency and security offered by this platform give me peace of mind. Property transactions have never been this straightforward.',
      rating: 5,
      avatar: '/images/avatars/shashidhar.jpg'
    },
  ];

  const features = [
    {
      title: 'Register Land',
      description: 'Securely register your land property on the blockchain with immutable records and instant verification.',
      icon: <AddIcon fontSize="large" />,
      path: '/register',
    },
    {
      title: 'Transfer Ownership',
      description: 'Transfer land ownership seamlessly using smart contracts with complete transparency and security.',
      icon: <SwapHorizIcon fontSize="large" />,
      path: '/transfer',
    },
    {
      title: 'View Records',
      description: 'Access and verify land records instantly with our blockchain-powered transparent ledger system.',
      icon: <SearchIcon fontSize="large" />,
      path: '/records',
    },
  ];

  const benefits = [
    {
      icon: <SecurityIcon fontSize="large" />,
      title: 'Enhanced Security',
      description: 'Blockchain technology ensures your property records are tamper-proof and secure.',
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: 'Fast Processing',
      description: 'Quick and efficient property registration and transfer process.',
    },
    {
      icon: <VerifiedIcon fontSize="large" />,
      title: 'Verified Transactions',
      description: 'All transactions are verified and recorded on the blockchain.',
    },
  ];

  const handleRotate = () => {
    setRotation(prev => prev + 120);
  };

  return (
    <main>
      <HeroContent>
        <Container maxWidth="md">
          <Typography 
            component="h1" 
            variant={isMobile ? "h3" : "h2"} 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Blockchain Land Registry
          </Typography>
          <Typography 
            variant={isMobile ? "h6" : "h5"} 
            align="center" 
            paragraph
            sx={{ opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}
          >
            A secure, transparent, and efficient way to manage land registration and ownership transfer using blockchain technology
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <StyledButton
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/register')}
              sx={{ border: '1px solid', borderColor: 'secondary.main' }}
            >
              Get Started
            </StyledButton>
            <StyledButton
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/records')}
              sx={{ color: 'white', borderColor: 'white' }}
            >
              View Records
            </StyledButton>
          </Box>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <FeatureBox>
                  {benefit.icon}
                  <Box>
                    <Typography variant="h6" sx={{ color: 'white', mb: 0.5 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {benefit.description}
                    </Typography>
                  </Box>
                </FeatureBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </HeroContent>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mb: 8, fontWeight: 600 }}
        >
          Featured Technologies
        </Typography>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <RotatingShowcase>
              {showcaseItems.map((item, index) => (
                <ShowcaseItem
                  key={index}
                  elevation={3}
                  rotation={rotation + index * (360 / showcaseItems.length)}
                  onClick={() => handleRotate(index)}
                >
                  {item.icon}
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </ShowcaseItem>
              ))}
            </RotatingShowcase>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ pl: { md: 6 } }}>
              <Typography variant="h5" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
                Revolutionizing Land Registry with Blockchain
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                Our platform represents a paradigm shift in land registry management, combining cutting-edge blockchain technology with user-friendly interfaces to create a secure, transparent, and efficient ecosystem for all stakeholders.
              </Typography>
              
              <Box sx={{ mb: 5 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', mb: 3 }}>
                  Core Technologies:
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <SecurityIcon color="primary" sx={{ mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                          Advanced Security Protocols
                        </Typography>
                        <Typography variant="body2">
                          Implementing state-of-the-art cryptographic algorithms and blockchain security measures to ensure tamper-proof record keeping and secure transactions.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <SpeedIcon color="primary" sx={{ mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                          High-Performance Architecture
                        </Typography>
                        <Typography variant="body2">
                          Optimized transaction processing and smart contract execution ensure quick response times and efficient handling of property transfers and registrations.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <VerifiedIcon color="primary" sx={{ mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                          Smart Contract Integration
                        </Typography>
                        <Typography variant="body2">
                          Automated verification processes and self-executing contracts eliminate intermediaries and reduce processing time while maintaining complete transparency and trust.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              
              <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', mb: 3 }}>
                Key Benefits:
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={0} sx={{ 
                    p: 2, 
                    height: '100%',
                    background: 'linear-gradient(135deg, #f5f7ff 0%, #ffffff 100%)',
                    border: '1px solid',
                    borderColor: 'primary.light',
                    borderRadius: 2,
                    '&:hover': {
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: 'primary.main' 
                        }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          Immutable Records
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: 'primary.main' 
                        }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          Reduced Fraud
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: 'primary.main' 
                        }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          Quick Processing
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={0} sx={{ 
                    p: 2, 
                    height: '100%',
                    background: 'linear-gradient(135deg, #f5f7ff 0%, #ffffff 100%)',
                    border: '1px solid',
                    borderColor: 'primary.light',
                    borderRadius: 2,
                    '&:hover': {
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: 'primary.main' 
                        }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          Cost Effective
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: 'primary.main' 
                        }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          24/7 Accessibility
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: 'primary.main' 
                        }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          Transparent Operations
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ my: 16 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 600 }}
        >
          Choose Your Role
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <RoleCard>
              <PersonIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Buyer
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Search and purchase properties with complete trust and transparency
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/buyer-signup')}
                sx={{ mt: 'auto' }}
              >
                Register as Buyer
              </Button>
            </RoleCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <RoleCard>
              <BusinessIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Seller
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                List and sell your properties securely through blockchain
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/seller-signup')}
                sx={{ mt: 'auto' }}
              >
                Register as Seller
              </Button>
            </RoleCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <RoleCard>
              <GavelIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Land Inspector
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Verify and approve land transactions with enhanced tools
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/inspector-signup')}
                sx={{ mt: 'auto' }}
              >
                Register as Inspector
              </Button>
            </RoleCard>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ background: 'linear-gradient(45deg, #f5f5f5 30%, #ffffff 90%)', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item key={feature.title} xs={12} sm={6} md={4}>
                <StyledCard>
                  <StyledCardContent>
                    <IconWrapper>
                      {feature.icon}
                    </IconWrapper>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2" 
                      align="center"
                      sx={{ fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      align="center"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </StyledCardContent>
                  <StyledCardActions>
                    <StyledButton
                      variant="contained"
                      color="primary"
                      onClick={() => navigate(feature.path)}
                    >
                      Get Started
                    </StyledButton>
                  </StyledCardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 600 }}
        >
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} md={4}>
              <TestimonialCard>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      width: 50, 
                      height: 50,
                      mr: 2,
                      border: '2px solid',
                      borderColor: 'primary.main'
                    }}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  >
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Typography variant="h6">
                    {testimonial.name}
                  </Typography>
                </Box>
                <Typography color="text.secondary" paragraph>
                  "{testimonial.comment}"
                </Typography>
                <Rating value={testimonial.rating} readOnly />
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Frequently Asked Questions
          </Typography>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              sx={{ mb: 2 }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 600 }}
        >
          Share Your Feedback
        </Typography>
        <Paper sx={{ p: 4, borderRadius: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="legend" sx={{ mb: 1 }}>Rate your experience</Typography>
              <Rating
                value={feedbackRating}
                onChange={(event, newValue) => setFeedbackRating(newValue)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
              >
                Submit Feedback
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <FooterSection>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                We're revolutionizing land registry with blockchain technology,
                making property transactions secure, transparent, and efficient.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Contact Info
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1, opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  garvit2022@vitbhopal.ac.in
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  +91 939 981 6486
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 1, opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  VIT Bhopal University, Sehore
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', mt: 2 }}>
                <SocialIcon>
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon>
                  <TwitterIcon />
                </SocialIcon>
                <SocialIcon>
                  <LinkedInIcon />
                </SocialIcon>
                <SocialIcon>
                  <InstagramIcon />
                </SocialIcon>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              2024 Land Registry Platform. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </FooterSection>
    </main>
  );
}

export default Home;
