'use client'

import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#4FE63B',
        },
        secondary: {
            main: '##d23be6',
        },
    },
    shape:{
        borderRadius: 20,
    }
});

export default theme;
