import "./src/i18n";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import Contexts from "./src/contexts";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NavigationContainer>
      <Contexts>
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
      </Contexts>
    </NavigationContainer>
  );
}
