import { TouchableOpacityProps } from "react-native";

export type CardProps = TouchableOpacityProps & {
  title: string;
  year: number;
  imageUrl: string;
};
