import {
  handleRemoveSelectedGenrer,
  handleSelectGenrer,
} from "@/presentation/contexts/store/modules/genres/actions";
import { GenresRedux } from "@/presentation/contexts/store/modules/genres/props";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  //@ts-ignore
  const store = useSelector((state) => state.genres.genrer);
  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState<boolean>(false);

  function handleOptionSelected() {
    if (!isSelected) {
      dispatch(handleSelectGenrer(slug));
    } else {
      dispatch(handleRemoveSelectedGenrer(slug));
    }
  }

  function handleSlug(prevState: string, newSlug: string): string {
    let slugs = [slug] as string[];
    prevState?.split(",").map((slug) => slug != newSlug && slugs.push(slug));
    return slugs.join(",");
  }

  useEffect(() => {
    store.map((option: GenresRedux) => {
      if (option.slug === slug) {
        if (option.selected) {
          setIsSelected(true);
        } else {
          setIsSelected(false);
        }
      }
    });
  }, [dispatch, store]);

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
