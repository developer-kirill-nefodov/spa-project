import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {RegisterOptions} from "react-hook-form";
import {ApolloError, useQuery} from "@apollo/client";

import {DetailSchemaInput} from "../../validationSchema/DetailSchema";
import {IUseGetDetail} from "../../../interfaces/review";

import {GET_DETAIL_QUERY} from "../../../lib/queries/list";

interface IParamsId {
  id: string
}

export const useGetDetail = (setTextState: IUseGetDetail): [boolean, any, RegisterOptions] => {
  const id: IParamsId = useParams()
  const history = useHistory();

  const {loading, error, data} = useQuery(GET_DETAIL_QUERY, {
    variables: id,
  });

  useEffect(() => {
    if (data && data.getReview) {
      setTextState(data.getReview)
    }

    if (data && !data.getReview && id.id !== 'new') {
      history.push('/details/new');
    }

    if(id.id === 'new') {
      DetailSchemaInput.required = true;
    }
  }, [data]);

  return [loading, error, DetailSchemaInput];
};