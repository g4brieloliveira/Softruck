import { useTranslation } from "react-i18next";
import { Button, Text, View } from "react-native";
import { RoutesProps } from "../../routes/types";
import { useTheme } from "../../contexts/Theme";
import { StatusBar } from "expo-status-bar";

export default function Onboarding({ navigation }: RoutesProps<"Onboarding">) {
  const { t } = useTranslation("translation", {
    keyPrefix: "onboarding",
  });
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text style={{ color: colors.text }}>Onboarding</Text>
      <Button
        title={t("Entrar")}
        onPress={() => navigation.navigate("MainNavigator")}
      />
    </View>
  );
}
