import React from "react";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import ViewContainer from "components/ViewContainer";

class Profile extends React.Component {
  render = () => {
    return (
      <FirebaseAuthConsumer>
        {({ user }) => {
          let { photoURL: photo, displayName: name, email } = user;

          return (
            <ViewContainer>
              <Grid container direction="column" alignItems="center">
                <ProfilePicture src={photo} />
                <Typography variant="h6">{name}</Typography>
                <Typography variant="caption">{email}</Typography>
              </Grid>
            </ViewContainer>
          );
        }}
      </FirebaseAuthConsumer>
    );
  };
}

const ProfilePicture = styled(Avatar)`
  && {
    width: 120px;
    height: 120px;
    margin: 20px 0 15px;
  }
`;

export default Profile;
