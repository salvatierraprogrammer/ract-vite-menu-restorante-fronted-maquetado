import React from 'react';
import { Button, Box, Typography, Modal } from '@mui/material';

function ModalPrecio() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => setOpen(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:salvatierradev@gmail.com';
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-precio-title"
      aria-describedby="modal-precio-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
          textAlign: 'center',
        }}
      >
        <Typography
          id="modal-precio-title"
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 2,
          }}
        >
          Plantilla Frontend Menu para Pizzería
        </Typography>

        <Typography variant="body1" gutterBottom>
          Realizado con React, Vite
        </Typography>
        <Typography variant="body1" gutterBottom>
          Diseño: Material UI
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            mb: 2,
          }}
        >
          ¡Oferta especial! Código Precio: <s>$200.000</s> $150.000 ARS
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: '0.9rem', mb: 3 }}
        >
          Documentado: $210.000 ARS
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mt: 3,
            mb: 2,
          }}
        >
          Backend
        </Typography>
        <Typography variant="body2" gutterBottom>
          Firebase CRUD, configuración de menú y login
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            mb: 2,
          }}
        >
           Código Precio: $230.000 ARS
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: '0.9rem', mb: 3 }}
        >
          Documentado: $250.000 ARS
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mt: 3,
            mb: 2,
          }}
        >
          Despliegue en Netlify
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            mb: 2,
          }}
        >
          Código Precio: $300.000 ARS
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: '0.9rem', mb: 3 }}
        >
          Documentado: $350.000 ARS
        </Typography>

        {/* Botón para enviar correo */}
        <Button
          onClick={handleEmailClick}
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            mt: 3,
            bgcolor: '#ff5722',
            fontSize: '1rem',
            py: 1.5,
            '&:hover': {
              bgcolor: '#d04e16',
            },
          }}
        >
          ¡Comprar Ahora y Ahorra!
        </Button>
      </Box>
    </Modal>
  );
}

export default ModalPrecio;