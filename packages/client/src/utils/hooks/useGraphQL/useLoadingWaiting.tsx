import React, {useState, useEffect} from 'react';
import {useQuery} from "@apollo/client";

import {GET_LISTS_QUERY} from "../../../lib/queries/list";

import {IListData} from "../../../interfaces/list";
import {IUseLoadingWaiting} from "../../../interfaces/hooks/loadingWaiting";

export const useLoadingWaiting = (): IUseLoadingWaiting => {
  const [listState, setListState] = useState<IListData[]>([]);
  const [loadingEnd, setLoadingEnd] = useState(false);

  const [pageState, setPageState] = useState(
    {skip: 0, take: 10}
  );

  const {loading, error, data} = useQuery(GET_LISTS_QUERY, {
    variables: pageState,
  });

  const newLoad = () => {
    if (!loadingEnd) {
      setPageState({
        skip: listState.length - 1,
        take: 10
      });
    }
  }

  useEffect(() => {
    if (data && data.getAllReview) {
      if (data.getAllReview.length > pageState.take - 1) {
        setLoadingEnd(false);
      }
      setListState((e) => e.concat(data.getAllReview));
    } else {
      setLoadingEnd(true);
    }
  }, [data]);

  return [newLoad, loadingEnd, loading, error, listState, setListState];
};