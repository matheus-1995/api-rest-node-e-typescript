import { Router } from 'express';
//import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers';


const router = Router();

router.get('/', (_, res) => {
  return res.send('teste resposta');
});

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.get('/cidades/:id', CidadesController.GetByIdValidation, CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.DeleteByIdValidation, CidadesController.deleteById);



export { router };