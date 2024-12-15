import "./App.css";

import { CreateTemplate } from "./pdf/wniosekZC/CreateTemplate/CreateTemplate";
import { ReadAndFillFirstPage } from "./ReadAndFillFirstPage/ReadAndFillFirstPage";

function App() {
  return (
    <div>
      {/* <ReadAndFillFirstPage /> */}

      <CreateTemplate />
      {/* <CreteTemplateFields /> */}
    </div>
  );
}

export default App;
