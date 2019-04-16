La aplicación está disponible en la siguiente dirección:  
https://authexample-b84c8.firebaseapp.com/

Aunque la interfaz se adapta a cualquier pantalla, originalmente ha sido diseñada para dispositivos móviles, por lo que recomiendo usar el modo de simulación móvil de Chrome ( [Ctrl + Shift + I] y activar la opción "Toggle view toolbar" )

## Estructura de la aplicación

Toda la maquinaria relativa a Redux + Saga se encuentra en la carpeta `src/redux` y su funcionamento es bastante simple:

  1. Ejecutamos una acción: `dispatch(myAction)` (src/redux/actions.js)
  2. que eventualmente es capturada por una "saga" (src/redux/sagas.js)
  3. que a su vez llama un "provider" (src/redux/provider.js)
  4. cuyo resultado es procesado por un "reducer" (src/redux/reducer.js)
  
Y finalmente los distintos componentes se actualizan en función del contenido del "árbol de estado".

```text
src
  /components/     --> Componentes comunes
  /redux/          --> Maquinaria relativa a Redux + Saga
  /translations/   --> Traducciones (Locales)
  /views
    /snippets/     --> "Retazos" (Header, Footer, etc...)
    **             --> Vistas de la aplicación (Layouts)
  /Router.js       --> Enrutador (aplicación principal)
  config-sample.js --> Archivo de configuración (copiar a config.js)
```

## Librerías más relevantes

  1. [@material-ui](https://material-ui.com/getting-started/installation/): Librería de componentes visuales.
  2. [firebase](https://react-firebase-js.com/docs/react-firebase-auth/api): API de [firebase](https://firebase.google.com/).
  3. [@react-firebase/auth](https://react-firebase-js.com/docs/react-firebase-auth/getting-started): Sistema de autenticación.
  4. [react-firebaseui](https://github.com/firebase/firebaseui-web-react): Permite autenticarse a través de distintos proveedores, como Google, Facebook o Twitter.
  5. [axios](https://github.com/axios/axios): Cliente HTTP.
  6. [react-intl](https://github.com/yahoo/react-intl): Internacionalización (i18n).
  7. [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start): Enrutador.
  8. [styled-components](https://www.styled-components.com/): Una librería para "estilizar" componentes.
  9. [react-redux](https://github.com/reduxjs/react-redux): React-Redux
  10. [redux-saga](https://github.com/redux-saga/redux-saga): Redux-Saga
  
La aplicación ha sido traducida a Inglés y Español (ver carpeta `/src/translations`). Podemos cambiar el lenguaje desde el archivo `config.js` (`export const language = "en";`)

## Capturas de pantalla

![screenshot1](https://user-images.githubusercontent.com/5312427/54597821-8cf47b00-4a37-11e9-95ab-c3776abc1500.png)
![screenshot2](https://user-images.githubusercontent.com/5312427/54597822-8cf47b00-4a37-11e9-9041-886ff696443a.png)
![screenshot3](https://user-images.githubusercontent.com/5312427/54597824-8cf47b00-4a37-11e9-8c66-f0f5a9f5dc6b.png)
![screenshot4](https://user-images.githubusercontent.com/5312427/54597825-8d8d1180-4a37-11e9-9c16-4e79254f655d.png)
![screenshot5](https://user-images.githubusercontent.com/5312427/54597826-8d8d1180-4a37-11e9-9ba7-fca66f2ffa12.png)
![screenshot6](https://user-images.githubusercontent.com/5312427/54597827-8e25a800-4a37-11e9-9eec-6ac032066efa.png)
