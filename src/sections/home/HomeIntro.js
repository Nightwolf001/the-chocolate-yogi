import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  backgroundColor: theme.palette.design.secondary,
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(5),
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
  backgroundColor: theme.palette.design.secondary,
  boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.1)"
}));

// ----------------------------------------------------------------------

export default function HomeIntro() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';
  
  return (
    <RootStyle>
      <Container sx={{zIndex: 10}} component={MotionViewport}>
        <Box sx={{ textAlign: 'center', mb: { xs: 10, md: 5 }}}>
          <m.div variants={varFade().inDown}>
            <Typography color={theme.palette.design.contrastText} variant="h3">
              Enjoy guilt-free indulgence with
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography color={theme.palette.design.contrastText} variant="h3">The Chocolate Yogi</Typography>
          </m.div>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Typography color={theme.palette.design.contrastText} sx={{ mb: 2 }} variant="body1">Using artisanal chocolate making techniques, The Chocolate Yogi’s award-winning creations are lovingly crafted with antioxidant rich cacao and cocoa.</Typography>
            <Typography color={theme.palette.design.contrastText} variant="body1">Our formulations are free from GMOs and preservatives and avoid the use of palm oil and cane sugar. Crafted to be both gluten-free and irresistibly creamy, our unique recipes deliver a delightful and wholesome experience.</Typography>
          </m.div>
        </Box>
      </Container>
      <Ellipse/>
    </RootStyle>
  );
}
