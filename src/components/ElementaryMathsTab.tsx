import { Divider } from "antd";
import { AdditionsForm } from "./elementary/AdditionsForm";

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
      {/* 
        pages int
        minNumber int
        maxNumber int
        isWithNegative boolean
        isWithDecimal boolean1
       */}
      <Divider />
      <h3>Multiplicaciones</h3>
      {/* 
        pages int
        minFactorValue int
        maxFactorValue int
        isWithDecimal boolean
      */}
      <Divider />
      <h3>Divisiones</h3>
      {/* 
        pages int
        minNumber int
        isWithDecimal boolean
       */}
      <Divider />
    </div>
  );
};
