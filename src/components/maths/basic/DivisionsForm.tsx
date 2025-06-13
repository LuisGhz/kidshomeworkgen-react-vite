import { Form, InputNumber, Button, Checkbox } from "antd";
import type { Divisions } from "types/maths/ElementaryMathsForm.type";
import { useBasics } from "hooks/maths/useBasics";
import { useContext } from "react";
import { AppContext } from "context/AppContext";

export const DivisionsForm = () => {
  const { isLoading } = useContext(AppContext);
  const { divisions } = useBasics();

  const onFinish = async (values: Divisions) => {
    await divisions(values);
  };

  return (
    <>
      <Form
        name="elementary-divisions"
        initialValues={{
          pages: 1,
          dividendDigits: 5,
          divisorDigits: 2,
          canHaveRemainder: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item<Divisions> label="Páginas" name="pages">
          <InputNumber min={1} max={2} />
        </Form.Item>
        <Form.Item<Divisions>
          label="Digitos para el dividendo"
          name="dividendDigits"
        >
          <InputNumber min={1} max={5} />
        </Form.Item>
        <Form.Item<Divisions>
          label="Digitos para el divisor"
          name="divisorDigits"
        >
          <InputNumber min={1} max={3} />
        </Form.Item>
        <Form.Item<Divisions>
          label="Incluir decimales"
          name="canHaveRemainder"
          valuePropName="checked"
        >
          <Checkbox />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={isLoading}>
            Generar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
