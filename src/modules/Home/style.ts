import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  speedContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 50,
    width: 50,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: 10,
  },
  speed: {
    fontWeight: "bold",
    fontSize: 18,
  },
  kilometers: {
    fontWeight: "bold",
    fontSize: 8,
  },
  button: {
    borderRadius: 24,
    borderWidth: 2,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: "bold",
  }
})