import React from 'react';
import { List, ListItem, Typography, Divider } from '@mui/material';
import '@fontsource/lobster';
import CardMenu from './CardMenu';
import { datos } from '../data/datos';

const iconMap = {
    empanadas: '🥟',
    pizzas: '🍕',
    milanesas: '🍽️',
    sandwiches: '🥪',
    guarniciones: '🥗',
    postres: '🍰',
    minutas: '🍳',
    platosDelDia: '🍽️',
};

function ListMenu() {
    const menuItems = datos[0];

    return (
        <div style={{ padding: '20px', backgroundColor: '#001f3f' }}> {/* Color de fondo azul más oscuro */}
            <CardMenu datos={datos} />
  
            <div id="menuCompleto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                <Typography variant="h4" style={{ fontFamily: 'Lobster', color: '#F1F1F1', textAlign: 'center' }}> {/* Color blanco suave */}
                    Menú
                </Typography>
            </div>
            {Object.keys(menuItems).map((categoria) => (
                <div key={categoria} id={categoria} style={{ marginTop: '30px' }} tabIndex="-1">
                    <Typography variant="h5" gutterBottom style={{ color: '#F1F1F1', display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '8px' }}>{iconMap[categoria] || '🍽️'}</span> {/* Icono correspondiente */}
                        {categoria === 'platosDelDia' ? 'Plato del Día' : categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                    </Typography>
                    <List>
                        {menuItems[categoria].map((item, index) => (
                            <ListItem 
                                key={index} 
                                style={{ 
                                    padding: '10px 0', 
                                    backgroundColor: '#001f3f',  // Fondo de lista claro
                                    transition: 'background-color 0.3s ease' 
                                }}
                                // onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fff'} // Hover en tono más oscuro
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                    <Typography variant="body1" style={{ color: '#fff', fontWeight: 'bold' }}> {/* Texto en azul oscuro */}
                                        {item.tipo}
                                    </Typography>
                                    <Typography variant="body2" style={{ color: '#6C7A89' }}> {/* Texto de precio en gris */}
                                        {categoria === 'empanadas'
                                            ? `X unidad: $${item.precio} | X Docena: $${item.precioDoc}`
                                            : categoria === 'pizzas'
                                            ? `Grande: $${item.grande} | Chica: $${item.precio}`
                                            : `$${item.precio}`}
                                    </Typography>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                    <Divider style={{ margin: '10px 0', backgroundColor: '#FF5733' }} /> {/* Divider en naranja brillante */}
                </div>
            ))}
        </div>
    );
}

export default ListMenu;