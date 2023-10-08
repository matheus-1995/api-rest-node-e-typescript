
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middlewares';


interface IparamProps {
  id?: number;
}

export const GetByIdValidation = validation((getSchema) => ({
  params: getSchema<IparamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
    
  })),
}));

export const getById = async (req: Request<IparamProps>, res: Response) => {
  console.log(req.params);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não Implementado!!');
};