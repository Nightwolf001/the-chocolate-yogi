import { m } from 'framer-motion';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Button, Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 11,
  paddingTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomeAdvertisement({ selectedTheme }) {
  if (selectedTheme === null) return null;
  
  return (
  <RootStyle>
    <Container component={MotionViewport}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={4}>
            <m.div variants={varFade().inUp}>
              <Typography color={selectedTheme.palette.default} variant="h7">021 701 7172</Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="body2">Available Monday to Friday, 08:00 to 16:30 CAT (excl. public holidays). If we are unavailable, you are welcome to leave us a message.</Typography>
            </m.div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <m.div variants={varFade().inUp}>
              <Typography color={selectedTheme.palette.default} variant="h7">info@thechocolateyogi.com</Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="body2">Feel free to send a note to our customer care inbox.
                Please allow 3-5 business days for us to respond thoughtfully.</Typography>
            </m.div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <m.div variants={varFade().inUp}>
              <Typography color={selectedTheme.palette.default} variant="h7">The Chocolate Yogi is a division of True Health Brands (Pty) Ltd</Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="body2">8 Duiker Street, Beaconvale, South Africa, 7500</Typography>
            </m.div>
          </Grid>
        </Grid>
    </Container>
  </RootStyle>
  );
}
