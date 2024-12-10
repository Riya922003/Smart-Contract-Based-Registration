// React and Routing
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Material-UI Core Components
import { 
  Box, 
  Typography, 
  Container, 
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  TextField,
  Paper,
  Avatar,
  Rating,
  Chip,
  InputAdornment,
  alpha
} from '@mui/material';

// Material-UI Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SearchIcon from '@mui/icons-material/Search';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VerifiedIcon from '@mui/icons-material/Verified';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import GavelIcon from '@mui/icons-material/Gavel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ForumIcon from '@mui/icons-material/Forum';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import DocumentIcon from '@mui/icons-material/Description';
import ShieldIcon from '@mui/icons-material/Shield';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

// Additional icon imports
import CodeIcon from '@mui/icons-material/Code';
import ListIcon from '@mui/icons-material/List';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import MapIcon from '@mui/icons-material/Map';
import PolicyIcon from '@mui/icons-material/Policy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ErrorIcon from '@mui/icons-material/Error';
import FolderIcon from '@mui/icons-material/Folder';
import HistoryIcon from '@mui/icons-material/History';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PublicIcon from '@mui/icons-material/Public';
import ShareIcon from '@mui/icons-material/Share';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Styling
import { styled } from '@mui/material/styles';

const HeroContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(12, 0, 8),
  background: `linear-gradient(135deg, 
    rgba(26, 115, 232, 0.95) 0%, 
    rgba(0, 82, 204, 0.95) 100%)`,
  position: 'relative',
  overflow: 'hidden',
  color: 'white',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/circuit-pattern.svg")',
    opacity: 0.1,
    animation: 'pulse 4s infinite',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
    height: 100,
    background: 'white',
    clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0% 100%)',
  },
  '@keyframes pulse': {
    '0%': {
      opacity: 0.1,
    },
    '50%': {
      opacity: 0.2,
    },
    '100%': {
      opacity: 0.1,
    },
  },
}));

const AnimatedText = styled(Typography)(({ theme }) => ({
  opacity: 0,
  animation: 'fadeInUp 0.8s forwards',
  animationDelay: props => props.delay || '0s',
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const GlowingButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  padding: '12px 32px',
  fontSize: '1.1rem',
  fontWeight: 600,
  background: 'linear-gradient(45deg, #1a73e8 30%, #0052cc 90%)',
  border: 0,
  color: 'white',
  boxShadow: '0 3px 15px 2px rgba(26, 115, 232, 0.4)',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 20px 2px rgba(26, 115, 232, 0.6)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
    transform: 'rotate(45deg)',
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover::after': {
    left: '100%',
  },
}));

const FloatingElement = styled('div')(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
  animation: 'float 6s infinite ease-in-out',
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-20px)',
    },
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

const RoleCardDescription = styled(Typography)(({ theme }) => ({
  display: '-webkit-box',
  WebkitLineClamp: 2, // Allow up to 2 lines
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: 1.5, // Consistent line height
  height: '3em', // Fixed height for 2 lines
  marginBottom: theme.spacing(3), // Increased bottom margin
}));

const RoleExplorerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  height: '600px',
  overflow: 'hidden',
  background: theme.palette.background.paper,
}));

const RoleSidebar = styled(Box)(({ theme }) => ({
  width: '250px',
  borderRight: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.default,
  padding: theme.spacing(2),
  overflowY: 'auto',
}));

const RoleDetailPanel = styled(Box, { shouldForwardProp: (prop) => prop !== 'rolecolor' })(
  ({ theme, rolecolor }) => ({
    flex: 1,
    padding: theme.spacing(4),
    background: theme.palette.background.paper,
    position: 'relative',
    overflowY: 'auto',
    scrollbarWidth: 'thin', // For Firefox
    scrollbarColor: `${rolecolor} ${rolecolor}14`, // For Firefox
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: `${rolecolor}14`, // Light background in role color
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: rolecolor,
      borderRadius: '10px',
      '&:hover': {
        backgroundColor: `${rolecolor}CC`, // Slightly darker on hover
      }
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '5px',
      backgroundColor: rolecolor,
    }
  })
);

const RoleSidebarItem = styled(Box)(({ theme, active, rolecolor }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  cursor: 'pointer',
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(1),
  transition: 'all 0.3s ease',
  backgroundColor: active 
    ? `${rolecolor}14` 
    : 'transparent',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  position: 'relative',
  '&::after': active ? {
    content: '""',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '4px',
    height: '60%',
    backgroundColor: rolecolor,
    borderRadius: '2px',
  } : {},
}));

const ServiceGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ServiceGridItem = styled(Grid)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center', 
  padding: theme.spacing(2),
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  borderRadius: theme.shape.borderRadius * 2,
  border: `1px solid transparent`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(
      to right, 
      ${theme.palette.primary.light}20 0%, 
      ${theme.palette.primary.light}00 70%
    )`,
    opacity: 0,
    transform: 'scaleX(0)',
    transformOrigin: 'left center',
    transition: 'all 0.6s ease',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
    zIndex: 2,
  },
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[6],
    border: `1px solid ${theme.palette.primary.light}50`,
    '&::before': {
      opacity: 1,
      transform: 'scaleX(1)',
    },
    '&::after': {
      transform: 'scaleX(1)',
    },
    '& .service-icon': {
      transform: 'rotate(360deg) scale(1.2)',
      color: theme.palette.primary.main,
    },
    '& .service-arrow': {
      transform: 'translateX(10px) rotate(15deg)',
      color: theme.palette.primary.main,
    },
    '& .service-title': {
      transform: 'translateX(10px)',
      color: theme.palette.primary.dark,
    },
    '& .service-description': {
      opacity: 0.8,
    }
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  color: theme.palette.text.secondary,
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  zIndex: 1,
}));

const ServiceDetails = styled(Box)({
  flex: 1,
  zIndex: 1,
  transition: 'all 0.4s ease',
});

const ServiceArrow = styled(ArrowForwardIosIcon)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '2rem',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  zIndex: 1,
}));

const TechnologiesHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 100,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  }
}));

const FAQSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(10, 0),
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url("/subtle-grid.svg")',
  backgroundRepeat: 'repeat',
}));

const FAQContainer = styled(Box)(({ theme }) => ({
  maxWidth: 900,
  margin: '0 auto',
  position: 'relative',
  zIndex: 2,
}));

const FAQHeader = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  position: 'relative',
  fontWeight: 700,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 100,
    height: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const FAQAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: 0,
  },
}));

const FAQBackgroundEffect = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.light}20, 
    ${theme.palette.secondary.light}20)`,
  transform: 'skewY(-6deg)',
  zIndex: 1,
}));

function RoleExplorer({ roles }) {
  const [selectedRole, setSelectedRole] = useState(
    roles.find(role => role.title === 'Land Owner') || roles[0]
  );
  const [expandedWorkflows, setExpandedWorkflows] = useState({});

  const toggleWorkflowExpand = (groupTitle) => {
    setExpandedWorkflows(prev => ({
      ...prev,
      [groupTitle]: !prev[groupTitle]
    }));
  };

  return (
    <RoleExplorerContainer>
      <RoleSidebar>
        <Typography 
          variant="overline" 
          sx={{ 
            display: 'block', 
            mb: 2, 
            color: 'text.secondary' 
          }}
        >
          ROLES
        </Typography>
        {roles.map((role) => (
          <RoleSidebarItem
            key={role.title}
            active={selectedRole.title === role.title ? 1 : 0}
            rolecolor={role.color}
            onClick={() => setSelectedRole(role)}
          >
            {React.cloneElement(role.icon, { 
              sx: { 
                mr: 2, 
                color: role.color,
                fontSize: '1.5rem',
                opacity: selectedRole.title === role.title ? 1 : 0.6
              } 
            })}
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: selectedRole.title === role.title ? 600 : 400,
                color: selectedRole.title === role.title 
                  ? 'text.primary'
                  : 'text.secondary',
                transition: 'all 0.3s ease'
              }}
            >
              {role.title}
            </Typography>
          </RoleSidebarItem>
        ))}
      </RoleSidebar>
      
      <RoleDetailPanel rolecolor={selectedRole.color}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          {React.cloneElement(selectedRole.icon, { 
            sx: { 
              mr: 3, 
              color: selectedRole.color,
              fontSize: '3rem'
            } 
          })}
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              color: 'text.primary'
            }}
          >
            {selectedRole.title}
          </Typography>
        </Box>
        
        <RoleCardDescription>
          {selectedRole.description}
        </RoleCardDescription>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h6" 
              sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
            >
              <SecurityIcon sx={{ mr: 2, color: selectedRole.color }} />
              Permissions
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 1 
            }}>
              {selectedRole.features.map((feature) => (
                <Chip 
                  key={feature}
                  label={feature}
                  variant="outlined"
                  sx={{ 
                    borderRadius: 2,
                    fontWeight: 500,
                    borderColor: selectedRole.color,
                    color: selectedRole.color,
                    '&:hover': {
                      backgroundColor: alpha(selectedRole.color, 0.1)
                    }
                  }}
                />
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h6" 
              sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
            >
              <AccountTreeIcon sx={{ mr: 2, color: selectedRole.color }} />
              Workflow
            </Typography>
            <Box>
              {selectedRole.workflows.map((workflow, index) => (
                <Accordion 
                  key={workflow.groupTitle}
                  sx={{ 
                    mb: 1,
                    '&:before': { display: 'none' },
                    boxShadow: 'none',
                    border: `1px solid ${alpha(selectedRole.color, 0.2)}`,
                    borderRadius: 2
                  }}
                  expanded={expandedWorkflows[workflow.groupTitle] || false}
                  onChange={() => toggleWorkflowExpand(workflow.groupTitle)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: selectedRole.color }} />}
                    sx={{ 
                      minHeight: 'auto',
                      '& .MuiAccordionSummary-content': {
                        margin: '8px 0',
                        alignItems: 'center',
                        display: 'flex',
                        gap: 2
                      }
                    }}
                  >
                    {React.cloneElement(workflow.groupIcon, {
                      color: 'inherit',
                      fontSize: 'small',
                      sx: { 
                        mr: 1,
                        color: selectedRole.color
                      }
                    })}
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: selectedRole.color,
                        fontWeight: 600
                      }}
                    >
                      {workflow.groupTitle}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 1 
                    }}>
                      <Typography 
                        variant="caption" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 1, 
                          pl: 1, 
                          borderLeft: `3px solid ${selectedRole.color}`,
                          fontSize: '0.7rem'
                        }}
                      >
                        {workflow.groupDescription}
                      </Typography>
                      {workflow.items.map((item, itemIndex) => (
                        <Box
                          key={itemIndex}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 1,
                            borderRadius: 1,
                            backgroundColor: alpha(selectedRole.color, 0.05),
                            border: `1px solid ${alpha(selectedRole.color, 0.1)}`
                          }}
                        >
                          {React.cloneElement(item.icon, {
                            color: 'inherit',
                            fontSize: 'small',
                            sx: { 
                              mr: 1,
                              color: selectedRole.color
                            }
                          })}
                          <Box>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                display: 'block', 
                                fontWeight: 600,
                                mb: 0.5,
                                color: selectedRole.color
                              }}
                            >
                              {item.question}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              color="text.secondary"
                              sx={{ 
                                fontSize: '0.7rem',
                                lineHeight: 1.4
                              }}
                            >
                              {item.answer}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Typography 
          variant="h6" 
          sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
        >
          <VerifiedUserIcon sx={{ mr: 2, color: selectedRole.color }} />
          Responsibilities
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: 3 }}
        >
          As a {selectedRole.title}, you play a crucial role in the blockchain land registry ecosystem. 
          Your actions are recorded transparently on the blockchain, ensuring security, 
          trust, and immutability of land-related transactions.
        </Typography>
        
        <Button 
          variant="contained" 
          fullWidth
          sx={{ 
            mt: 2, 
            backgroundColor: selectedRole.color,
            color: 'white',
            '&:hover': {
              backgroundColor: `${selectedRole.color}dd`
            }
          }}
        >
          Select {selectedRole.title} Role
        </Button>
      </RoleDetailPanel>
    </RoleExplorerContainer>
  );
}

