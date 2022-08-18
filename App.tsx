import { NativeBaseProvider } from "native-base"
import Navigation from "./src/navigation/Navigation"

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
