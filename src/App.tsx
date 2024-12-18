import "./App.css";

import { CreateTemplate } from "./pdf/wniosekZC/CreateTemplate/CreateTemplate";
import { ReadAndFillPdf } from "./ReadAndFillFirstPage/ReadAndFillPdf";

function App() {
  return (
    <div>
      <ReadAndFillPdf />
      <CreateTemplate />
    </div>
  );
}

export default App;
