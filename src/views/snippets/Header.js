import React from "react";
import { IfFirebaseAuthed } from "@react-firebase/auth";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExitToApp from "@material-ui/icons/ExitToApp";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Home from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

class Header extends React.Component {
  state = {
    isDialogOpen: false
  };

  handleExit = () => {
    const { firebase } = this.props;

    firebase
      .app()
      .auth()
      .signOut();

    this.setState({ isDialogOpen: false });
  };

  handleOpenDialog = () => {
    this.setState({ isDialogOpen: true });
  };

  handleCloseDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  render = () => {
    const { isDialogOpen } = this.state;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <HomeButton color="inherit" href="/">
              <Home />
            </HomeButton>
            <Title variant="h6" color="inherit">
              <FormattedMessage id="header.title" />
            </Title>
            <IfFirebaseAuthed>
              {() => (
                <div>
                  <ToolbarButton color="inherit" href="/profile">
                    <AccountCircle />
                  </ToolbarButton>
                  <ToolbarButton
                    color="inherit"
                    onClick={this.handleOpenDialog}
                  >
                    <ExitToApp />
                  </ToolbarButton>
                </div>
              )}
            </IfFirebaseAuthed>
          </Toolbar>
        </AppBar>

        <Dialog open={isDialogOpen}>
          <DialogContent>
            <DialogContentText>
              <FormattedMessage id="header.exitMessage" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDialog} color="primary" autoFocus>
              <FormattedMessage id="label.cancel" />
            </Button>
            <Button onClick={this.handleExit} color="primary">
              <FormattedMessage id="label.accept" />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
}

const Title = styled(Typography)`
  && {
    flex-grow: 1;
  }
`;

const HomeButton = styled(IconButton)`
  && {
    padding-left: 0;
  }
`;

const ToolbarButton = styled(IconButton)`
  && {
    padding-right: 0;
  }
`;

export default Header;
