import Appointment from '../models/Appointment'
import {startOfHour} from 'date-fns'
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import {getCustomRepository} from 'typeorm'

import AppError from '../errors/AppError'
/**
 * [X] Recebimento das informações
 * [X] Tratativa de erros/excessões
 * [X] Acesso ao repositório
 */


interface Request{
    provider_id:string; date: Date
}

/**
 * Dependency Inversion
 */

class CreateAppointmentService{


    public async execute({provider_id, date}:Request): Promise<Appointment> {

        const appointmentsRepository = getCustomRepository(AppointmentsRepository);

        const appointmentDate = startOfHour(date)

        const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);

        if(findAppointmentInSameDate){
            throw new  AppError('This appointment is already booked');
        }

        const appointment = appointmentsRepository.create({
            provider_id, date: appointmentDate
        });

        await appointmentsRepository.save(appointment);

        return appointment;
    }

}

export default CreateAppointmentService
