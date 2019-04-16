import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styled from "styled-components";

import ViewContainer from "components/ViewContainer";

class App extends Component {
  // FirebaseUI configuration.
  uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ]
  };

  render = () => {
    return (
      <StyledViewContainer>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </StyledViewContainer>
    );
  };
}

const StyledViewContainer = styled(ViewContainer)`
  margin-top: 30px;
`;

export default App;
