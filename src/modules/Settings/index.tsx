import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";
import { useTheme } from "../../contexts/Theme";
import data from "../../api/frontend_data_gps.json";
import { Select } from "native-base";
import { useState } from "react";
import { useCourse } from "../../contexts/Course";
import { Course } from "../../contexts/Course/types";
import { useIcon } from "../../contexts/Icon";
import { cars } from "../../assets/cars";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings",
  });
  const { colors, spacing } = useTheme();
  const { setCourse } = useCourse();
  const { setIcon } = useIcon();
  const [selectedRoute, setSelectedRoute] = useState(0 as number);
  const [selectedCar, setSelectedCar] = useState(0 as number);

  const handleSelectRoute = (index: number) => {
    const selectedRoute = data.courses[index] as Course;
    setCourse(selectedRoute);
  };

  const handleSelectCar = (index: number) => {
    setSelectedCar(index);
    setIcon(index + 1);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar
        barStyle={
          colors.background === "#fff" ? "dark-content" : "light-content"
        }
      />
      <View style={[styles.infosContainer, { padding: spacing.large }]}>
        <Image
          source={{ uri: data.vehicle.picture.address }}
          style={[styles.vehicleImage, { borderColor: data.vehicle.color }]}
        />
        <View style={styles.infos}>
          <View
            style={[styles.plateContainer, { marginBottom: spacing.small }]}
          >
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              {t("PLACA")}
            </Text>

            <View
              style={[
                styles.plate,
                { backgroundColor: colors.white, borderColor: colors.black },
              ]}
            >
              <View style={styles.countryContainer}>
                <Text style={[styles.country, { color: colors.white }]}>
                  {t("BRASIL")}
                </Text>
              </View>
              <View style={styles.plateNumberContainer}>
                <Text style={[styles.plateNumber, { color: colors.black }]}>
                  {data.vehicle.plate}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              {t("COR PRINCIPAL")}
            </Text>

            <View
              style={[
                styles.colorContainer,
                { backgroundColor: data.vehicle.color },
              ]}
            >
              <Text style={[styles.colorHex, { color: colors.black }]}>
                {data.vehicle.color}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          padding: spacing.large,
        }}
      >
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("ROTA SELECIONADA")}
        </Text>
        <Select
          selectedValue={String(selectedRoute)}
          minWidth="200"
          accessibilityLabel={t("Selecione a rota")}
          placeholder={t("Selecione a rota")}
          color={colors.text}
          _selectedItem={{
            bg: colors.primary,
          }}
          mt={1}
          onValueChange={(itemValue) => {
            setSelectedRoute(Number(itemValue));
            handleSelectRoute(Number(itemValue));
          }}
        >
          {data.courses.map((course, index) => (
            <Select.Item
              key={index}
              label={`${t("Rota")} ${index + 1}`}
              value={String(index)}
            />
          ))}
        </Select>
      </View>

      <View
        style={{
          padding: spacing.large,
        }}
      >
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t("ICONE DO VEÍCULO")}
        </Text>
        <View style={styles.carSelectionContainer}>
          <Select
            selectedValue={String(selectedCar)}
            minWidth="200"
            accessibilityLabel={t("Selecione o icone do veículo")}
            placeholder={t("Selecione o icone do veículo")}
            color={colors.text}
            _selectedItem={{
              bg: colors.primary,
            }}
            mt={1}
            onValueChange={(itemValue) => handleSelectCar(Number(itemValue))}
          >
            {Object.keys(cars).map((car, index) => (
              <Select.Item
                key={index}
                label={`${t("Opção")} ${index + 1}`}
                value={String(index)}
              />
            ))}
          </Select>

          <View style={styles.carContainer}>
            <Image
              source={cars[`car${selectedCar + 1}`]?.northwest}
              style={{
                width: 46,
                height: 32,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
