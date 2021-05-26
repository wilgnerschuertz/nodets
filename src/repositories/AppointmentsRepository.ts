import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)

/**
 * Controle de Agendamentos
 * Busca no Banco na Coluna DATE os horários
 * CASO existir entra no IF em CreateAppointmentService
 * e então retorna um erro :)
 */
class AppointmentsRepository extends Repository<Appointment> {
  //Início da Busca no Banco de Dados

  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }

  //Fim da Busca no Banco de Dados
}

export default AppointmentsRepository;
