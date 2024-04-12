import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackRoutes = {
  Onboarding: undefined;
  MainNavigator: undefined;
};

export type RoutesProps<T extends keyof StackRoutes> = NativeStackScreenProps<StackRoutes, T>;