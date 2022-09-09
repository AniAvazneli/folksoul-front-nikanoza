export type TBandState = {
  name: string;
  description: string;
  logo: string;
};

export type ThunkAction<R, S, E, A extends Action> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;

export type member = {
  name: string;
  instrument: string;
  orbitLength: number;
  color: string;
  biography: string;
  avatar: string;
  id: number;
};
