import "./src/i18n";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import Contexts from "./src/contexts";

export default function App() {
  return (
    <Contexts>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Contexts>
  );
}
