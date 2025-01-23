import "./App.css";

import { UserDataForm } from "./UserDataForm/UserDataForm";
import { UserDataContextProvider } from "./state/providers/UserDataContextProvider/UserDataContextProvider";

function App() {
  return (
    <UserDataContextProvider>
      <UserDataForm />
    </UserDataContextProvider>
  );
}

export default App;
