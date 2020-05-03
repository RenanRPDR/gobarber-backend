import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));

  const findAppointmentInSame = appointmentsRepository.findByDate(parseDate);

  if (findAppointmentInSame) {
    return response
      .status(400)
      .json({ message: 'This appoitment is already booked' });
  }

  const appointment = appointmentsRepository.create({
    provider,
    date: parseDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
