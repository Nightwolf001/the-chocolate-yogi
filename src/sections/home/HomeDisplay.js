import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Container, Typography, DialogTitle } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade, DialogAnimate } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 19,
  paddingTop: theme.spacing(25),
  backgroundColor: theme.palette.design.onPrimary,
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  backgroundColor: theme.palette.design.onPrimary,
  boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.1)"
}));

// ----------------------------------------------------------------------

export default function HomeDisplay() {

  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  const [isOpenModal, setIsOpenModal] = useState(false);

  const cards = [
    {
      full_title: 'DARK SALTED CARAMEL CRUNCH',
      title_1: 'DARK SALTED',
      title_2: 'CARAMEL CRUNCH',
      grams: '35g',
      image: '/assets/illustrations/30_dark_salted_caramel_crunch.png',
      background: theme.palette.chocolate.caramel,
    },
    {
      full_title: 'MYLK CHOCOLATE CREAM',
      title_1: 'MYLK CHOCOLATE',
      title_2: 'CREAM',
      grams: '35g',
      image: '/assets/illustrations/30_mylk_chocolate_cream.png',
      background: theme.palette.chocolate.cream,
    },
    {
      full_title: 'MYLK HUNNYCOMB CRUNCH',
      title_1: 'MYLK HUNNYCOMB',
      title_2: 'CRUNCH',
      grams: '35g',
      image: '/assets/illustrations/30_mylk_hunnycomb_crunch.png',
      background: theme.palette.chocolate.hunnycomb,
    },
    {
      full_title: 'MYLK PEPPERMINT CRUNCH',
      title_1: 'MYLK PEPPERMINT',
      title_2: 'CRUNCH',
      grams: '35g',
      image: '/assets/illustrations/30_mylk_peppermint_crunch.png',
      background: theme.palette.chocolate.peppermint,
    },
    {
      full_title: 'DARK ALMOND SEA SALT',
      title_1: 'DARK ALMOND',
      title_2: 'SEA SALT',
      grams: '70g',
      image: '/assets/illustrations/70_dark_almond_seasalt.png',
      background: theme.palette.chocolate.almond,
    },
    {
      full_title: 'MYLK COOKIE CRUMBLE',
      title_1: 'MYLK COOKIE',
      title_2: 'CRUMBLE',
      grams: '70g',
      image: '/assets/illustrations/70_mylk_cookie_crumble.png',
      background: theme.palette.chocolate.cookie,
    },
    {
      title_1: '',
      title_2: '',
      grams: '',
      image: '',
      background: '',
    },
    {
      full_title: 'MYLK HAZELNUT',
      title_1: 'MYLK HAZELNUT',
      title_2: '',
      grams: '70g',
      image: '/assets/illustrations/70_mylk_hazelnut.png',
      background: theme.palette.chocolate.hazelnut,
    }
  ]

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
    console.log(isOpenModal);
  };

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        <Grid container spacing={5}>
          {cards.map((card, index) => (
            card.title_1 && card.title_1.length !== 0 ? ( 
              <Grid onClick={handleModal} item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', alignItems: 'center', cursor: "pointer" }}>
                <m.div variants={varFade().inUp}>
                <Image src={card.image} alt={card.title} sx={{ width: '100%' }} />
                <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                  <Box sx={{ width: 'auto', height: '100%', textAlign: 'center', borderRadius: '50px', padding: '5px', pl: 2, pr: 2, backgroundColor: card.background }}>
                      <Typography color={theme.palette.chocolate.contrastText} sx={{textAlign: 'center'}} variant="h6">{card.title_1}</Typography>
                  </Box>
                  {card.title_2 && card.title_2.length !== 0 && (
                  <Box sx={{ width: 'auto', height: '100%', textAlign: 'center', borderRadius: '50px', padding: '5px', pl: 2, pr: 2, backgroundColor: card.background, marginTop: -1 }}>
                      <Typography color={theme.palette.chocolate.contrastText} sx={{ textAlign: 'center' }} variant="h6">{card.title_2}</Typography>
                  </Box>
                  )}
                  <Box sx={{ width: 'auto', height: '100%', textAlign: 'center', borderRadius: '30px', padding: '5px', pl: 2, pr: 2, backgroundColor: card.background, marginTop: -1 }}>
                    <Typography color={theme.palette.chocolate.contrastText} sx={{ textAlign: 'center' }} variant="h6">{card.grams}</Typography>
                  </Box>
                </Box>
              </m.div>
            </Grid>
            ) : (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', alignItems: 'center' }}/>
            )
          ))}
        </Grid>
      </Container>
      <Ellipse />
      <DialogAnimate open={isOpenModal} onClose={handleModal}>
        <DialogTitle>Test</DialogTitle>
      </DialogAnimate>
    </RootStyle>
  );
}
