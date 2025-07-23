"use client";

import React from 'react';
import { Box, Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';
import BrainIcon from '@mui/icons-material/Science';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
}));

const BrainImageWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  backgroundColor: 'transparent',
}));

const HomeScreen: React.FC = () => {
  const emergencyContacts = [
    {
      name: 'Dr. John Doe',
      type: 'Medical Contact',
      phone: '123-456-7890',
      email: 'johndoe@example.com',
      address: '123 Main St, Springfield, IL',
    },
    {
      name: 'Jane Smith',
      type: 'Emergency Contact',
      phone: '098-765-4321',
      email: 'janesmith@example.com',
      address: '456 Elm St, Springfield, IL',
    },
  ];

  const appFeatures = [
    'Memory games to enhance cognitive abilities',
    'Comprehensive dashboards for tracking health',
    'Search functionality to find credible information',
    'Informative videos for caregivers and patients',
    'Networking sections for connecting with others',
    'Networking events by region',
  ];

  return (
    <Container>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Typography variant="h6" gutterBottom color="red">
                <ContactPhoneIcon /> Emergency Contacts
              </Typography>
              <List>
                {emergencyContacts.map((contact, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`${contact.name} (${contact.type})`}
                      secondary={
                        <>
                          <Typography component="span" variant="body2">
                            Phone: {contact.phone}
                          </Typography>
                          <br />
                          <Typography component="span" variant="body2">
                            <EmailIcon fontSize="small" /> {contact.email}
                          </Typography>
                          <br />
                          <Typography component="span" variant="body2">
                            <HomeIcon fontSize="small" /> {contact.address}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Typography variant="h6" gutterBottom color="primary">
                <InfoIcon /> About the App
              </Typography>
              {/* <Typography variant="body2">
                Dementia Defender is designed to support individuals and families affected by dementia. Our app includes:
              </Typography> */}
              <List>
                {appFeatures.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <BrainImageWrapper>
              <img src="brain.png" alt="Brain" style={{ width: '100%', height: 'auto' }} />
            </BrainImageWrapper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeScreen;
