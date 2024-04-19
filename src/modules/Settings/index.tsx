import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";
import { useTheme } from "../../contexts/Theme";
import data from "../../api/frontend_data_gps.json";
import { Select } from "native-base";
import { useState } from "react";
import { useCourse } from "../../contexts/Course";
import { Course } from "../../contexts/Course/types";
import { useIcon } from "../../contexts/Icon";
import { cars } from "../../assets/cars";

export default function Settings() {
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
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <StatusBar
        barStyle={
          colors.background === "#fff" ? "dark-content" : "light-content"
        }
      />
      <View
        style={{
          padding: spacing.large,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Image
          source={{ uri: data.vehicle.picture.address }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: data.vehicle.color,
          }}
        />
        <View
          style={{
            width: "65%",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              alignItems: "flex-end",
              marginBottom: spacing.small,
            }}
          >
            <Text
              style={{
                color: colors.text,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              PLACA
            </Text>

            <View
              style={{
                height: 50,
                width: 140,
                backgroundColor: colors.white,
                borderWidth: 2,
                borderColor: colors.black,
                borderRadius: 8,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  paddingTop: 3,
                  backgroundColor: "#0636A1",
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 8,
                    fontWeight: "bold",
                  }}
                >
                  BRASIL
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 4,
                }}
              >
                <Text
                  style={{
                    color: colors.black,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
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
            <Text
              style={{
                color: colors.text,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              COR PRINCIPAL
            </Text>

            <View
              style={{
                height: 30,
                width: 140,
                borderRadius: 6,
                backgroundColor: data.vehicle.color,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: colors.black,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
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
        <Text
          style={{
            color: colors.text,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          ROTA SELECIONADA
        </Text>
        <Select
          selectedValue={String(selectedRoute)}
          minWidth="200"
          accessibilityLabel="Selecione a rota"
          placeholder="Selecione a rota"
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
              label={`Rota ${index + 1}`}
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
        <Text
          style={{
            color: colors.text,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          ICONE DO VEÍCULO
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Select
            selectedValue={String(selectedCar)}
            minWidth="200"
            accessibilityLabel="Selecione o icone do veículo"
            placeholder="Selecione o icone do veículo"
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
                label={`Opção ${index + 1}`}
                value={String(index)}
              />
            ))}
          </Select>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
            }}
          >
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
