const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba para la raíz (evita "Cannot GET /")
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente 🚀');
});

// Rutas de autenticación
app.use('/auth', authRoutes);

// Sincroniza la base de datos (crea las tablas si no existen)
sequelize.sync()
    .then(() => console.log('Base de datos conectada'))
    .catch(err => console.error('Error al conectar BD:', err));

// Inicia el servidor en el puerto 3000
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
