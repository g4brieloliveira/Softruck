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
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "80%",
    height: 180,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "80%",
    height: 50,
    maxHeight: 50,
    borderWidth: 1
  },
  button: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
})