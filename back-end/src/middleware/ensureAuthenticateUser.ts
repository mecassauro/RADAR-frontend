import admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';
//import serviceAccount  from '../../../key/covinfo-cdf17-firebase-adminsdk-oueyv-ff29c8f456.json'
const serviceAccount = require("../../../key/covinfo-cdf17-firebase-adminsdk-oueyv-ff29c8f456.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://covinfo-cdf17.firebaseio.com"
});

async function ensureAuthenticateUser(
  request: any,
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
	console.log(decodedToken)
  } catch {
    throw new AppError('Invalid Token!', 401);
  }

  next();
}

export default ensureAuthenticateUser;
