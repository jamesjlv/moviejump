import React from "react";
import { SearchComponentProps } from "./props";

import { Container, Input, SearchIcon } from "./styles";

export function Search({ ...rest }: SearchComponentProps) {
  return (
    <Container>
      <SearchIcon />
      <Input placeholder="Search..." {...rest} />
    </Container>
  );
}
