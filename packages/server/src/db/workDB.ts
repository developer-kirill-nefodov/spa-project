import fs from "fs";

import {logger} from "../errorHandlers/logger";
import {IReview} from "../interfaces/services.type";
import {dataGeneration} from "./dataGeneration";

export let Review: IReview[] = [];

export const readDb = () => {
  fs.readFile(__dirname + '/db.json', 'utf8', (err, data: string | any) => {
    if (err) {
      logger.emit('error', err);
    }

    if (data ? data === '[]' : !data) {
      writeDB(dataGeneration(100));
    } else {
      Review = data ? JSON.parse(data) : [];
    }
  });
}

export const writeDB = (data: null | IReview[]) => {
  fs.writeFile(__dirname + '/db.json', data ? JSON.stringify(data) : JSON.stringify(Review), (err) => {
    if (err) {
      logger.emit('error', err);
    }
    if (data) {
      readDb();
    }
  })
}
