import { SafeAreaView, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import data from "../../api/frontend_data_gps.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [course, setCourse] = useState(data.courses[0]);
  const initialPosition = [
    course.stop_points.coordinates[0][0],
    course.stop_points.coordinates[0][1],
  ];
  const [currentPosition, setCurrentPosition] = useState(initialPosition);
  const [index, setIndex] = useState(0);

  const moveCar = () => {
    if (index < course.gps_count) {
      setCurrentPosition([
        course.gps[index].longitude,
        course.gps[index].latitude,
      ]);
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveCar();
    }, 200);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ ...StyleSheet.absoluteFillObject }}
          zoomEnabled={false}
          zoomControlEnabled={false}
          region={{
            longitude: currentPosition[0] || 0,
            latitude: currentPosition[1] || 0,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            image={require("../../assets/cars/car1/movingFront.png")}
            style={{ width: 20, height: 20 }}
            coordinate={{
              latitude: currentPosition[1] || 0,
              longitude: currentPosition[0] || 0,
            }}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
}
