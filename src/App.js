import logo from "./logo.svg";
import "./App.css";
import { normalizeData } from "./utils";
import Node from "./components/Node";
const xdata = [
  "folder_a.folder_b.file1",
  "folder_a.folder_c.file1",
  "folder_a.folder_b.file2",
  "folder_b.file1",
  "folder_b.folder_a.file1",
  "folder_b.folder_a.file2",
];

function App() {
  const data = normalizeData(xdata);
  return (
    <ul className="App">
      {data.map((node) => (
        <Node key={node.name} subNodes={node.children} name={node.name} />
      ))}
    </ul>
  );
}

export default App;
