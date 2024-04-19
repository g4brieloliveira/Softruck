import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import { useTheme } from "../../contexts/Theme";
import { Position } from "./types";
import { styles } from "./style";
import { useCourse } from "../../contexts/Course";
import { useIcon } from "../../contexts/Icon";

export default function Home() {
  const GOOGLE_MAPS_APIKEY = "AIzaSyDA4LcLSa4V7n1oQE3XPV7FBkgBAupXFgM";
  const { colors, spacing } = useTheme();
  const { course } = useCourse();
  const { car } = useIcon();
  const [index, setIndex] = useState(0 as number);
  const [destinationIndex, setDestinationIndex] = useState(0 as number);
  const [currentPosition, setCurrentPosition] = useState([] as Position);
  const [destinations, setDestinations] = useState([] as Position[]);
  const [currentDestination, setCurrentDestination] = useState([] as Position);
  const [started, setStarted] = useState(false as boolean);

  const degrees = {
    northNorthEast: 22.5,
    eastNorthEast: 67.5,
    eastSouthEast: 112.5,
    southSouthEast: 157.5,
    southSouthWest: 202.5,
    westSouthWest: 247.5,
    westNorthWest: 292.5,
    northNorthWest: 337.5,
  };

  const checkIfHasArrived = () => {
    const hasArrived =
      currentPosition[0] === currentDestination[0] &&
      currentPosition[1] === currentDestination[1] &&
      destinations.length > 0;

    if (hasArrived) {
      setDestinationIndex((prev) => prev + 1);
    }

    if (!!hasArrived && destinations.length > 1) {
      const filteredDestinations = destinations.filter(
        (destination) =>
          destination[0] !== currentDestination[0] &&
          destination[1] !== currentDestination[1]
      );

      setDestinations(filteredDestinations);

      setCurrentDestination(filteredDestinations[0]);
    }
  };

  const moveCar = () => {
    if (
      course.gps[index + 1]?.latitude &&
      course.gps[index + 1]?.longitude &&
      destinationIndex < course.stops - 1
    ) {
      setIndex(index + 1);
      const position = course.gps[index + 1];

      getCarImageByDegree(position?.direction);
      setCurrentPosition([position?.longitude, position?.latitude]);
    }
  };

  const getCarImageByDegree = (degree: number) => {
    switch (true) {
      case degree >= degrees.northNorthEast && degree < degrees.eastNorthEast:
        return car.northeast;
      case degree >= degrees.eastNorthEast && degree < degrees.eastSouthEast:
        return car.east;
      case degree >= degrees.eastSouthEast && degree < degrees.southSouthEast:
        return car.southeast;
      case degree >= degrees.southSouthEast && degree < degrees.southSouthWest:
        return car.south;
      case degree >= degrees.southSouthWest && degree < degrees.westSouthWest:
        return car.southwest;
      case degree >= degrees.westSouthWest && degree < degrees.westNorthWest:
        return car.west;
      case degree >= degrees.westNorthWest && degree < degrees.northNorthWest:
        return car.northwest;
      default:
        return car.north;
    }
  };

  useEffect(() => {
    const allDestinations = course.stop_points.coordinates
      .slice(1)
      .map((stop) => [stop[0], stop[1]]) as Position[];

    setDestinations(allDestinations);
    setCurrentDestination(allDestinations[0]);

    const initialPosition = [
      course.stop_points.coordinates[0][0],
      course.stop_points.coordinates[0][1],
    ] as Position;

    setCurrentPosition(initialPosition);
  }, []);

  useEffect(() => {
    if (started) {
      const speed = course.gps[index + 1]?.speed || 0;
      const duration = (course.duration / course.gps.length) * speed || 500;

      const interval = setInterval(() => {
        moveCar();
        checkIfHasArrived();
      }, duration);
      return () => clearInterval(interval);
    }
  }, [currentPosition, started]);

  useEffect(() => {
    setDestinationIndex(0);
    setIndex(0);
    setStarted(false);
    setCurrentPosition([
      course.stop_points.coordinates[0][0],
      course.stop_points.coordinates[0][1],
    ]);
    setCurrentDestination([
      course.stop_points.coordinates[1][0],
      course.stop_points.coordinates[1][1],
    ]);
  }, [course]);

  if (!course || !course.gps || !course.stop_points || !car) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            minZoomLevel={17}
            zoomEnabled={false}
            zoomControlEnabled={false}
            region={{
              longitude: currentPosition[0] || 0,
              latitude: currentPosition[1] || 0,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <MapViewDirections
              origin={{
                latitude: currentPosition[1] || 0,
                longitude: currentPosition[0] || 0,
              }}
              destination={{
                latitude: currentDestination[1] || 0,
                longitude: currentDestination[0] || 0,
              }}
              precision="high"
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={8}
              strokeColor={colors.primary}
            />

            {destinations.map((stop, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: stop[1],
                  longitude: stop[0],
                }}
              >
                <View
                  style={[
                    styles.marker,
                    { backgroundColor: colors.background },
                  ]}
                />
              </Marker>
            ))}

            <Marker
              coordinate={{
                latitude: currentPosition[1] || 0,
                longitude: currentPosition[0] || 0,
              }}
            >
              <Image
                source={
                  getCarImageByDegree(course.gps[index]?.direction || 0) ||
                  car.north
                }
              />
            </Marker>
          </MapView>
          {!started && (
            <TouchableOpacity
              onPress={() => setStarted(true)}
              style={{
                backgroundColor: `${colors.background}b`,
                padding: spacing.medium,
                borderRadius: 24,
                borderWidth: 2,
                borderColor: colors.primary,
                marginBottom: spacing.medium,
              }}
            >
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Iniciar Trajeto
              </Text>
            </TouchableOpacity>
          )}
          <View
            style={[
              styles.speedContainer,
              {
                borderColor: colors.background,
                backgroundColor: colors.primary,
              },
            ]}
          >
            <Text style={[styles.speed, { color: colors.text }]}>
              {Math.round(course.gps[index]?.speed)}
            </Text>
            <Text style={[styles.kilometers, { color: colors.text }]}>
              km/h
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
