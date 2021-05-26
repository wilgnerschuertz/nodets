import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  //Validação do Token JWT

  const authHeader = request.headers.authorization;
  console.log('teste2' + authHeader);

  if (!authHeader) {
    throw new Error('JWT Token is missing.');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    console.log(decoded);

    return next();
  } catch {
    throw new Error('Invalid JWT Token');
  }
}
