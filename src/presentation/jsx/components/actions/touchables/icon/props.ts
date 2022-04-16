import { TouchableOpacityProps } from "react-native";

export interface IconProps extends TouchableOpacityProps {
  name: string;
  size?: number;
}
