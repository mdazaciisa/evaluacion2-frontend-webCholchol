import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, Grid, Container, useTheme } from '@mui/material';
import { Box } from '@mui/material';

export default function Noticias() {
    const theme = useTheme();

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        setNoticias([
            { id: 1, titulo: 'Fiesta costumbrista en Cholchol', resumen: 'Se realizará el próximo fin de semana.', imagen: './public/fiesta-costumbrista.jpeg' },
            { id: 2, titulo: 'Nuevo Cesfam para la comuna', resumen: 'Inauguración prevista para agosto.', imagen: './public/cesfam.png' },
            { id: 3, titulo: 'Limpieza del río Cholchol', resumen: 'Convocatoria de voluntarios este sábado.', imagen: './public/limpieza-rio.png' },
        ]);
    }, []);

    return (
        <Box
            id="noticias"
            sx={{
                py: 6,
                px: 2,
                scrollMarginTop: '80px'
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    align="center" // Título centrado
                    sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: theme.palette.primary.main,
                        fontSize: { xs: '2rem', md: '2.75rem' }
                    }}
                >
                    Noticias
                </Typography>

                <Grid
                    container
                    spacing={4}
                    justifyContent={{ xs: 'center', sm: 'flex-start' }} // Centrado en móviles
                >
                    {noticias.map((noticia) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={noticia.id}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center' // Centrar la card dentro de su celda
                            }}
                        >
                            <Card sx={{
                                maxWidth: { xs: '100%', sm: '100%' },
                                width: { xs: '100%', sm: '100%' },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={noticia.imagen}
                                    alt={noticia.titulo}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom>{noticia.titulo}</Typography>
                                    <Typography variant="body2">{noticia.resumen}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}