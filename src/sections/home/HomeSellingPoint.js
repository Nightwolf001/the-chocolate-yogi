import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 20,
  paddingTop: theme.spacing(25),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

const Ellipse = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: -1,
  borderRadius: '50%',
  width: '100%',
  height: "200px",
  right: 0,
  left: 0,
  bottom: "-100px",
  backgroundColor: theme.palette.background.default,
  boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.1)"
}));

// ----------------------------------------------------------------------

export default function HomeHugePackElements() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  const cards = [
    {
      title: 'NO ADDED CANE SUGAR',
      color: theme.palette.design.darkSecondary,
      background: theme.palette.design.secondary,
    },
    {
      title: 'GMO-FREE',
      color: theme.palette.design.textPrimary,
      background: theme.palette.design.darkTertiary,
    },
    {
      title: 'PALM OIL-FREE',
      color: theme.palette.design.secondary,
      background: theme.palette.design.quinary,
    },
    {
      title: 'GLUTEN-FREE',
      color: theme.palette.design.tertiary,
      background: theme.palette.design.quaternary,
    },
    {
      title: 'PLANT BASED',
      color: theme.palette.design.textPrimary,
      background: theme.palette.design.main,
    },
    {
      title: 'PRESERVATIVE-FREE',
      color: theme.palette.design.textPrimary,
      background: theme.palette.design.darkSecondary,
    },
  ]

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container spacing={5} justifyContent="center">
          {cards.map((card, index) => (
            <Grid key={index} item sx={{ display: 'flex', alignItems: 'center' }}>
              
                <m.div variants={varFade().inUp}>
                  <Box sx={{ width: '100%', height: '100%', textAlign: 'center', borderRadius: '50px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '10px',pl: 5, pr: 5, backgroundColor: card.background}}>
                  <Typography variant="h4" sx={{ color: card.color, letterSpacing: 3 }}>
                    {card.title}
                  </Typography>
                  </Box>
                </m.div>
              
            </Grid>
          )) 
          }
        </Grid>
      </Container>
      <Ellipse />
    </RootStyle>
  );
}


