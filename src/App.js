import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';
import { ChartStyle } from './components/chart';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import NotistackProvider from './components/NotistackProvider';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

const firebaseConfig = {
  apiKey: "AIzaSyB2wkrWNH-sW6fVhCIfnUgenztkyOEF_gM",
  authDomain: "the-chocolate-yogi.firebaseapp.com",
  projectId: "the-chocolate-yogi",
  storageBucket: "the-chocolate-yogi.appspot.com",
  messagingSenderId: "117925996531",
  appId: "1:117925996531:web:2d94e3b36681d3eb145486",
  measurementId: "G-4WV1WJMZRQ"
};

// ----------------------------------------------------------------------

export default function App() {

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeSettings>
          <NotistackProvider>
            <ProgressBarStyle />
            <ChartStyle />
            <ScrollToTop />
            <Router />
          </NotistackProvider>
        </ThemeSettings>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}
