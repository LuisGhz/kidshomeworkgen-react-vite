import { Collapse, CollapseProps, Divider } from "antd";
import { AdditionsForm } from "./maths/basic/AdditionsForm";
import { SubstractionsForm } from "./maths/basic/SubstractionsFrom";
import { MultiplicationsForm } from "./maths/basic/MultiplicationsForm";
import { DivisionsForm } from "./maths/basic/DivisionsForm";
import { FrAdditionsForm } from "./maths/fractions/FrAdditionsForm";
import { FrSubstractionsForm } from "./maths/fractions/FrSubstractionsForm";
import { FrMultiplicationsForm } from "./maths/fractions/FrMultiplicationsForm";

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

const fractionsItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "Sumas",
    children: <FrAdditionsForm />,
  },
  {
    key: "2",
    label: "Restas",
    children: <FrSubstractionsForm />,
  },
  {
    key: "3",
    label: "Multiplicaciones",
    children: <FrMultiplicationsForm />,
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
  {
    key: "2",
    label: "Fracciones",
    children: (
      <>
        <Collapse items={fractionsItems} />
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
