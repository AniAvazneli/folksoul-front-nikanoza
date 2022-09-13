import { AnyAction } from '@reduxjs/toolkit';
import { getSocialLinks } from 'services';
import { RootState, linksActions } from 'store';
import { ThunkAction } from 'types';

export const fetchLinks = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await getSocialLinks();
      return response.data;
    };

    try {
      const links = await fetchData();
      dispatch(linksActions.getLinksInfo(links));
    } catch (error) {}
  };
};
