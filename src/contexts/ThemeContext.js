import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
// utils
import axios from '../utils/axios';
// theme
import palette from '../theme/palette';

const ThemeContext = createContext();

ThemeProvider.propTypes = {
    children: PropTypes.node,
};


function ThemeProvider({ children }) {

    const theme = useTheme();

    const themes = ['cookie'];
    const [isThemeReady, setIsThemeReady] = useState(false);
    const [selectedThemeName, setSelectedThemeName] = useState(themes[Math.floor(Math.random() * themes.length)]);
    const [selectedTheme, setSelectedTheme] = useState(null);

    const fetchData = async (theme) => {
        
        const response = await axios.get(`/api/${theme}/?populate[Intro]=*&populate[selling_points]=*&populate[products][populate]=pack_shot.image&populate[products][populate]=pack_illustration.image&populate[prop_1]=*&populate[prop_2]=*&populate[prop_3]=*`);
        const { data } = response.data;
        console.log(data);
        return data;
        // setSelectedThemeName(data.theme);
    }

    useEffect(() => {
        (async () => {

            if (selectedThemeName === null) return null;
            const { attributes } = await fetchData(selectedThemeName);
            console.log(attributes);

            if (selectedThemeName === 'cookie') {
                setSelectedTheme({
                    name: selectedThemeName,
                    palette: {
                        contrastText: '#EAE4D0',
                        default: '#184775',
                        main: '#F47C63',
                        secondary: '#A0A1C5',
                        textPrimary: '#EAE4D0',
                        onPrimary: '#EAE4D0',
                        textSecondary: '#184775',
                        darkSecondary: '#5E68A1',
                        tertiary: '#B16973',
                        darkTertiary: '#974160',
                        quaternary: '#B1D9CC',
                        quinary: '#0F1111',
                    },
                    assets: {
                        hero: "/assets/range/cookie/yogi.png",
                        logo: "/assets/range/cookie/logo.svg",
                        el_1: "/assets/range/cookie/illustration_hero_1.svg",
                        el_2: "/assets/range/cookie/illustration_hero_2.svg",
                    },
                    ...attributes,
                });
                setIsThemeReady(true);
            }

            if (selectedThemeName === 'peppermint') {
                setSelectedTheme({
                    name: selectedThemeName,
                    palette: {
                        default: '#8C88B2',
                        contrastText: '#EAE4D0',
                        main: '#AACC3F',
                        secondary: '#5E68A0',
                        textPrimary: '#8C88B2',
                        onPrimary: '#EAE4D0',
                        textSecondary: '#184775',
                        darkSecondary: '#8C88B2',
                        tertiary: '#668D6D',
                        darkTertiary: '#5F7267',
                        quaternary: '#E77A34',
                        quinary: '#617267',
                    },
                    assets: {
                        hero: "/assets/range/peppermint/yogi.png",
                        logo: "/assets/range/peppermint/logo.svg",
                        el_1: "/assets/range/peppermint/illustration_hero_1.svg",
                        el_2: "/assets/range/peppermint/illustration_hero_2.svg",
                    },
                    ...attributes,
                });
                setIsThemeReady(true);
            }

        })();
    }, []);

    console.log(selectedTheme);
    const value = {
        selectedThemeName,
        selectedTheme,
        isThemeReady
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };




