import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./App.css";
import { ElementaryMathsTab } from "./components/ElementaryMathsTab";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Matematicas",
    children: <ElementaryMathsTab />,
  },
];

function App() {
  return (
    <main className="App">
      <Tabs items={items} />
    </main>
  );
}

export default App;
