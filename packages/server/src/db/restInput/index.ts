import fs from 'fs';

import {IReview} from "../../interfaces/services.type";
import {logger} from "../../errorHandlers/logger";

export const createRestInput = (data: IReview) => {
  fs.writeFile(__dirname + `/review${Date.now()}.json`, JSON.stringify(data), (err) => {
    if(err) {
      logger.emit('error', err)
    }
  })
}
