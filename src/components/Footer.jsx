import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: '#263238', color: 'white', textAlign: 'center', p: 2 }}>
            <Typography>&copy; {new Date().getFullYear()} Municipalidad de Cholchol. Todos los derechos reservados.</Typography>
        </Box>
    );
}