import { m, useTransform, useViewportScroll } from 'framer-motion';
// import { motion,  } from "framer-motion"
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';

// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';

export default function HomeHero({ selectedTheme }) {

  if (selectedTheme === null) return null;
  const RootStyle = styled(m.div)(({ theme }) => ({
    position: 'relative',
    height: '80vh',
    backgroundColor: selectedTheme.palette.main,
    [theme.breakpoints.up('md')]: {
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      position: 'fixed',
      alignItems: 'center',
    },
  }));

  const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'left',
    },
  }));

  const HeroLogoStyle = styled(m.img)(({ theme }) => ({
    top: 15,
    right: 0,
    zIndex: 8,
    width: '100%',
    margin: 'auto',
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      right: '8%',
      width: '50%'
    },
  }));

  const HeroImgStyle = styled(m.img)(({ theme }) => ({
    bottom: -30,
    left: 0,
    zIndex: 8,
    width: '90%',
    margin: 'auto',
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      left: '16%',
      width: '45%'
    },
  }));

  const HeroAssetLeftStyle = styled(m.img)(({ theme }) => ({
    top: 225,
    left: 0,
    zIndex: 8,
    width: '50%',
    margin: 'auto',
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      top: 85,
      left: '0%',
      width: '25%'
    },
  }));

  const HeroAssetRightStyle = styled(m.img)(({ theme }) => ({
    bottom: 205,
    right: 0,
    zIndex: 8,
    width: '100%',
    margin: 'auto',
    position: 'absolute',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      right: '0%',
      width: '20%'
    },
  }));

  return (
    <MotionContainer>
      <RootStyle>

        <HeroAssetLeftStyle
          alt="asset"
          src={selectedTheme.assets.el_1}
          variants={varFade().inLeft}
          animate={{ y: [-20, 0, -20] }} transition={{ duration: 4, repeat: Infinity }}
        />

        <HeroImgStyle
          alt="logo"
          src={selectedTheme.assets.hero}
          variants={varFade().inUp}
        />

        <HeroLogoStyle
          alt="logo"
          src={selectedTheme.assets.logo}
          variants={varFade().inDown}
        />

        <HeroAssetRightStyle
          alt="asset"
          src={selectedTheme.assets.el_2}
          variants={varFade().inRight}
          animate={{ y: [-20, 0, -20] }} transition={{ duration: 4, repeat: Infinity }}
        />

      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
