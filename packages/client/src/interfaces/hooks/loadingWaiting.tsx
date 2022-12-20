import {IListData} from "../list";
import {Dispatch, MouseEventHandler, SetStateAction} from "react";
import {ApolloError} from "@apollo/client";

export type IUseLoadingWaiting = [
  MouseEventHandler,
  boolean,
  boolean,
  ApolloError | undefined,
  IListData[],
  Dispatch<SetStateAction<IListData[]>>
];

export interface IDataLoadingWaiting {
  getAllReview: {
    id: number | string
    createdAt: string
    updatedAt: string
  }[]
}