import "./App.css";

import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <Button variant={"destructive"} onClick={() => console.log("tada")}>
        button
      </Button>
    </div>
  );
}

export default App;
