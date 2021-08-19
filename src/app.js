// CONFIGURACIÓN DE SERVIDOR
import express, { json }from 'express';
import morgan from 'morgan';

// IMPORTING ROUTES
import projectRoutes from './router/projects';
import taskRoutes from './router/tasks';
const app = express();

// MIDDLEWARES
app.use(morgan('dev')); // MUESTRA POR CONSOLA LO QUE VA LLEGANDO
app.use(json());        // ENTIENDE LO QUE SEA FORMATO JSON

// ROUTES
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);


export default app;