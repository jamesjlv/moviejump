import { TouchableOpacityProps } from "react-native";

export type OptionPropsComponent = TouchableOpacityProps & {
  selected?: boolean;
  label: string;
  slug: string;
  gendersSelecteds?: string;
  executeWithOnPress?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type OptionProps = {
  selected?: boolean;
};
