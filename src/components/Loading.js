import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <Container>
      <StyledCircularProgress />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const StyledCircularProgress = styled(CircularProgress)`
  max-width: 50%;
`;

export default Loading;
