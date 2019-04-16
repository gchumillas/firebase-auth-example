import React from "react";
import ReactDOM from "react-dom";
import Router from "Router";

import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import localeEn from "react-intl/locale-data/en";
import localeEs from "react-intl/locale-data/es";

import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import "index.css";
import messagesEn from "translations/en.json";
import messagesEs from "translations/es.json";
import rootReducer from "redux/reducers";
import { watcherSaga } from "redux/sagas";
import { config, language } from "config";

// Creates the saga middleware.
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(middleware));

// run the saga
sagaMiddleware.run(watcherSaga);

// Add support for local translations.
const messages = { es: messagesEs, en: messagesEn };
addLocaleData([...localeEn, ...localeEs]);

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Provider store={store}>
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <Router />
      </FirebaseAuthProvider>
    </Provider>
  </IntlProvider>,
  document.getElementById("root")
);
