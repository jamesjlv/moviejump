import React, { useState } from "react";
import { OptionPropsComponent } from "./props";

import { Option as OptionContainer, OptionLabel } from "./styles";

export function Option({
  selected,
  label,
  slug,
  gendersSelecteds = "",
  executeWithOnPress,
  ...rest
}: OptionPropsComponent) {
  const [isSelected, setIsSelected] = useState<boolean>(
    gendersSelecteds.includes(slug)
  );

  function handleOptionSelected() {
    setIsSelected((prevState) => !prevState);
    executeWithOnPress((prevState) => {
      if (!prevState) {
        return slug;
      }

      return handleSlug(prevState, slug);
    });
  }

  function handleSlug(prevState: string, newSlug: string): string {
    let slugs = [slug] as string[];
    prevState?.split(",").map((slug) => slug != newSlug && slugs.push(slug));
    return slugs.join(",");
  }

  return (
    <OptionContainer
      selected={isSelected}
      onPress={handleOptionSelected}
      {...rest}
    >
      <OptionLabel>{label}</OptionLabel>
    </OptionContainer>
  );
}
