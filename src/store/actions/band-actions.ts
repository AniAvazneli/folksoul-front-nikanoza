import { AnyAction } from '@reduxjs/toolkit';
import { getBandInfo } from 'services';
import { RootState } from 'store';
import { bandActions } from 'store';
import { ThunkAction } from 'types';

export const fetchBandInfo = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await getBandInfo({ name: 'folksoul' });
      return response.data;
    };

    try {
      const band = await fetchData();
      dispatch(bandActions.updateBand(band));
    } catch (error) {
      throw new Error('ბენდზე ინფორმაცია ვერ მოიძებნა');
    }
  };
};
