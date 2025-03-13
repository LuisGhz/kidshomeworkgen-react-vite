import { Spin, Tabs } from "antd";
import type { TabsProps } from "antd";
import "./App.css";
import { MathsTab } from "./components/MathsTab";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Matematicas",
    children: <MathsTab />,
  },
];

function App() {
  const { isLoading } = useContext(AppContext);

  return (
    <main className="App">
      {isLoading && (
        <div className="loader-container">
          <Spin size="large" />
        </div>
      )}
      <Tabs items={items} />
    </main>
  );
}

export default App;
