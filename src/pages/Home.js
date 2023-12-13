// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
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
  return (
    <Page title="The Chocolate Yogi">
      <HomeHero />

      <ContentStyle>
        <HomeIntro />

        <HomeSellingPoint />

        <HomeDisplay />

        <HomeBrandStatement1 />

        <HomeBrandStatement2 />

        <HomeBrandStatement3 />

        <HomeRetailers />
        <HomeAdvertisement />
      </ContentStyle>
    </Page>
  );
}
