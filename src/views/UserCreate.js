import React from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import { getSingleUser, createUser } from "redux/actions";
import ViewContainer from "components/ViewContainer";
import FormHeader from "components/FormHeader";

class UserCreate extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props !== prevProps) {
      const { firstName, lastName } = this.props;

      this.setState({ firstName, lastName });
    }
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleInsert = () => {
    const { firstName, lastName } = this.state;

    this.props.createUser({ firstName, lastName });
  };

  render = () => {
    const { intl, updated } = this.props;
    const { firstName, lastName } = this.state;

    return (
      <ViewContainer>
        <FormHeader>
          <ProfilePicture />
          <Typography variant="h6">
            <FormattedMessage id="label.createUser" />
          </Typography>
        </FormHeader>

        <Grid container direction="column">
          <TextField
            label={intl.formatMessage({ id: "label.firstName" })}
            value={firstName}
            onChange={this.handleChange("firstName")}
          />
          <TextField
            label={intl.formatMessage({ id: "label.lastName" })}
            value={lastName}
            onChange={this.handleChange("lastName")}
          />
          <div>
            <Button href="/">
              <FormattedMessage id="label.cancel" />
            </Button>
            <Button onClick={this.handleInsert}>
              <FormattedMessage id="label.accept" />
            </Button>
          </div>
        </Grid>

        <Dialog open={updated}>
          <DialogContent>
            <DialogContentText>
              <FormattedMessage id="label.updatedRow" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button href="/" color="primary">
              <FormattedMessage id="label.accept" />
            </Button>
          </DialogActions>
        </Dialog>
      </ViewContainer>
    );
  };
}

const ProfilePicture = styled(AccountCircle)`
  && {
    width: 40px;
    height: 40px;
    margin-right: 7px;
  }
`;

const mapStateToProps = state => {
  return {
    id: state.singleUser.id,
    avatar: state.singleUser.avatar,
    firstName: state.singleUser.firstName,
    lastName: state.singleUser.lastName,
    updated: state.singleUser.updated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleUser: page => dispatch(getSingleUser(page)),
    createUser: ({ firstName, lastName }) =>
      dispatch(createUser({ firstName, lastName }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(UserCreate));
