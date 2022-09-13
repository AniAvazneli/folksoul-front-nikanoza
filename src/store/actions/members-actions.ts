import { AnyAction } from '@reduxjs/toolkit';
import { getMembersInfo } from 'services';
import { RootState, membersActions } from 'store';
import { ThunkAction } from 'types';

export const fetchMembers = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await getMembersInfo();
      return response.data;
    };

    try {
      const members = await fetchData();
      dispatch(membersActions.updateMembers(members));
    } catch (error) {}
  };
};
