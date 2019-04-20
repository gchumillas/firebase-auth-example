# Firebase authentication example

This application illustrates how to authenticate using various service providers, such as Google, Facebook or Twitter.

The application is available in the following address:  
https://authexample-b84c8.firebaseapp.com/


## Application structure

All the machinery related to Redux + Saga is located under `src/redux` and its operation is quite simple:

  1. execute an action: `dispatch(myAction)` (src/redux/actions.js)
  2. which is eventually captured by a "saga" (src/redux/sagas.js)
  3. which in turn calls a "provider" (src/redux/provider.js)
  4. whose response is processed by a "reducer" (src/redux/reducer.js)
  
And finally each component is updated attending to the "state tree".

```text
src
  /components/     --> Common components
  /redux/          --> Redux + Saga
  /translations/   --> Translations
  /views
    /snippets/     --> Header, Footer, etc...
    /**            --> Views (Layouts)
  /Router.js       --> Router (main application)
  config-sample.js --> Template config file (copy to config.js)
```

## Librerías más relevantes

  1. [@material-ui](https://material-ui.com/getting-started/installation/): A list of visual components.
  2. [firebase](https://react-firebase-js.com/docs/react-firebase-auth/api): A [Firebase](https://firebase.google.com/) API.
  3. [@react-firebase/auth](https://react-firebase-js.com/docs/react-firebase-auth/getting-started): An authentication library.
  4. [react-firebaseui](https://github.com/firebase/firebaseui-web-react): A federated authentication library.
  5. [axios](https://github.com/axios/axios): An HTTP client.
  6. [react-intl](https://github.com/yahoo/react-intl): Internationalization library.
  7. [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start): Router (Single Page Application).
  8. [styled-components](https://www.styled-components.com/): A library to apply CSS styles to the components.
  9. [react-redux](https://github.com/reduxjs/react-redux): React-Redux
  10. [redux-saga](https://github.com/redux-saga/redux-saga): Redux-Saga

The application was translated to English and Spanish (see `/src/translations`). You can easily change the default language from the `config.js` file:
```JavaScript
export const language = "en";
```

## Screenshots

![screenshot5](https://user-images.githubusercontent.com/5312427/54597826-8d8d1180-4a37-11e9-9ba7-fca66f2ffa12.png)
![screenshot1](https://user-images.githubusercontent.com/5312427/54597821-8cf47b00-4a37-11e9-95ab-c3776abc1500.png)
![screenshot2](https://user-images.githubusercontent.com/5312427/54597822-8cf47b00-4a37-11e9-9041-886ff696443a.png)
![screenshot6](https://user-images.githubusercontent.com/5312427/54597827-8e25a800-4a37-11e9-9eec-6ac032066efa.png)
![screenshot3](https://user-images.githubusercontent.com/5312427/54597824-8cf47b00-4a37-11e9-8c66-f0f5a9f5dc6b.png)
![screenshot4](https://user-images.githubusercontent.com/5312427/54597825-8d8d1180-4a37-11e9-9c16-4e79254f655d.png)
