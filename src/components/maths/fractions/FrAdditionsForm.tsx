import { Form, InputNumber, Checkbox, Button } from "antd";
import type { FrAdditions } from "types/maths/FractionsForm.type";
import { DenominatorsSelect } from "components/inputs/DenominatorsSelect";
import { useFractions } from "hooks/maths/useFractions";
import { AppContext } from "context/AppContext";
import { useContext } from "react";

export const FrAdditionsForm = () => {
  const { isLoading } = useContext(AppContext);
  const { additions } = useFractions();

  const onFinish = async (values: FrAdditions) => {
    await additions(values);
  };

  return (
    <>
      <Form
        name="fractions-additions"
        initialValues={{
          pages: 1,
          canHaveWholes: false,
          denominatorsType: "mixed",
        }}
        onFinish={onFinish}
      >
        <Form.Item<FrAdditions> label="Páginas" name="pages">
          <InputNumber min={1} max={2} />
        </Form.Item>
        <Form.Item<FrAdditions>
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
