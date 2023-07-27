import { extendTheme, theme as base } from "@chakra-ui/react";


export const FCIBTheme = extendTheme({
    fonts: {
        heading: `Glober, ${base.fonts.heading}`,
        body: `Glober, ${base.fonts.body}`,
    },

    styles: {
        global: {
            body: {
                fontFamily: 'body',
                fontSize: '16px',
                textColor: 'primaryText',
            },
            bodyLarge: {
                fontFamily: 'body',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '0px',
                paragraphSpacing: '0px'
            },
            h1 : {
                fontSize: '10rem',
                fontWeight: '700',
                lineHeight: '110%',
                letterSpacing: '-2%',
            },
            h2: {
                fontFamily: 'heading',
                fontSize: '6rem',
                fontWeight: 'semibold',
                lineHeight: '110%',
                letterSpacing: '-1%',
            },
            h3 : {
                fontFamily: 'heading',
                fontSize: '32px',
                fontWeight: 'SemiBold',
                lineHeight: '48px',
                letterSpacing: '0px',
                textDecoration: 'none',
                paragraphSpacing: '0px',
                case: 'original'
            },
            h4: {
                fontFamily: 'heading',
                fontSize: '24px',
                fontWeight: 'SemiBold',
                lineHeight: '40px',
                letterSpacing: '0px',
                textDecoration: 'none',
                paragraphSpacing: '0px',
                case: 'original'
            },
            h5: {
                fontFamily: 'heading',
                fontSize: '20px',
                fontWeight: 'SemiBold',
                lineHeight: '30px',
                letterSpacing: '-0.5%',
                textDecoration: 'none',
                paragraphSpacing: '0px',
                case: 'original'
            }
        },
    },
    
    colors: {
        brand: {
            50: 'rgba(175, 11, 28, 1)',
            100: 'rgba(212, 1, 57, 1)',
            200: 'rgba(255, 212, 0, 1)',
            300: 'rgba(105, 0, 125, 1)',
            400: 'rgba(38, 107, 156, 1)',
            500: 'rgba(149, 168, 0, 1)',
            600: 'rgba(175, 11, 28, 1)',
            700: '',
            800: '',
            900: '',
        },
        'fcib.white': 'rgba(255, 255, 255, 1)',
        'fcib.black': 'rgba(0, 0, 0, 1)',
        'fcib.claret': 'rgba(175, 11, 28, 1)',
        'fcib.blueLighter90': 'rgba(241, 249, 254, 1)',
        'fcib.blueDarker40': 'rgba(41, 112, 163, 1)',
        'fcib.blueDarker60': 'rgba(13, 77, 119, 1)',
        'fcib.blueDarker70': 'rgba(5, 60, 97, 1)',
        'fcib.accentRed': 'rgba(213, 1, 58, 1)',
        'fcib.accentRedLighter90': 'rgba(251, 229, 234, 1)',
        'fcib.accentRedDarker10': 'rgba(193, 1, 52, 1)',
        'fcib.accentRedDarker20': 'rgba(173, 1, 47, 1)',
        'fcib.gold': 'rgba(255, 212, 0, 1)',
        'fcib.purple': 'rgba(105, 0, 125, 1)',
        'fcib.blue': 'rgba(38, 107, 156, 1)',
        'fcib.lime': 'rgba(149, 168, 0, 1)',
        'fcib.green': 'rgba(114, 169, 78, 1)',
        'fcib.greyLighter10': 'rgba(170, 173, 182, 1)',
        'fcib.greyLighter20': 'rgba(200, 202, 208, 1)',
        'fcib.greyLighter30': 'rgba(225, 226, 229, 1)',
        'fcib.greyLighter40': 'rgba(235, 236, 239, 1)',
        'fcib.greyLighter50': 'rgba(244, 245, 246, 1)',
        'fcib.errorText' : 'rgba(173, 11, 27)',
        titleText: 'rgba(34, 54, 68, 1)',
        primaryText: 'rgba(42, 44, 50, 1)',
        secondaryText: 'rgba(143, 155, 163, 1)',
        bgDisabled: 'rgba(212, 218, 221, 1)',
        bgGray: 'rgba(239, 239, 239, 1)',
        textDisabled: 'rgba(146, 160, 170, 1)',
        'error.400': 'rgba(212, 1, 57, 1)',
        'error.50': 'rgba(255, 229, 234, 1)',
        active: 'rgba(143, 203, 244, 1)',
    },
})
