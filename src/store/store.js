import { createStore, combineReducers } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as app } from './reducer';

export const initialState = {
  app: {
  },
};

const rootReducer = combineReducers({
  app,
  form: reduxFormReducer,
});

export function initializeStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    devToolsEnhancer({
      name: 'nextjs-material-fond',
      hostname: 'localhost',
      port: 5000,
    }),
  );
}
