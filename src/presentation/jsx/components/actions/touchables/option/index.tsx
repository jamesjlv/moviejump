import React from "react";
import { OptionPropsComponent } from "./props";

import { Option as OptionContainer, OptionLabel } from "./styles";

export function Option({ selected = false, label }: OptionPropsComponent) {
  return (
    <OptionContainer selected={selected}>
      <OptionLabel>{label}</OptionLabel>
    </OptionContainer>
  );
}
