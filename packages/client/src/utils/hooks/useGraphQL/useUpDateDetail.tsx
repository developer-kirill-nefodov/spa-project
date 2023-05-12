import React, {useEffect, useState} from 'react';
import {useMutation} from "@apollo/client";

import {IUpdateDetailState, IUseGetDetail} from "../../../interfaces/review";
import {UPDATE_DETAIL_QUERY} from "../../../lib/queries/list";

export const useUpDateDetail = (setTextState: IUseGetDetail) => {
  const [dataState, setDataState] = useState<IUpdateDetailState | null>(null);

  const [updateDetailQuery, {error}] = useMutation(UPDATE_DETAIL_QUERY);

  const updateDetail = (data: IUpdateDetailState) => {
    const upDate = Object.entries(data)
      .reduce((acc: any, [key, value]) => {
        if (value) acc[key] = value;return acc;
      }, {});

    setDataState(upDate);
  }

  useEffect(() => {
    if (dataState && Object.keys(dataState).length > 1) {
      updateDetailQuery({variables: dataState})
        .then(({data}) => {
          if(data && data.updateReview) {
            setTextState(data.updateReview);
          }
        }).catch(console.log);
    }
  }, [dataState])

  return [updateDetail];
};