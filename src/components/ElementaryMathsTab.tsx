import { Divider } from "antd";
import { AdditionsForm } from "./elementary/AdditionsForm";
import { SubstractionsForm } from "./elementary/SubstractionsFrom";
import { MultiplicationsForm } from "./elementary/MultiplicationsForm";
import { DivisionsForm } from "./elementary/DivisionsForm";

export const ElementaryMathsTab = () => {
  return (
    <div>
      <h1>Matematicas primaria</h1>
      <Divider />
      <h2>Operaciones básicas</h2>
      <Divider />
      <h3>Sumas</h3>
      <AdditionsForm />
      <Divider />
      <h3>Restas</h3>
      <SubstractionsForm />
      <Divider />
      <h3>Multiplicaciones</h3>
      <MultiplicationsForm />
      <Divider />
      <h3>Divisiones</h3>
      <DivisionsForm />
      <Divider />
    </div>
  );
};
