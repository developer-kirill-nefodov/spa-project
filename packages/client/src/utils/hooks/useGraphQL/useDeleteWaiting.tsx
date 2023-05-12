import {useEffect, useState} from 'react';
import {useMutation} from "@apollo/client";
import {useDebounce} from "../useDebounce";

import {IListData} from "../../../interfaces/list";

import {DELETE_LIST_QUERY} from "../../../lib/queries/list";

interface IUseDeleteReview {
  setListState: Function
  listState: IListData[]
}

export const useDeleteWaiting = ({setListState, listState}: IUseDeleteReview) => {
  const [deleteId, setDeleteId] = useState('');
  const [deletedTime, setDeletedTime] = useState(false);
  const [addTodo, {error}] = useMutation(DELETE_LIST_QUERY);

  const debounceDelete = useDebounce(deleteId, 1500);

  const deleteItem = (id: string) => () => {
    setDeletedTime(true);
    setDeleteId(id);
  }

  useEffect(() => {
    if(deletedTime || error) {
      setDeletedTime(false);
    }
  }, [listState, error]);

  useEffect(() => {
    if (debounceDelete && listState.find(e => e.id === debounceDelete)) {
      addTodo({variables: {id: debounceDelete}})
        .then(({data: {deleteReview}}) => {
          if (deleteReview.id) {
            setListState((e: IListData[]) => e.filter(item => item.id !== deleteReview.id));
          }
        }).catch((e) => {
        console.error(e);
      })
    }
  }, [debounceDelete]);

  return [deleteItem, deletedTime];
};