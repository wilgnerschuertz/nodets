import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();
// Testando1873014
// Testando essa merda que

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
