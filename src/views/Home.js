import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { injectIntl, FormattedMessage } from "react-intl";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import AddCircle from "@material-ui/icons/AddCircle";
import Edit from "@material-ui/icons/Create";
import Avatar from "@material-ui/core/Avatar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";

import { rowsPerPageOptions } from "config";
import { getUsers } from "redux/actions";

class Home extends React.Component {
  componentDidMount = () => {
    const { currentPage: page, rowsPerPage } = this.props;

    this.props.getUsers({ page, rowsPerPage });
  };

  handleChangePage = (event, page) => {
    const { rowsPerPage } = this.props;

    this.props.getUsers({ page, rowsPerPage });
  };

  handleChangeRowsPerPage = event => {
    const { currentPage: page } = this.props;
    const rowsPerPage = parseInt(event.target.value, 10);

    this.props.getUsers({ page, rowsPerPage });
  };

  render = () => {
    const { intl, currentPage, rowsPerPage, totalRows, items } = this.props;
    const labelRowsPerPage = intl.formatMessage({ id: "label.rowsPerPage" });

    return (
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <FirstCell>
                <FormattedMessage id="user.avatar" />
              </FirstCell>
              <TableCell>
                <FormattedMessage id="user.fullName" />
              </TableCell>
              <TableCell align="right">
                <IconButton href="/user/create">
                  <AddCircle />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <Avatar src={item.avatar} />
                </TableCell>
                <TableCell>{item.fullName}</TableCell>
                <TableCell align="right">
                  <IconButton href={`/user/update/${item.id}`}>
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                labelRowsPerPage={labelRowsPerPage}
                rowsPerPageOptions={rowsPerPageOptions}
                colSpan={3}
                count={totalRows}
                rowsPerPage={rowsPerPage}
                page={currentPage}
                SelectProps={{
                  native: true
                }}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </StyledTable>
      </StyledPaper>
    );
  };
}

const StyledPaper = styled(Paper)`
  && {
    margin: 10px;
  }
`;

const StyledTable = styled(Table)`
  && {
    table-layout: fixed;
  }
`;

const FirstCell = styled(TableCell)`
  && {
    /* Shrinks the first column. */
    width: 1px;
  }
`;

const mapStateToProps = state => {
  return {
    currentPage: state.users.currentPage,
    rowsPerPage: state.users.rowsPerPage,
    totalRows: state.users.totalRows,
    items: state.users.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: page => dispatch(getUsers(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Home));
