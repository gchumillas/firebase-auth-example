import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const FormHeader = ({ children }) => {
  return <StyledGrid container alignItems="center" children={children} />;
};

const StyledGrid = styled(Grid)`
  margin-bottom: 15px;
`;

export default FormHeader;
