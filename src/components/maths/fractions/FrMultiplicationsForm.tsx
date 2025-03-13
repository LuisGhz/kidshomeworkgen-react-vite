import { Form, InputNumber, Checkbox, Button } from "antd";
import type { FrMultiplications } from "types/maths/FractionsForm.type";
import { DenominatorsSelect } from "components/inputs/DenominatorsSelect";
import { useFractions } from "hooks/maths/useFractions";

export const FrMultiplicationsForm = () => {
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
          <InputNumber />
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
          <Button type="primary" htmlType="submit">
            Generar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
