import {Router} from "express";

import {createPrintController} from "../controllers/print.controller";

export const PrintRouter = () => {
  const router = Router();

  router.post('/print', createPrintController);

  return router;
}
