import "./App.css";

import { CreateTemplate } from "./pdf/wniosekZC/CreateTemplate/CreateTemplate";
import { ReadAndFillPdf } from "./ReadAndFill/ReadAndFillPdf";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      {/* <ReadAndFillPdf />
      <CreateTemplate /> */}
      <Button variant={"destructive"} onClick={() => console.log("tadat")}>
        button
      </Button>
    </div>
  );
}

export default App;
