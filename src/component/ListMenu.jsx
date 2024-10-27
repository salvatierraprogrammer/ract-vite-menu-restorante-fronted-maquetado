// ListMenu.js
import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';
import '@fontsource/lobster';
import logo from '/logo.png';
import CardMenu from './CardMenu';
import { datos } from '../data/datos';

function ListMenu() {
  const menuItems = datos[0];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f7f1e3' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster', textAlign: 'center', color: '#d35400' }}>
        Pizzería Felipe
      </Typography>
      
      {/* Logo de la pizzería */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img src={logo} alt="Logo de Pizzería Felipe" style={{ width: '250px', height: 'auto', borderRadius: '100%', maxWidth: '100%' }} />
      </div>
      
      {/* Menú de Categorías */}
      <CardMenu datos={datos} />
      
      {/* Secciones individuales para cada categoría */}
      {Object.keys(menuItems).map((categoria) => (
        <div key={categoria} id={categoria} style={{ marginTop: '30px' }}>
          <Typography variant="h5" gutterBottom style={{ color: '#2c3e50' }}>
            {categoria === 'platosDelDia' ? 'Plato del Día' : categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </Typography>
          <List>
            {menuItems[categoria].map((item, index) => (
              <div id="menu" style={{ backgroundColor: '#f7f1e3' }} key={index}>
                {/* Contenido del componente */}
                <ListItem style={{ padding: '10px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant="body1" style={{ color: '#34495e', fontWeight: 'bold' }}>
                      {item.tipo}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#7f8c8d' }}>
                      {categoria === 'empanadas'
                        ? `X unidad: $${item.precio} | X Docena: $${item.precioDoc}`
                        : categoria === 'pizzas'
                        ? `Grande: $${item.grande} | Chica: $${item.precio}`
                        : `$${item.precio}`}
                    </Typography>
                  </div>
                </ListItem>
              </div>
            ))}
          </List>
          <Divider style={{ margin: '10px 0', backgroundColor: '#d35400' }} />
        </div>
      ))}
    </div>
  );
}

export default ListMenu;