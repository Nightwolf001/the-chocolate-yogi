import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
//
// context
import { ThemeContext } from '../contexts/ThemeContext';
import Logo from './Logo';
import ProgressBar from './ProgressBar';

LoadingScreen.propTypes = {
  isDashboard: PropTypes.bool,
};

export default function LoadingScreen({ isDashboard, ...other }) {

  const { selectedThemeName, selectedTheme, isThemeReady } = useContext(ThemeContext);
  
  if (isThemeReady === false) return null;

  const RootStyle = styled('div')(({ theme }) => ({
    right: 0,
    bottom: 0,
    zIndex: 99999,
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: selectedTheme.palette.main,
  }));
  return (
    <>
      {/* <ProgressBar /> */}

      {!isDashboard && (
        <RootStyle {...other}>
          <p>.</p>
        </RootStyle>
      )}
    </>
  );
}
