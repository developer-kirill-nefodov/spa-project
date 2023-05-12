import React from "react";

export interface IDetailState {
  id: string;
  text1: string;
  text2: string;
  text3: string;
  summary: string;
  nickname: string;
}

export interface IUpdateDetailState {
  id: string;
  text1?: string;
  text2?: string;
  text3?: string;
  summary?: string;
  nickname?: string;
}

type idxName = 'text1' | 'text2' | 'text3' | 'summary' | 'nickname'

export interface IReviewData {
  title: string,
  stars: number,
  grade: number,
  img: string,
  idxName: idxName
}

export interface IItemMeat {
  title: string
  stars: number
  grade: number
  img: string
  idxName: idxName
  textState: string
  setTextStates: (key: string, value: string) => void
}

export interface IInputNickname {
  textState: string
  setTextStates: (key: string, value: string) => void
}

export type IUseGetDetail = React.Dispatch<React.SetStateAction<IDetailState>>