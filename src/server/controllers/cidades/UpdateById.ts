
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middlewares';


interface IparamProps {
  id?: number;
}
interface IBodyProrps {
  nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProrps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
  params: getSchema<IparamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const updateById = async (req: Request<IparamProps, {}, IBodyProrps>, res: Response) => {
  if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não Encontrado'
    }
  });

  return res.status(StatusCodes.NO_CONTENT).send();
};