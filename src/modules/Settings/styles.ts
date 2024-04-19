import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infosContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  vehicleImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
  },
  infos: {
    width: "65%",
    alignItems: "flex-end",
  },
  plateContainer: {
    alignItems: "flex-end",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  plate: {
    height: 50,
    width: 140,
    borderWidth: 2,
    borderRadius: 8,
  },
  countryContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    paddingTop: 3,
    backgroundColor: "#0636A1",
  },
  country: {
    fontSize: 8,
    fontWeight: "bold",
  },
  plateNumberContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 4,
  },
  plateNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  colorContainer: {
    height: 30,
    width: 140,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorHex: {
    fontSize: 12,
    fontWeight: "bold",
  },
  carSelectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  }
})