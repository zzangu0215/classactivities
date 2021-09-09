import { TOGGLE_THEME } from './actions';

export const reducer = (state, action) => {
  const newDarkTheme = !state.darkTheme;
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        darkTheme: newDarkTheme,
      };
    }
    default:
      return state;
  }
};
