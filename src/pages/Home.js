import React, { useState, useEffect, useRef, useContext } from 'react';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
import Page from '../components/Page';
// context
import { ThemeContext } from '../contexts/ThemeContext';
// sections
import {
  HomeHero,
  HomeIntro,
  HomeDisplay,
  HomeRetailers,
  HomeSellingPoint,
  HomeAdvertisement,
  HomeBrandStatement1,
  HomeBrandStatement2,
  HomeBrandStatement3,
} from '../sections/home';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {

  const theme = useTheme();
  const { selectedThemeName, selectedTheme, isThemeReady } = useContext(ThemeContext);

  if (isThemeReady === false) return null;
  return (
    <Page title="The Chocolate Yogi">
      <HomeHero selectedTheme={selectedTheme} />

      <ContentStyle>

        <HomeIntro selectedTheme={selectedTheme} />
      
        <HomeSellingPoint selectedTheme={selectedTheme} />

        <HomeDisplay selectedTheme={selectedTheme} />

        <HomeBrandStatement1 selectedTheme={selectedTheme} />

        <HomeBrandStatement2 selectedTheme={selectedTheme} />

        <HomeBrandStatement3 selectedTheme={selectedTheme} />

        <HomeRetailers selectedTheme={selectedTheme} />

        <HomeAdvertisement selectedTheme={selectedTheme} />
        
      </ContentStyle>
    </Page>
  );
}
