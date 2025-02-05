import "./App.css";

import { UserDataForm } from "./UserDataForm/UserDataForm";
import { Navigation } from "./components/navigation/Navigation";
import { UserDataContextProvider } from "./state/providers/UserDataContextProvider/UserDataContextProvider";

function App() {
  return (
    <UserDataContextProvider>
      <Navigation />
      <UserDataForm />
    </UserDataContextProvider>
  );
}

export default App;
