import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./App.css";
import { MathsTab } from "./components/MathsTab";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Matematicas",
    children: <MathsTab />,
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
