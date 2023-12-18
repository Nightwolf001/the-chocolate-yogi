import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(20),
  backgroundColor: theme.palette.design.default,
  position: 'relative',
  zIndex: 12,
  [theme.breakpoints.up('md')]: {
  },
}));

const Ellipse = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: -1,
  borderRadius: '50%',
  width: '100%',
  height: "200px",
  right:0,
  left:0,
  bottom: "-100px",
  backgroundColor: theme.palette.design.def,
  boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.1)"
}));

// ----------------------------------------------------------------------

export default function HomeRetailers({ selectedTheme }) {
  if (selectedTheme === null) return null;
  
  return (
    <RootStyle>
      <Container sx={{zIndex: 10}} component={MotionViewport}>
        <Box sx={{ textAlign: 'center', mb: { xs: 10, md: 5 }}}>
          <m.div variants={varFade().inDown}>
            <Typography color={selectedTheme.palette.default} variant="h3">
              Available at these retailers
            </Typography>
          </m.div>
        </Box>
          
        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>

          <Grid item xs={12} sm={6} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src={"/logo/well.png"} alt={"wellness"} sx={{ width: '70%', margin: "0 auto" }} />
            </m.div>
          </Grid>
        
          <Grid item xs={12} sm={6} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src={"/logo/ftn.png"} alt={"faithfull"} sx={{ width: '70%', margin: "0 auto" }} />
            </m.div>
          </Grid>

        </Grid>
           
      </Container>
      {/* <Ellipse/> */}
    </RootStyle>
  );
}