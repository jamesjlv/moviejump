import React, { useState } from "react";
import { OptionPropsComponent } from "./props";

import { Option as OptionContainer, OptionLabel } from "./styles";

export function Option({ selected = false, label }: OptionPropsComponent) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <OptionContainer
      selected={isSelected}
      onPress={() => setIsSelected((prevState) => !prevState)}
    >
      <OptionLabel>{label}</OptionLabel>
    </OptionContainer>
  );
}
