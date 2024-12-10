import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Link, 
  IconButton,
  Grid,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  GitHub as GitHubIcon, 
  LinkedIn as LinkedInIcon, 
  Twitter as TwitterIcon,
  Map as MapIcon,
  Business as BusinessIcon,
  ContactSupport as ContactSupportIcon
} from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  borderTop: `1px solid ${theme.palette.primary.light}`,
  overflow: 'hidden',
}));

const FooterBackground = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/footer-background.svg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.5,
  zIndex: 1,
});

const FooterContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
}));

const FooterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: theme.palette.common.white,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: 50,
    height: 3,
    backgroundColor: theme.palette.secondary.main,
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: 100,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  opacity: 0.8,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.secondary.light,
    opacity: 1,
    textDecoration: 'none',
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  opacity: 0.8,
  transition: 'all 0.3s ease, transform 0.3s ease',
  '&:hover': {
    color: theme.palette.secondary.light,
    opacity: 1,
    transform: 'scale(1.1)',
  },
}));

const InfoTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ tooltip: className }} />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[2],
  fontSize: 13,
}));

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const socialLinks = [
    { 
      icon: <GitHubIcon />, 
      label: 'GitHub', 
      tooltip: 'Explore our open-source projects',
      url: 'https://github.com/garvit-exe/' 
    },
    { 
      icon: <LinkedInIcon />, 
      label: 'LinkedIn', 
      tooltip: 'Connect with our professional network',
      url: 'https://linkedin.com/in/garvit-budhiraja/' 
    },
    { 
      icon: <TwitterIcon />, 
      label: 'Twitter', 
      tooltip: 'Stay updated with our latest news',
      url: 'https://twitter.com/being_garvit/' 
    }
  ];

  return (
    <FooterContainer component="footer">
      <FooterBackground />
      <FooterContent maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FooterSection
              onMouseEnter={() => setHoveredSection('about')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <SectionTitle variant="h6">About Us</SectionTitle>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'common.white',
                  opacity: hoveredSection === 'about' ? 1 : 0.7,
                  transition: 'opacity 0.3s ease'
                }}
              >
                Pioneering digital land registry solutions with cutting-edge technology and unparalleled transparency.
              </Typography>
            </FooterSection>
          </Grid>

          <Grid item xs={12} md={4}>
            <FooterSection
              onMouseEnter={() => setHoveredSection('links')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <SectionTitle variant="h6">Quick Links</SectionTitle>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { label: 'Home', icon: <MapIcon fontSize="small" sx={{ mr: 1, color: 'secondary.light' }} /> },
                  { label: 'Services', icon: <BusinessIcon fontSize="small" sx={{ mr: 1, color: 'secondary.light' }} /> },
                  { label: 'Contact', icon: <ContactSupportIcon fontSize="small" sx={{ mr: 1, color: 'secondary.light' }} /> }
                ].map((item) => (
                  <StyledLink 
                    key={item.label} 
                    href="#" 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      opacity: hoveredSection === 'links' ? 1 : 0.7,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </StyledLink>
                ))}
              </Box>
            </FooterSection>
          </Grid>

          <Grid item xs={12} md={4}>
            <FooterSection
              onMouseEnter={() => setHoveredSection('connect')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <SectionTitle variant="h6">Connect</SectionTitle>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social) => (
                  <Tooltip 
                    key={social.label} 
                    title={social.tooltip} 
                    placement="top"
                  >
                    <SocialIconButton 
                      onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
                    >
                      {social.icon}
                    </SocialIconButton>
                  </Tooltip>
                ))}
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  mt: 2,
                  color: 'common.white',
                  opacity: hoveredSection === 'connect' ? 1 : 0.7,
                  transition: 'opacity 0.3s ease'
                }}
              >
                &copy; {new Date().getFullYear()} Land Registry. All rights reserved.
              </Typography>
            </FooterSection>
          </Grid>
        </Grid>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
