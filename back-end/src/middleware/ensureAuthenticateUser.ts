import admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';

admin.initializeApp();

async function ensureAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError('Token is missing', 401);
  }
  const [, token] = authorization.split(' ');

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    request.user = decodedToken;
  } catch {
    throw new AppError('Invalid Token!', 401);
  }

  next();
}

export default ensureAuthenticateUser;
