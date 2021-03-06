// src/routes/index.ts
import {Router} from 'express';
import appointmentsRouter from './appointments.routes';
import sessionsRoutes from './sessions.routes';
import usersRoutes from './users.routes';

const routes = Router()

routes.use('/appointments', appointmentsRouter);
routes.use('/users',usersRoutes );
routes.use('/sessions',sessionsRoutes );

export default routes;
