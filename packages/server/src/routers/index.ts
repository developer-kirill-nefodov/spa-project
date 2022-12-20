import {Router} from "express";

import {PrintRouter} from "./print";

export const Routers = () => {
  const router = Router();

  router.use('/rest-api', PrintRouter());

  return router;
}
