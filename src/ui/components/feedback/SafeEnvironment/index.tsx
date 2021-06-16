import { Container } from "@material-ui/core";
import React from "react";
import { SafeEnvironmentContainer } from "./styles";

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro
      </Container>
    </SafeEnvironmentContainer>
  )
}

export default SafeEnvironment;