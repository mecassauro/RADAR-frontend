import { Router } from 'express';
import ensureAuthenticateUser from '../middleware/ensureAuthenticateUser';
import FirebaseProvider from '../services/Firebase'

const casesRouter = Router();

casesRouter.get('/', ensureAuthenticateUser , async (request, response) => {
  const firebase = FirebaseProvider()
  const casesRef = firebase.database()
  var allCasos:any = []
 
  await casesRef.ref('Casos').once('value', async (snapshot:any) =>{
  const casos = snapshot.val()
  for (let caso in casos) {
    allCasos.push({
    id: caso,
    data: casos[caso].dataCadastro,
    lat: casos[caso].latitudeString,
    long: casos[caso].longitudeString,
    regiao: casos[caso].RA,
      })
	}
  })
  response.send(allCasos)

  });


export default casesRouter;
