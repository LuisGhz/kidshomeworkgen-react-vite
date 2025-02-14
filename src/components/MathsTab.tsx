import { Collapse, CollapseProps, Divider } from "antd";
import { AdditionsForm } from "./elementary/AdditionsForm";
import { SubstractionsForm } from "./elementary/SubstractionsFrom";
import { MultiplicationsForm } from "./elementary/MultiplicationsForm";
import { DivisionsForm } from "./elementary/DivisionsForm";

const basicMathsItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "Sumas",
    children: <AdditionsForm />,
  },
  {
    key: "2",
    label: "Restas",
    children: <SubstractionsForm />,
  },
  {
    key: "3",
    label: "Multiplicaciones",
    children: <MultiplicationsForm />,
  },
  {
    key: "4",
    label: "Divisiones",
    children: <DivisionsForm />,
  },
];

const mathsItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "Operaciones básicas",
    children: (
      <>
        <Collapse items={basicMathsItems} />
      </>
    ),
  },
];

export const MathsTab = () => {
  return (
    <div>
      <h1>Matematicas</h1>
      <Divider />
      <Collapse items={mathsItems} />
    </div>
  );
};
