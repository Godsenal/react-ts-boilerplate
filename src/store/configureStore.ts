import { createStore, compose, applyMiddleware, Store } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import { RootState } from '../types';

function configureStoreProd(initialState?: object) {
  // Redux middlewares like thunks, saga
  // const middlewares = [
  //  *here*
  // ];

  // use ! for telling compiler "this expression cannot be null or undefined here
  // so don't complain about possibility of initialState being null or undefined"
  // https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#non-null-assertion-operator
  return createStore(rootReducer, initialState!);
  // if you applied middlewares above,
  // createStore(rootReducer, initialState, compose( applyMiddleware(...middlewares)));
}

/* Use redux-immutable-state-invariant
   which watct state's immutability
*/
function configureStoreDev(initialState?: object) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    /* Redux middlewares like thunks */
  ];

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState!, composeEnhancers(
    applyMiddleware(...middlewares)
  ));

  if ((module as any).hot) {
    (module as any).hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
export default configureStore;
