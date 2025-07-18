import { Form, InputNumber, Checkbox, Button } from "antd";
import type { FrSubstractions } from "types/maths/FractionsForm.type";
import { DenominatorsSelect } from "components/inputs/DenominatorsSelect";
import { useFractions } from "hooks/maths/useFractions";
import { AppContext } from "context/AppContext";
import { useContext } from "react";

export const FrSubstractionsForm = () => {
  const { isLoading } = useContext(AppContext);
  const { substractions } = useFractions();

  const onFinish = async (values: FrSubstractions) => {
    await substractions(values);
  };

  return (
    <>
      <Form
        name="fractions-substractions"
        initialValues={{
          pages: 1,
          canHaveWholes: false,
          denominatorsType: "mixed",
        }}
        onFinish={onFinish}
      >
        <Form.Item<FrSubstractions> label="Páginas" name="pages">
          <InputNumber min={1} max={2} />
        </Form.Item>
        <Form.Item<FrSubstractions>
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
