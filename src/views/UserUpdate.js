import React from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import { getSingleUser, updateUser } from "redux/actions";
import ViewContainer from "components/ViewContainer";
import FormHeader from "components/FormHeader";

class UserUpdate extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };

  componentDidMount = () => {
    const userId = this.getParam("id");

    this.props.getSingleUser({ userId });
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

  handleUpdate = () => {
    const { id: userId } = this.props;
    const { firstName, lastName } = this.state;

    this.props.updateUser({ userId, firstName, lastName });
  };

  getParam = name => {
    const {
      match: { params }
    } = this.props;

    return params[name];
  };

  render = () => {
    const { intl, updated, avatar } = this.props;
    const { firstName, lastName } = this.state;

    return (
      <ViewContainer>
        <FormHeader>
          <ProfilePicture src={avatar} />
          <Typography variant="h6">
            <FormattedMessage id="label.editUser" />
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
            <Button onClick={this.handleUpdate}>
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

const ProfilePicture = styled(Avatar)`
  && {
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
    updateUser: ({ userId, firstName, lastName }) =>
      dispatch(updateUser({ userId, firstName, lastName }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(UserUpdate));
