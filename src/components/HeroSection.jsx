import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function HeroSection() {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                backgroundImage: 'url(/hero-img.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                overflow: 'hidden',
            }}
        >
            {/* Filtro oscuro */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }}
            />

            {/* Contenido - con zIndex mayor para que aparezca sobre el filtro */}
            <Container
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h2" gutterBottom>
                    Bienvenidos a Cholchol
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
                    Bienvenido al sitio web de la Municipalidad de Cholchol.
                    Aquí encontrarás información actualizada sobre servicios, noticias comunales y canales de contacto directo para resolver tus consultas.
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    Ver más
                </Button>
            </Container>
        </Box>
    );
}