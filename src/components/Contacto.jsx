import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, useTheme, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Contacto() {
    const theme = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar el envío del formulario
        console.log('Formulario enviado');
    };

    return (
        <Box
            id="contacto"
            sx={{
                py: 6,
                px: 2,
                scrollMarginTop: '80px',
                backgroundColor: '#f9f9f9'
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    align="center"
                    sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: theme.palette.primary.main,
                        fontSize: { xs: '2rem', md: '2.75rem' }
                    }}
                >
                    Contáctanos
                </Typography>

                {/* Descripción de la sección */}
                <Box sx={{ maxWidth: '900px', mx: 'auto', mb: 5, textAlign: 'justify' }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium', color: theme.palette.primary.main, textAlign: 'center' }}>
                        Estamos para Servirte
                    </Typography>
                    <Typography variant="body1">
                        En la Municipalidad de Cholchol queremos estar cerca de nuestros vecinos. Si tienes consultas, sugerencias o requieres información sobre servicios municipales, no dudes en contactarnos.
                    </Typography>
                    <Typography variant="body1">
                        Nuestro equipo está comprometido con entregar una atención oportuna y de calidad para todos los habitantes de nuestra comuna. Completa el formulario y nos pondremos en contacto contigo a la brevedad posible.
                    </Typography>
                    <Typography variant="body1">
                        También puedes visitarnos en nuestras oficinas, llamarnos por teléfono o enviarnos un correo electrónico directamente.
                    </Typography>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 2, textAlign: 'center' }}>
                        Tu opinión es importante para seguir mejorando nuestra gestión municipal.
                    </Typography>


                    <Box sx={{ mt: 4 }}>
                        <Paper elevation={3} sx={{ p: 6, width: '100%' }}>
                            <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main }}>
                                Envíanos un mensaje
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2} direction={'column'}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Nombre"
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Apellido"
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Correo electrónico"
                                            variant="outlined"
                                            type="email"
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Mensaje"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            sx={{ px: 4 }}
                                        >
                                            Enviar mensaje
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}