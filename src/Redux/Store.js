import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { logger } from "redux-logger";
import rootSaga  from "./Sagas";
import RootReducer from "./Reducers/rootReducer";
import storage from "redux-persist/lib/storage";
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'user',
    storage: storage,
  };
  
const pReducer = persistReducer(persistConfig, RootReducer);

  
export const store = createStore(
    pReducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  
  export const persistor = persistStore(store);
  
  sagaMiddleware.run(rootSaga);
  
