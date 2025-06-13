import { Form, InputNumber, Checkbox, Button } from "antd";
import type { FrMultiplications } from "types/maths/FractionsForm.type";
import { DenominatorsSelect } from "components/inputs/DenominatorsSelect";
import { useFractions } from "hooks/maths/useFractions";
import { AppContext } from "context/AppContext";
import { useContext } from "react";

export const FrMultiplicationsForm = () => {
  const { isLoading } = useContext(AppContext);
  const { multiplications } = useFractions();

  const onFinish = async (values: FrMultiplications) => {
    await multiplications(values);
  };

  return (
    <>
      <Form
        name="fractions-multiplications"
        initialValues={{
          pages: 1,
          canHaveWholes: false,
          denominatorsType: "mixed",
        }}
        onFinish={onFinish}
      >
        <Form.Item<FrMultiplications> label="Páginas" name="pages">
          <InputNumber min={1} max={2} />
        </Form.Item>
        <Form.Item<FrMultiplications>
          label="Incluir fracciones impropias (Con enteros)"
          name="canHaveWholes"
          valuePropName="checked"
        >
          <Checkbox />
        </Form.Item>
        <DenominatorsSelect />
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={isLoading}>
            Generar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
