import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      sx={{
        width: '89%', 
        margin: '0 auto', 
        backgroundColor: '#001f3f', 
        color: '#fff', 
        padding: '20px',
        marginTop: '20px',
        textAlign: 'center', 
        borderRadius: '8px' 
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <PhoneIcon sx={{ fontSize: 30, color: '#FF5733', mb: 1 }} />
          <Typography variant="h6">Contacto</Typography>
          <Typography variant="body2">Teléfono: (123) 456-7890</Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <LocationOnIcon sx={{ fontSize: 30, color: '#FF5733', mb: 1 }} />
          <Typography variant="h6">Ubicación</Typography>
          <Typography variant="body2">Moreno 1773, C1093 Cdad. Autónoma de Buenos Aires</Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
          <Typography variant="h6">Síguenos</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
          <IconButton href="https://www.facebook.com/salvatierra.dev/" target="_blank" sx={{ color: '#1877F2' }}>
            <FacebookIcon fontSize="large" />
          </IconButton>

          <IconButton href="https://www.instagram.com/salvatierrra.dev/" target="_blank" sx={{ color: '#E4405F' }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          </Box>
        </Grid>
      </Grid>
      
      <Box sx={{ marginTop: '20px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6688051789706!2d-58.39119650000001!3d-34.6125355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadce54d9e9d%3A0xf7783a06acd3fa04!2sMoreno%201773%2C%20C1093%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1730063097187!5m2!1ses-419!2sar"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      
      <Typography variant="body2" sx={{ marginTop: '20px', color: '#aaa' }}>
        © Salvaierra Dev 2024
      </Typography>
    </Box>
  );
}

export default Footer;