function Home() {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const [feedbackRating] = useState(0);
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

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

  const faqGroups = [
    {
      groupTitle: "Understanding Blockchain Land Registry",
      groupSubtitle: "Foundations of Modern Property Management",
      groupDescription: "Explore the revolutionary approach to land ownership and property transactions",
      groupIcon: <SecurityIcon color="primary" />,
      items: [
        {
          question: "What is blockchain technology in land registry?",
          answer: "Blockchain is a decentralized, digital ledger that records property ownership transactions securely and transparently. Each transaction is cryptographically sealed and cannot be altered, providing an immutable record of property ownership.",
          icon: <CodeIcon color="primary" />,
        },
        {
          question: "How does blockchain transform traditional land registry?",
          answer: "Unlike traditional paper-based systems, blockchain creates a transparent, tamper-proof digital record. It eliminates intermediaries, reduces fraud, and provides instant, verifiable property ownership information.",
          icon: <CompareArrowsIcon color="primary" />,
        },
        {
          question: "What makes blockchain more secure than traditional records?",
          answer: "Unlike centralized systems, blockchain distributes data across multiple nodes, eliminating single points of failure. Cryptographic techniques and consensus mechanisms ensure that no single entity can modify the records without network-wide verification.",
          icon: <ShieldIcon color="primary" />,
        }
      ]
    },
    {
      groupTitle: "Property Registration Process",
      groupSubtitle: "Your Journey from Application to Ownership",
      groupDescription: "A comprehensive guide to navigating property registration with blockchain technology",
      groupIcon: <DocumentScannerIcon color="primary" />,
      items: [
        {
          question: "What documents are required for property registration?",
          answer: "Typically, you'll need: proof of identity, property deed, recent tax receipts, land survey documents, proof of address, and any previous ownership transfer documents. Specific requirements may vary by local jurisdiction.",
          icon: <DocumentIcon color="primary" />,
        },
        {
          question: "How does the online registration process work?",
          answer: "The process involves digital document submission, blockchain-powered verification, smart contract execution, and final registration. Each step is transparent, secure, and significantly faster than traditional methods.",
          icon: <ListIcon color="primary" />,
        },
        {
          question: "How long does the registration process take?",
          answer: "With our blockchain-powered platform, the registration process is significantly streamlined. While traditional methods can take weeks or months, our system typically completes registration within 3-7 business days.",
          icon: <AccessTimeIcon color="primary" />,
        },
        {
          question: "What happens if there are disputes in ownership?",
          answer: "Our blockchain system provides a complete, immutable transaction history. In case of disputes, the transparent and verifiable record serves as definitive proof of ownership, making resolution more straightforward.",
          icon: <GavelIcon color="primary" />,
        }
      ]
    },
    {
      groupTitle: "Financial Considerations",
      groupSubtitle: "Transparent Pricing and Financial Insights",
      groupDescription: "Understanding the costs and financial aspects of blockchain-powered property registration",
      groupIcon: <AccountBalanceIcon color="primary" />,
      items: [
        {
          question: "What are the costs involved in property registration?",
          answer: "Registration fees vary by property value and location. Typically, they range from 0.5% to 2% of the property's value. Our platform provides a transparent, upfront fee structure with no hidden charges.",
          icon: <PaymentIcon color="primary" />,
        },
        {
          question: "Are there any additional blockchain-related fees?",
          answer: "No, our blockchain technology is integrated into the standard registration fee. There are no extra charges for using this advanced, secure technology.",
          icon: <LocalOfferIcon color="primary" />,
        },
        {
          question: "Do you offer payment plans or financial assistance?",
          answer: "We collaborate with financial institutions to provide flexible payment options. Some government programs may also offer subsidies or assistance for property registration.",
          icon: <AccountBalanceIcon color="primary" />,
        }
      ]
    },
    {
      groupTitle: "Data Privacy and Security",
      groupSubtitle: "Protecting Your Personal and Property Information",
      groupDescription: "Comprehensive security measures to safeguard your most valuable asset",
      groupIcon: <VerifiedUserIcon color="primary" />,
      items: [
        {
          question: "How do you protect my personal information?",
          answer: "We use advanced encryption, anonymization techniques, and strict access controls. Your personal data is protected through multi-layer security protocols and is only accessible with your explicit consent.",
          icon: <PrivacyTipIcon color="primary" />,
        },
        {
          question: "Who can access my property information?",
          answer: "Only authorized parties with your explicit permission can access specific details. All access attempts are logged on the blockchain, providing a complete, traceable record of information access.",
          icon: <ManageAccountsIcon color="primary" />,
        },
        {
          question: "What happens in case of a potential data breach?",
          answer: "Our decentralized blockchain architecture makes large-scale data breaches virtually impossible. Even if one node is compromised, the distributed nature of the system ensures data integrity and security.",
          icon: <SecurityIcon color="primary" />,
        },
        {
          question: "Can I control my data sharing preferences?",
          answer: "Yes, our platform provides granular privacy controls. You can specify exactly what information is shared, with whom, and for how long, giving you complete control over your personal and property data.",
          icon: <VisibilityIcon color="primary" />,
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Garvit Budhiraja',
      role: 'Real Estate Developer',
      company: 'Urban Horizons LLC',
      quote: 'Blockchain technology has transformed our property verification process. The transparency, security, and efficiency are unparalleled.',
      avatar: '/images/avatars/garvit.jpg',
      rating: 5
    },
    {
      name: 'Shashwat Balodhi',
      role: 'Blockchain Architect',
      company: 'TechBlock Solutions',
      quote: 'As a blockchain expert, I\'m impressed by the robust security and decentralized approach of this land registry platform. It\'s a perfect use case for blockchain technology.',
      avatar: '/images/avatars/shashwat.jpg',
      rating: 4.5
    },
    {
      name: 'Shashidhar Kittur',
      role: 'Government Advisor',
      company: 'Tech Innovation Department',
      quote: 'Our digital transformation strategy has been significantly enhanced by this blockchain-powered land registry system. It sets a new standard for governmental record-keeping.',
      avatar: '/images/avatars/shashidhar.jpg',
      rating: 4.5
    },
    {
      name: 'Rohan Gautam',
      role: 'Legal Consultant',
      company: 'Integrity Legal Services',
      quote: 'The land registry platform provides unprecedented clarity and reduces the complexity of property transactions. It\'s a game-changer for legal professionals.',
      avatar: '/images/avatars/rohan.jpg',
      rating: 5
    },
    {
      name: 'Riya Gupta',
      role: 'Property Investment Manager',
      company: 'Global Property Investments',
      quote: 'The transparency and real-time verification have revolutionized how we assess and invest in properties. Absolutely revolutionary technology.',
      avatar: '/images/avatars/riya.jpg',
      rating: 5
    },
    {
      name: 'Uday Upadhyay',
      role: 'Real Estate Lawyer',
      company: 'Urban Legal Partners',
      quote: 'The smart contract integration has dramatically reduced the time and complexity of property transfers. It\'s like having a digital notary that works 24/7.',
      avatar: '/images/avatars/uday.jpg',
      rating: 5
    },
    {
      name: 'Syed Alwaz Hussain',
      role: 'Technology Consultant',
      company: 'Digital Transformation Group',
      quote: 'This platform demonstrates how blockchain can solve real-world problems. The interoperability and security features are truly cutting-edge.',
      avatar: '/images/avatars/alwaz.jpg',
      rating: 4
    },
    {
      name: 'Chinmay Bhoyar',
      role: 'Sustainable Development Specialist',
      company: 'Green Urban Planning',
      quote: 'The transparent and immutable record-keeping is crucial for sustainable urban development. This platform provides the trust and accountability we need.',
      avatar: '/images/avatars/chinmay.jpg',
      rating: 4.5
    }
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

  const handleRotate = () => {
    setRotation(prev => prev + 120);
  };

  const roles = [
    {
      title: 'Land Owner',
      subtitle: 'Property Management',
      icon: <HomeIcon />,
      description: 'As a land owner, you have complete control over your property records, ensuring transparency and security through blockchain technology.',
      features: [
        'Property Registration',
        'Ownership Verification',
        'Secure Transfer Mechanism',
        'Transparent Ownership Records'
      ],
      workflows: [
        {
          groupTitle: "Register Property",
          groupSubtitle: "Step 1",
          groupDescription: "Register your property on the blockchain",
          groupIcon: <DocumentScannerIcon />,
          items: [
            {
              question: "What is the first step in registering a property?",
              answer: "The first step is to create a digital identity and connect your wallet.",
              icon: <PersonIcon />
            },
            {
              question: "How do I create a digital identity?",
              answer: "You can create a digital identity by providing your personal details and verifying your identity through our platform.",
              icon: <VerifiedUserIcon />
            }
          ]
        },
        {
          groupTitle: "Verify Ownership",
          groupSubtitle: "Step 2",
          groupDescription: "Verify your ownership of the property",
          groupIcon: <VerifiedIcon />,
          items: [
            {
              question: "How do I verify my ownership of the property?",
              answer: "You can verify your ownership by providing proof of ownership documents and undergoing a verification process.",
              icon: <GavelIcon />
            },
            {
              question: "What documents do I need to provide?",
              answer: "You will need to provide proof of ownership documents such as a deed or title.",
              icon: <DocumentIcon />
            }
          ]
        },
        {
          groupTitle: "Transfer Ownership",
          groupSubtitle: "Step 3",
          groupDescription: "Transfer ownership of the property",
          groupIcon: <SwapHorizIcon />,
          items: [
            {
              question: "How do I transfer ownership of the property?",
              answer: "You can transfer ownership by creating a new transaction and verifying the transfer.",
              icon: <ArrowForwardIosIcon />
            },
            {
              question: "What is the verification process?",
              answer: "The verification process involves confirming the transfer details and verifying the new owner's identity.",
              icon: <VerifiedUserIcon />
            }
          ]
        }
      ],
      color: '#1976d2'
    },
    {
      title: 'Government Regulator',
      subtitle: 'Land Management & Compliance',
      icon: <AccountBalanceIcon />,
      description: 'As a government regulator, you oversee land transactions, ensure legal compliance, and maintain the integrity of property records.',
      features: [
        'Transaction Monitoring',
        'Fraud Prevention',
        'Comprehensive Audit Trails',
        'Regulatory Oversight'
      ],
      workflows: [
        {
          groupTitle: "Verify Records",
          groupSubtitle: "Step 1",
          groupDescription: "Verify and validate property records on the blockchain",
          groupIcon: <VerifiedIcon />,
          items: [
            {
              question: "How do I verify property records?",
              answer: "You can access and verify property records through our comprehensive blockchain-based system.",
              icon: <SearchIcon />
            },
            {
              question: "What information can I access?",
              answer: "You can view complete transaction history, ownership details, and verify the authenticity of property documents.",
              icon: <DescriptionIcon />
            }
          ]
        },
        {
          groupTitle: "Compliance Check",
          groupSubtitle: "Step 2",
          groupDescription: "Ensure legal compliance and detect potential irregularities",
          groupIcon: <GavelIcon />,
          items: [
            {
              question: "How do I check for compliance?",
              answer: "Our system provides real-time alerts and comprehensive audit trails for each property transaction.",
              icon: <NotificationImportantIcon />
            },
            {
              question: "What happens if I detect a violation?",
              answer: "You can flag suspicious transactions, initiate investigations, and take necessary legal actions.",
              icon: <ReportProblemIcon />
            }
          ]
        },
        {
          groupTitle: "Land Use Regulation",
          groupSubtitle: "Step 3",
          groupDescription: "Monitor and regulate land use and property transfers",
          groupIcon: <AccountTreeIcon />,
          items: [
            {
              question: "How do I monitor land use?",
              answer: "Track property transfers, zoning changes, and ensure adherence to local land use regulations.",
              icon: <MapIcon />
            },
            {
              question: "Can I update land use policies?",
              answer: "You can update and enforce land use policies directly through the blockchain platform.",
              icon: <PolicyIcon />
            }
          ]
        }
      ],
      color: '#34a853'
    },
    {
      title: 'Real Estate Investor',
      subtitle: 'Property Investment',
      icon: <AttachMoneyIcon />,
      description: 'As a real estate investor, you can explore, analyze, and invest in properties with complete transparency and reduced transaction friction.',
      features: [
        'Property Marketplace',
        'Fractional Ownership',
        'Investment Tracking',
        'Smart Contract Guarantees'
      ],
      workflows: [
        {
          groupTitle: "Property Discovery",
          groupSubtitle: "Step 1",
          groupDescription: "Explore and analyze potential property investments",
          groupIcon: <SearchIcon />,
          items: [
            {
              question: "How do I find investment opportunities?",
              answer: "Browse our blockchain-powered marketplace with comprehensive property details and investment potential.",
              icon: <TrendingUpIcon />
            },
            {
              question: "What information is available?",
              answer: "Access detailed property history, ownership records, valuation trends, and potential returns.",
              icon: <BarChartIcon />
            }
          ]
        },
        {
          groupTitle: "Investment Process",
          groupSubtitle: "Step 2",
          groupDescription: "Execute property investments through secure blockchain transactions",
          groupIcon: <AccountBalanceIcon />,
          items: [
            {
              question: "How do I invest in a property?",
              answer: "Use our platform to invest directly, including options for fractional ownership and smart contract-backed investments.",
              icon: <MonetizationOnIcon />
            },
            {
              question: "What are the investment options?",
              answer: "Choose from full property ownership, fractional shares, or participate in real estate investment trusts (REITs).",
              icon: <AccountTreeIcon />
            }
          ]
        },
        {
          groupTitle: "Portfolio Management",
          groupSubtitle: "Step 3",
          groupDescription: "Track and manage your real estate investment portfolio",
          groupIcon: <DashboardIcon />,
          items: [
            {
              question: "How do I track my investments?",
              answer: "Monitor your property investments, track performance, and manage your portfolio in real-time.",
              icon: <ShowChartIcon />
            },
            {
              question: "Can I sell or trade my investments?",
              answer: "Easily sell or trade your property investments through secure, transparent blockchain transactions.",
              icon: <SwapHorizIcon />
            }
          ]
        }
      ],
      color: '#ff6b6b'
    },
    {
      title: 'Land Surveyor',
      subtitle: 'Property Mapping',
      icon: <MapIcon />,
      description: 'As a land surveyor, you can create, manage, and verify property boundaries with precision and accuracy.',
      features: [
        'Property Mapping',
        'Boundary Verification',
        'Survey Data Management',
        'Compliance Reporting'
      ],
      workflows: [
        {
          groupTitle: "Create Property Map",
          groupSubtitle: "Step 1",
          groupDescription: "Create a digital map of the property boundaries",
          groupIcon: <MapIcon />,
          items: [
            {
              question: "How do I create a property map?",
              answer: "Use our platform to create a digital map of the property boundaries, including GPS coordinates and spatial data.",
              icon: <AddLocationIcon />
            },
            {
              question: "What data do I need to provide?",
              answer: "You will need to provide spatial data, including GPS coordinates, property boundaries, and any relevant survey data.",
              icon: <DataUsageIcon />
            }
          ]
        },
        {
          groupTitle: "Verify Property Boundaries",
          groupSubtitle: "Step 2",
          groupDescription: "Verify the accuracy of property boundaries",
          groupIcon: <VerifiedIcon />,
          items: [
            {
              question: "How do I verify property boundaries?",
              answer: "Use our platform to verify the accuracy of property boundaries, including GPS coordinates and spatial data.",
              icon: <GpsFixedIcon />
            },
            {
              question: "What happens if there are discrepancies?",
              answer: "If there are discrepancies, you can update the property map and boundaries, and notify relevant parties.",
              icon: <ErrorIcon />
            }
          ]
        },
        {
          groupTitle: "Manage Survey Data",
          groupSubtitle: "Step 3",
          groupDescription: "Manage and store survey data for future reference",
          groupIcon: <DescriptionIcon />,
          items: [
            {
              question: "How do I manage survey data?",
              answer: "Use our platform to manage and store survey data, including GPS coordinates, property boundaries, and any relevant survey data.",
              icon: <FolderIcon />
            },
            {
              question: "Can I access historical data?",
              answer: "Yes, you can access historical survey data, including previous property maps and boundaries.",
              icon: <HistoryIcon />
            }
          ]
        }
      ],
      color: '#FF9800' // Deep orange color for Land Surveyor
    },
    {
      title: 'Real Estate Agent',
      subtitle: 'Property Sales',
      icon: <BusinessIcon />,
      description: 'As a real estate agent, you can list, market, and sell properties with ease and efficiency.',
      features: [
        'Property Listings',
        'Marketing Tools',
        'Sales Management',
        'Commission Tracking'
      ],
      workflows: [
        {
          groupTitle: "List Property",
          groupSubtitle: "Step 1",
          groupDescription: "List a property for sale on our platform",
          groupIcon: <AddIcon />,
          items: [
            {
              question: "How do I list a property?",
              answer: "Use our platform to list a property for sale, including property details, pricing, and photos.",
              icon: <PhotoCameraIcon />
            },
            {
              question: "What information do I need to provide?",
              answer: "You will need to provide property details, including address, price, and features, as well as photos and any relevant documents.",
              icon: <DescriptionIcon />
            }
          ]
        },
        {
          groupTitle: "Market Property",
          groupSubtitle: "Step 2",
          groupDescription: "Market the property to potential buyers",
          groupIcon: <PublicIcon />,
          items: [
            {
              question: "How do I market a property?",
              answer: "Use our platform to market the property to potential buyers, including social media, email marketing, and online advertising.",
              icon: <ShareIcon />
            },
            {
              question: "What marketing tools are available?",
              answer: "Our platform provides a range of marketing tools, including social media integration, email marketing, and online advertising.",
              icon: <TrendingUpIcon />
            }
          ]
        },
        {
          groupTitle: "Manage Sales",
          groupSubtitle: "Step 3",
          groupDescription: "Manage the sales process, from offer to closing",
          groupIcon: <AccountBalanceIcon />,
          items: [
            {
              question: "How do I manage sales?",
              answer: "Use our platform to manage the sales process, including offer management, contract negotiation, and closing.",
              icon: <MonetizationOnIcon />
            },
            {
              question: "Can I track commissions?",
              answer: "Yes, our platform allows you to track commissions, including sales data and commission reports.",
              icon: <ShowChartIcon />
            }
          ]
        }
      ],
      color: '#9c27b0'
    }
  ];

  const ProfessionalTestimonialSection = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleTestimonialChange = useCallback((testimonial) => {
      if (testimonial.name !== selectedTestimonial.name) {
        setIsAnimating(true);
        const animationTimer = setTimeout(() => {
          setSelectedTestimonial(testimonial);
          setIsAnimating(false);
        }, 350);

        return () => clearTimeout(animationTimer);
      }
    }, [selectedTestimonial]);

    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: 6,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Trusted by Industry Professionals
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            gap: 2,
            mb: 6
          }}>
            {testimonials.map((testimonial) => (
              <Box 
                key={testimonial.name}
                sx={{
                  position: 'relative',
                  m: 0.5,
                  '&::after': selectedTestimonial.name === testimonial.name ? {
                    content: '""',
                    position: 'absolute',
                    top: '-5px',
                    left: '-5px',
                    right: '-5px',
                    bottom: '-5px',
                    background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
                    borderRadius: '50%',
                    zIndex: -1,
                    opacity: 0.7,
                    filter: 'blur(10px)',
                  } : {}
                }}
              >
                <Avatar
                  src={testimonial.avatar}
                  sx={{ 
                    width: 70, 
                    height: 70, 
                    cursor: 'pointer',
                    border: selectedTestimonial.name === testimonial.name 
                      ? '3px solid #1976d2' 
                      : 'none',
                    boxShadow: selectedTestimonial.name === testimonial.name 
                      ? `0 2px 4px rgba(25, 118, 210, 0.03)` 
                      : 'none',
                    transition: 'all 0.3s ease',
                    transform: selectedTestimonial.name === testimonial.name ? 'scale(1.05)' : 'scale(1)',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                  onClick={() => handleTestimonialChange(testimonial)}
                />
              </Box>
            ))}
          </Box>

          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              maxWidth: 1200, // Changed from 900 to 500
              width: '100%',
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
              transform: isAnimating 
                ? 'perspective(1000px) rotateX(90deg) scale(0.9)' 
                : 'perspective(1000px) rotateX(0deg) scale(1)',
              opacity: isAnimating ? 0 : 1,
              overflow: 'hidden'
            }}
          >
            <FormatQuoteIcon 
              sx={{ 
                fontSize: 50, 
                color: 'text.secondary', 
                opacity: 0.3 
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{ 
                fontStyle: 'italic', 
                mb: 3,
                lineHeight: 1.6,
                maxWidth: 900,
                margin: '0 auto'
              }}
            >
              "{selectedTestimonial.quote}"
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" color="primary" fontWeight="bold">
                {selectedTestimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedTestimonial.role}, {selectedTestimonial.company}
              </Typography>
              <Rating 
                value={selectedTestimonial.rating} 
                readOnly 
                precision={0.5}
                sx={{ mt: 2 }}
              />
            </Box>
          </Paper>
        </Box>
      </Container>
    );
  };

  return (
    <main>
      <HeroContent>
        <Container maxWidth="lg">
          {/* Floating background elements */}
          <FloatingElement sx={{ width: 100, height: 100, top: '10%', left: '10%', animationDelay: '0s' }} />
          <FloatingElement sx={{ width: 60, height: 60, top: '20%', right: '15%', animationDelay: '2s' }} />
          <FloatingElement sx={{ width: 80, height: 80, bottom: '15%', left: '20%', animationDelay: '4s' }} />
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <AnimatedText variant="h2" component="h1" fontWeight="bold" gutterBottom delay="0.2s">
                Revolutionizing Land Registry
              </AnimatedText>
              <AnimatedText variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }} delay="0.4s">
                Secure, transparent, and efficient property transactions powered by blockchain technology.
                Experience the future of real estate management.
              </AnimatedText>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <GlowingButton
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/register')}
                  startIcon={<AddIcon />}
                  sx={{
                    background: '#ffffff',
                    color: 'primary.main',
                    border: '2px solid #ffffff',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  Register Property
                </GlowingButton>
                <GlowingButton
                  variant="outlined"
                  size="large"
                  sx={{
                    background: 'transparent',
                    border: '2px solid white',
                    '&:hover': {
                      border: '2px solid white',
                      background: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                  onClick={() => navigate('/search')}
                  startIcon={<SearchIcon />}
                >
                  Search Properties
                </GlowingButton>
              </Box>
              
              <Grid container spacing={3} sx={{ mt: 6 }}>
                {[
                  { icon: <SecurityIcon />, text: 'Blockchain Secured' },
                  { icon: <SpeedIcon />, text: 'Instant Verification' },
                  { icon: <VerifiedUserIcon />, text: 'Smart Contracts' },
                ].map((item, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 2,
                        p: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          background: 'rgba(255, 255, 255, 0.15)',
                        },
                      }}
                    >
                      {item.icon}
                      <Typography variant="body1">{item.text}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src="/hero-illustration.svg"
                alt="Land Registry Illustration"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  animation: 'float 6s infinite ease-in-out',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </HeroContent>

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <TechnologiesHeading variant="h3">
          Cutting-Edge Technologies Powering Land Registry
        </TechnologiesHeading>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box>
              {/* Top: Carousel */}
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
                    <Typography variant="body2">
                      {item.description}
                    </Typography>
                  </ShowcaseItem>
                ))}
              </RotatingShowcase>

              {/* Bottom: Key Benefits as button-like cards */}
              <Box sx={{ 
                mt: 3, 
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                alignItems: 'flex-start'
              }}>
                {[
                  { title: 'Transparent', icon: <VisibilityIcon fontSize="small" /> },
                  { title: '24/7 Access', icon: <AccessTimeIcon fontSize="small" /> },
                  { title: 'Cost Effective', icon: <BusinessIcon fontSize="small" /> },
                  { title: 'Immutable Records', icon: <SecurityIcon fontSize="small" /> },
                  { title: 'Reduced Fraud', icon: <VerifiedUserIcon fontSize="small" /> }
                ].map((benefit, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    size="small"
                    startIcon={benefit.icon}
                    sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      px: 1.25,
                      py: 0.5,
                      border: '1px solid',
                      borderColor: 'primary.light',
                      color: 'primary.main',
                      background: 'linear-gradient(135deg, #f5f7ff 0%, #ffffff 100%)',
                      fontSize: '0.625rem',
                      minWidth: 'auto',
                      width: 'max-content',
                      lineHeight: 1,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      '.MuiButton-startIcon': {
                        margin: 0,
                        marginRight: '4px'
                      },
                      '&:hover': {
                        background: 'linear-gradient(135deg, #ffffff 0%, #f5f7ff 100%)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    {benefit.title}
                  </Button>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right: Text content */}
          <Grid item xs={12} md={7} sx={{ my: 4 }}>
            <Box sx={{ pl: { md: 6 } }}>
              <Typography variant="h5" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
                Transforming Land Management through Innovation
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                We leverage state-of-the-art blockchain and web technologies to create a revolutionary land registry platform. Our solution goes beyond traditional record-keeping, offering a comprehensive ecosystem that ensures security, transparency, and efficiency for all stakeholders.
              </Typography>
              
              <Box sx={{ mb: 5 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', mb: 2 }}>
                  Innovative Technologies:
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <SecurityIcon color="primary" sx={{ mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                          Advanced Blockchain Security
                        </Typography>
                        <Typography variant="body2">
                          Utilizing decentralized ledger technology to create immutable, tamper-proof land records with end-to-end encryption.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
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
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: 6, 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Choose Your Role
        </Typography>

        <RoleExplorer roles={roles} />
      </Container>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <ProfessionalTestimonialSection />
      </Container>

      <Box sx={{ background: 'linear-gradient(45deg, #f5f5f5 30%, #ffffff 90%)', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Our Services
          </Typography>
          <ServiceGrid container spacing={2}>
            {features.map((service, index) => (
              <ServiceGridItem 
                item 
                xs={12} 
                key={service.title} 
                onClick={() => navigate(service.path)}
                sx={{ 
                  borderBottom: index < features.length - 1 ? '1px solid #e0e0e0' : 'none' 
                }}
              >
                <ServiceIcon className="service-icon">{service.icon}</ServiceIcon>
                <ServiceDetails>
                  <Typography 
                    variant="h6" 
                    className="service-title"
                    sx={{ transition: 'all 0.4s ease' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    className="service-description"
                    sx={{ transition: 'all 0.4s ease' }}
                  >
                    {service.description}
                  </Typography>
                </ServiceDetails>
                <ServiceArrow className="service-arrow" />
              </ServiceGridItem>
            ))}
          </ServiceGrid>
        </Container>
      </Box>

      <FAQSection>
        <Container maxWidth="lg">
          <FAQContainer>
            <FAQHeader variant="h3">
              Frequently Asked Questions
            </FAQHeader>

            {/* Search Field */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              width: '100%', 
              mb: 4 
            }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search FAQs..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 4,
                    maxWidth: 600,
                  }
                }}
              />
            </Box>

            {/* FAQ Groups */}
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { 
                xs: '1fr', 
                md: 'repeat(2, minmax(550px, 1fr))'  
              }, 
              justifyContent: 'center',  
              gap: 4 
            }}>
              {faqGroups.map((group, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    border: '1px solid', 
                    borderColor: 'divider', 
                    borderRadius: 2, 
                    p: 3,
                    width: '100%',  
                    maxWidth: '100%'  
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {group.groupTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {group.groupSubtitle}
                  </Typography>
                  {group.items.map((faq, faqIndex) => (
                    <FAQAccordion
                      key={faqIndex}
                      expanded={expandedPanel === `panel${index}-${faqIndex}`}
                      onChange={handleAccordionChange(`panel${index}-${faqIndex}`)}
                      sx={{ 
                        mb: 2, 
                        borderRadius: 2, 
                        '&:before': { display: 'none' } 
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center' 
                          }}>
                            {expandedPanel === `panel${index}-${faqIndex}` ? <RemoveIcon /> : <AddIcon />}
                          </Box>
                        }
                        sx={{ 
                          '& .MuiAccordionSummary-content': { 
                            display: 'flex', 
                            alignItems: 'center',
                            gap: 2 
                          }
                        }}
                      >
                        <Typography sx={{ fontWeight: 'bold' }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box sx={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: 1 
                        }}>
                          <Typography variant="body2">{faq.answer}</Typography>
                        </Box>
                      </AccordionDetails>
                    </FAQAccordion>
                  ))}
                </Box>
              ))}
            </Box>

            {/* Chatbot and FAQ Buttons */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 2, 
              mt: 4 
            }}>
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<QuestionAnswerIcon />}
                sx={{ 
                  textTransform: 'none',
                  px: 3,
                  py: 1.5
                }}
              >
                See All FAQs
              </Button>
              <Button 
                variant="outlined" 
                color="secondary"
                startIcon={<ForumIcon />}
                sx={{ 
                  textTransform: 'none',
                  px: 3,
                  py: 1.5,
                  borderColor: 'text.secondary',
                  color: 'text.secondary'
                }}
              >
                Ask Chatbot
              </Button>
            </Box>
          </FAQContainer>
          <FAQBackgroundEffect />
        </Container>
      </FAQSection>

      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography
          variant="h3"
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
                readOnly 
                sx={{ mt: 1 }}
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
    </main>
  );
}

export default Home;
