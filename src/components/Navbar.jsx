import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Button, Box, Drawer, IconButton, List, ListItem, ListItemText,
    useMediaQuery, useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleMenuItemClick = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setDrawerOpen(false);
    };

    const menuItems = [
        { text: 'Inicio', id: 'inicio' },
        { text: 'Noticias', id: 'noticias' },
        { text: 'Servicios', id: 'servicios' },
        { text: 'Contacto', id: 'contacto' }
    ];

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'white',
                color: '#333',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
        >
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 2
                    }}
                >
                    <img
                        src="/logo.png"
                        alt="Logo Municipalidad de Cholchol"
                        style={{
                            height: isMobile ? '60px' : '80px',
                            marginRight: '16px'
                        }}
                    />
                    <Typography
                        variant={isMobile ? "h6" : "h5"}
                        sx={{
                            fontWeight: 'bold',
                            color: '#0B5394',
                            display: { xs: 'none', sm: 'block' }
                        }}
                    >
                        Municipalidad de Cholchol
                    </Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                {/* Botones de navegación para pantallas grandes */}
                {!isMobile && (
                    <>
                        {menuItems.map((item) => (
                            <Button
                                key={item.id}
                                color="inherit"
                                sx={{
                                    color: '#0B5394',
                                    fontWeight: 'medium',
                                    '&:hover': {
                                        backgroundColor: 'rgba(11, 83, 148, 0.08)'
                                    }
                                }}
                                onClick={() => handleMenuItemClick(item.id)}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </>
                )}

                {/* Icono de menú hamburguesa para móviles */}
                {isMobile && (
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ color: '#0B5394' }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                {/* Drawer para el menú móvil */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                    >
                        <List>
                            {menuItems.map((item) => (
                                <ListItem
                                    button
                                    key={item.id}
                                    onClick={() => handleMenuItemClick(item.id)}
                                >
                                    <ListItemText
                                        primary={item.text}
                                        sx={{ color: '#0B5394' }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}