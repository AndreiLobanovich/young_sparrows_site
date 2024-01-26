import {BreakpointsOptions, createTheme, responsiveFontSizes} from '@mui/material/styles';


// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        navButtonText: true;
    }
}

const customBreakpoints: BreakpointsOptions = {
    values: {
        xs: 0,
        sm: 900,
        md: 1024,
        lg: 1280,
        xl: 1920,
    },
};

let theme = createTheme({
    breakpoints: customBreakpoints,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
            body {
              &::-webkit-scrollbar {
                display: none;
              }
              scrollbar-width: none; /* For Firefox */
              -ms-overflow-style: none; /* For Internet Explorer and Edge */
            }
          `,
        },
    },
    palette: {
        text: {
            primary: '#000000',
            secondary: '#FFFFFF',
            disabled: '#F89C27'
        },
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#F89C27',
            dark: '#224A85'
        },
        warning: {
            main: '#F89C27',
        },
        info: {
            main: '#FFFFFF',
        }
    },
    typography: {
        fontFamily: 'Open Sans',
        h1: {
            fontWeight: 800,
            fontSize: 96,
        },
        h2: {
            fontWeight: 800,
            fontSize: 64,
        },
        h3: {
            fontWeight: 400,
            fontSize: 36,
        },
        h5: {
            fontWeight: 800,
            fontSize: 24,
        },

    }
});

theme = responsiveFontSizes(theme, {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
    factor: 5,
});

theme.typography.h1 = {
    [theme.breakpoints.up('sm')]: {
        fontSize: 40,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 48,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 76,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 96,
    },
};
theme.typography.h2 = {
    [theme.breakpoints.up('sm')]: {
        fontSize: 24,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 32,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 48,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 64,
    },
};
theme.typography.h3 = {
    [theme.breakpoints.up('sm')]: {
        fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 24,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 30,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 36,
    },
};
theme.typography.h5 = {
    [theme.breakpoints.up('md')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 21,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 24,
    },
};


export default theme;
