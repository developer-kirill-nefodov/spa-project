import {Request, Response} from 'express';

import {logger} from "../errorHandlers/logger";
import {createRestInput} from "../db/restInput";
import {getErrorMessage} from "../errorHandlers/message";

export const createPrintController = async (req: Request, res: Response) => {
  try {
    createRestInput(req.body);

    res.status(200).send(req.body);
  } catch (e) {
    res.status(400).send(getErrorMessage(e));
    logger.emit('error', getErrorMessage(e))
  }
}
