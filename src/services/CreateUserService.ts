import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import User from '../models/User'


interface Request {
  name: string,
  email: string,
  password: string,
}

class CreateUserService {
  async execute({ name, email, password }: Request): Promise<User>{
    const usersRepository = getRepository(User)

    // Inicia a verificação se o Email já está sendo utilizado
    const checkUserExist = await usersRepository.findOne({
      where: { email }
    })

    if (checkUserExist){
      throw new Error('Email address already used')
    }

    const hashedPassword = await hash(password, 8)

    // Fim verificação

    //Recebe os dados
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    })

    //Salva no banco de dados
    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService
