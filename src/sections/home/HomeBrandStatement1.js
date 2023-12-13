import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(24),
  backgroundColor: theme.palette.design.darkTertiary,
  position: 'relative',
  zIndex: 15,
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(.5),
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
  backgroundColor: theme.palette.design.darkTertiary,
  boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.1)"
}));

// ----------------------------------------------------------------------

export default function HomeBrandStatement1() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';
  
  return (
    <RootStyle>
      <Container sx={{zIndex: 10}} component={MotionViewport}>
        <Box sx={{ textAlign: 'center', mb: { xs: 10, md: 5 }}}>
          <m.div variants={varFade().inDown}>
            <Typography color={theme.palette.design.contrastText} variant="h3">
              Vegan and Cruelty Free
            </Typography>
          </m.div>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Typography color={theme.palette.design.contrastText} sx={{ mb: 2 }} variant="body1">The Chocolate Yogi bars are handmade from ingredients which do not harm animals in any way, so you can indulge with a happy heart.</Typography>
          </m.div>
        </Box>
      </Container>
      <Ellipse/>
    </RootStyle>
  );
}