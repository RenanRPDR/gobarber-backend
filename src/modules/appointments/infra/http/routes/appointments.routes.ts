import { Router } from 'express';

import ensureAuthencated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthencated);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
