// components/Services.js
import React, { useState } from 'react';
import {
  Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button, CardActionArea, Dialog,
  DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton, useMediaQuery, useTheme,
  Divider, Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Trámites Municipales',
      description: 'Gestiona tus trámites municipales como permisos, certificados y solicitudes.',
      icon: <AssignmentIcon sx={{ fontSize: 60 }} />,
      color: '#FFC107',
      details: `
        <h3>Trámites Disponibles:</h3>
        <ul>
          <li>Certificado de Residencia</li>
          <li>Permiso de Circulación</li>
          <li>Patentes Comerciales</li>
          <li>Licencia de Conducir</li>
          <li>Permisos de Edificación</li>
        </ul>
        <p>Para realizar estos trámites, puede dirigirse a nuestras oficinas o utilizar nuestra plataforma digital.</p>
      `
    },
    {
      id: 2,
      title: 'Desarrollo Comunitario',
      description: 'Programas de apoyo a organizaciones sociales y comunitarias.',
      icon: <GroupsIcon sx={{ fontSize: 60 }} />,
      color: '#FF9800',
      details: `
        <h3>Programas de Desarrollo Comunitario:</h3>
        <ul>
          <li>Fondos Concursables para Organizaciones</li>
          <li>Asesoría para Juntas de Vecinos</li>
          <li>Talleres de Liderazgo Comunitario</li>
          <li>Apoyo a Iniciativas Locales</li>
        </ul>
        <p>Trabajamos junto a las organizaciones sociales para fortalecer el tejido comunitario.</p>
      `
    },
    {
      id: 3,
      title: 'Educación Municipal',
      description: 'Información sobre establecimientos educacionales y programas educativos.',
      icon: <SchoolIcon sx={{ fontSize: 60 }} />,
      color: '#536DFE',
      details: `
        <h3>Servicios Educativos:</h3>
        <ul>
          <li>Red de Establecimientos Educacionales</li>
          <li>Programas de Apoyo Escolar</li>
          <li>Becas Municipales</li>
          <li>Actividades Extraescolares</li>
        </ul>
        <p>Comprometidos con la educación de calidad en nuestra comuna.</p>
      `
    },
    {
      id: 4,
      title: 'Fomento Productivo',
      description: 'Apoyo a emprendedores y microempresarios de la comuna.',
      icon: <BusinessCenterIcon sx={{ fontSize: 60 }} />,
      color: '#448AFF',
      details: `
        <h3>Programas de Fomento:</h3>
        <ul>
          <li>Capacitaciones para Emprendedores</li>
          <li>Asesoría en Formulación de Proyectos</li>
          <li>Fondos Concursables para Microempresas</li>
          <li>Ferias Productivas</li>
        </ul>
        <p>Impulsando el desarrollo económico local y el emprendimiento.</p>
      `
    },
    {
      id: 5,
      title: 'Deporte y Recreación',
      description: 'Programas deportivos y actividades recreativas para todas las edades.',
      icon: <AccessibilityNewIcon sx={{ fontSize: 60 }} />,
      color: '#B0BEC5',
      details: `
        <h3>Actividades Deportivas:</h3>
        <ul>
          <li>Escuelas Deportivas Municipales</li>
          <li>Campeonatos Comunales</li>
          <li>Talleres Recreativos</li>
          <li>Mantención de Recintos Deportivos</li>
        </ul>
        <p>Promoviendo estilos de vida saludables a través del deporte y la recreación.</p>
      `
    },
    {
      id: 6,
      title: 'Salud Municipal',
      description: 'Servicios de salud primaria y programas de promoción de la salud.',
      icon: <LocalHospitalIcon sx={{ fontSize: 60 }} />,
      color: '#757575',
      details: `
        <h3>Servicios de Salud:</h3>
        <ul>
          <li>Atención en CESFAM</li>
          <li>Programas de Salud Preventiva</li>
          <li>Atención Domiciliaria</li>
          <li>Farmacia Municipal</li>
        </ul>
        <p>Cuidando la salud y bienestar de nuestros vecinos.</p>
      `
    }
  ];

  // Open detailed service modal
  const handleOpenDialog = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  // Close detailed service modal
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Box id="servicios" sx={{ py: 8, bgcolor: '#f8f8f8' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: theme.palette.primary.main,
              fontSize: { xs: '2rem', md: '2.75rem' }
            }}
          >
            Servicios Municipales
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Conoce los diferentes servicios que la Municipalidad de Cholchol pone a tu disposición
          </Typography>

          <Divider sx={{ mt: 4, mb: 6, mx: 'auto', width: '100px', borderWidth: 2, borderColor: theme.palette.secondary.main }} />
        </Box>

        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.id} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  }
                }}
                elevation={2}
              >
                <CardActionArea
                  onClick={() => handleOpenDialog(service)}
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%' }}
                >
                  <Box
                    sx={{
                      bgcolor: service.color,
                      p: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    {service.icon}
                  </Box>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 'auto' }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Service Details Dialog */}
        <Dialog
          open={open}
          onClose={handleCloseDialog}
          fullScreen={isMobile}
          maxWidth="md"
          fullWidth
          scroll="paper"
          aria-labelledby="service-dialog-title"
        >
          {selectedService && (
            <>
              <Box sx={{
                bgcolor: selectedService.color,
                color: 'white',
                py: 2,
                px: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <DialogTitle id="service-dialog-title" sx={{ p: 0, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                  {selectedService.title}
                </DialogTitle>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleCloseDialog}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <DialogContent dividers>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{
                    mr: 2,
                    bgcolor: selectedService.color,
                    color: 'white',
                    p: 1,
                    borderRadius: 1
                  }}>
                    {selectedService.icon}
                  </Box>
                  <Typography variant="h6">
                    {selectedService.description}
                  </Typography>
                </Box>

                <Paper elevation={0} sx={{ p: 3, bgcolor: '#f9f9f9', borderRadius: 2 }}>
                  <DialogContentText
                    component="div"
                    sx={{ color: 'text.primary' }}
                    dangerouslySetInnerHTML={{ __html: selectedService.details }}
                  />
                </Paper>
              </DialogContent>

              <DialogActions sx={{ p: 2, justifyContent: 'space-between' }}>
                <Button
                  variant="outlined"
                  onClick={handleCloseDialog}
                >
                  Cerrar
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCloseDialog}
                  sx={{ bgcolor: selectedService.color, '&:hover': { bgcolor: selectedService.color, opacity: 0.9 } }}
                >
                  Más Información
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Services;