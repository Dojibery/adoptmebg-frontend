/* eslint-disable quotes */
import { createTheme, Theme } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
    interface Palette {
        dark: React.CSSProperties['color'];
        grayDark: React.CSSProperties['color'];
        grayMedium: React.CSSProperties['color'];
        grayLight: React.CSSProperties['color'];
        white: React.CSSProperties['color'];
        red: React.CSSProperties['color'];
        green: React.CSSProperties['color'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        dark: React.CSSProperties['color'];
        grayDark: React.CSSProperties['color'];
        grayMedium: React.CSSProperties['color'];
        grayLight: React.CSSProperties['color'];
        white: React.CSSProperties['color'];
        red: React.CSSProperties['color'];
        green: React.CSSProperties['color'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        containedSecondary: true;
    }
}

const darkColor = '#000';
const grayDarkColor = '#828282';
const yellow = '#E4A43F';
const whiteColor = '#fff';
const grayMediumColor = '#DBDBDB';

let theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h2: {
            fontSize: 36,
            textTransform: 'uppercase',
            fontWeight: 500,
        },
        h4: {
            fontSize: 24,
            fontWeight: 500,
        },
        h6: { lineHeight: 1.2 },
        subtitle1: {
            fontSize: 16,
            textTransform: 'uppercase',
            fontWeight: 700,
        },
        subtitle2: {
            fontSize: 14,
            textTransform: 'uppercase',
            fontWeight: 700,
        },
        caption: {
            fontSize: 12,
            lineHeight: 1.4,
            display: 'block',
        },
    },
    palette: {
        dark: darkColor,
        grayDark: grayDarkColor,
        grayMedium: grayMediumColor,
        grayLight: '#F5F5F5',
        white: whiteColor,
        red: '#ED2727',
        green: '#49B737',
        primary: { main: darkColor },
        secondary: { main: yellow },
    },
    components: {
        MuiContainer: { defaultProps: { maxWidth: 'xl' } },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'containedSecondary' },
                    style: {
                        "backgroundColor": darkColor,
                        "color": whiteColor,
                        '&:hover': {
                            backgroundColor: whiteColor,
                            color: darkColor,
                        },
                    },
                },
            ],
            defaultProps: {
                color: 'primary',
                variant: 'contained',
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    fontWeight: 700,
                },
                sizeLarge: {
                    paddingTop: 16,
                    paddingBottom: 14,
                    paddingLeft: 22,
                    paddingRight: 22,
                },
                outlined: { borderColor: whiteColor },
            },
        },
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    height: 80,
                    borderTop: `1px solid ${grayMediumColor}`,
                },
            },
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    '& svg': {
                        marginBottom: 10,
                        display: 'block',
                        width: 24,
                        height: 24,
                    },
                    '& .Mui-selected': {
                        color: whiteColor,
                        fontSize: '11px !important',
                    },
                },
                label: {
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: grayMediumColor,
                },
            },
        },
        MuiDialog: {
            defaultProps: { maxWidth: 'xl' },
            styleOverrides: {
                paper: {
                    margin: 10,
                    maxHeight: 'calc(100% - 20px)',
                    borderRadius: 6,
                },
            },
        },
        MuiMenu: {
            defaultProps: { elevation: 0 },
            styleOverrides: {
                list: {
                    border: `1px solid ${grayDarkColor}`,
                    borderRadius: '6px',
                    boxShadow: '0 0 2px rgb(0 0 0 / 14%), 0 0 9px 0 rgb(48 48 48 / 16%)',
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 42,
                    height: 26,
                    padding: 0,
                    margin: '0 !important',
                },
                switchBase: {
                    "padding": 0,
                    "margin": 2,
                    "transitionDuration": '300ms',
                    '&.Mui-checked': {
                        "transform": 'translateX(16px)',
                        "color": '#fff',
                        '& + .MuiSwitch-track': {
                            opacity: 1,
                            border: 0,
                        },
                        '&.Mui-disabled + .MuiSwitch-track': { opacity: 0.5 },
                    },
                    '&.Mui-focusVisible .MuiSwitch-thumb': {
                        color: '#00000',
                        border: '6px solid #fff',
                    },
                    '&.Mui-disabled .MuiSwitch-thumb': { color: '#828282' },
                },
                thumb: {
                    boxSizing: 'border-box',
                    width: 22,
                    height: 22,
                },
                track: {
                    borderRadius: 26 / 2,
                    opacity: 0.5,
                    backgroundColor: '#828282',
                },
            },
        },
        MuiAutocomplete: { styleOverrides: { popper: { zIndex: 1301 } } },
    },
});

theme = createTheme(theme, {
    components: {
        MuiTooltip: {
            defaultProps: {
                enterTouchDelay: 0,
                enterDelay: 0,
                leaveTouchDelay: 5000,
            },
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.common.black,
                    color: theme.palette.common.white,
                    padding: '18px',
                    borderRadius: '20px',
                    boxShadow: '3px 3px 7px rgba(0, 0, 0, 0.25)',
                    textAlign: 'center',
                    fontSize: '12px',
                },
            },
        },
    },
} as Theme);

export default theme;
