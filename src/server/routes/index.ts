import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';


const router = Router();

router.get('/', (_, res) => {
  return res.send('teste resposta');
});

router.post('/', (req, res) => {
  console.log(req.body); //!Recebendo dados do body

  return res.status(StatusCodes.UNAUTHORIZED).json(req.body); //! Devolvendo dados no Body
});



export {router};