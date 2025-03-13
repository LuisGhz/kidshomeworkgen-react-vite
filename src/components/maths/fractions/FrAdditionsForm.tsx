import { Form, InputNumber, Checkbox, Button } from "antd";
import type { FrAdditions } from "types/maths/FractionsForm.type";
import { DenominatorsSelect } from "components/inputs/DenominatorsSelect";
import { useFractions } from "hooks/maths/useFractions";

export const FrAdditionsForm = () => {
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
          <InputNumber />
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
          <Button type="primary" htmlType="submit">
            Generar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
