import "./App.css";

import { CreateTemplateCells } from "./CreateTemplateCells/CreateTemplateCells";
import { ReadAndFillFirstPage } from "./ReadAndFillFirstPage/ReadAndFillFirstPage";

function App() {
  return (
    <div>
      <h2>Sprint 2</h2>
      <ReadAndFillFirstPage />
      <h2>Sprint 1</h2>
      <CreateTemplateCells />
      {/* <CreteTemplateFields /> */}
    </div>
  );
}

export default App;
