import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {useMutation} from "@apollo/client";

import {CREATE_DETAIL_QUERY} from "../../../lib/queries/list";
import {IDetailState, IUseGetDetail} from "../../../interfaces/review";

export const useCreateDetail = (setTextState: IUseGetDetail) => {
  const history = useHistory();

  const [dataState, setDataState] = useState<IDetailState | null>(null);
  const [createDetailQuery, {error}] = useMutation(CREATE_DETAIL_QUERY);

  const createDetail = (data: IDetailState) => {
    setDataState(data);
  }

  useEffect(() => {
    if (dataState) {
      createDetailQuery({variables: dataState})
        .then(({data}) => {
          if (data && data.createReview) {
            history.push('/details/' + data.createReview.id);
            setTextState(data.createReview);
          }
        }).catch(console.log);
    }
  }, [dataState])

  return [createDetail];
};
