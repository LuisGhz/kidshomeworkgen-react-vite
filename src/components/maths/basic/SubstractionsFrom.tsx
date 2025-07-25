import { Form, InputNumber, Button } from "antd";
import type { Substractions } from "types/maths/ElementaryMathsForm.type";
import { useBasics } from "hooks/maths/useBasics";
import { AppContext } from "context/AppContext";
import { useContext } from "react";

export const SubstractionsForm = () => {
  const { isLoading } = useContext(AppContext);
  const { substractions } = useBasics();

  const onFinish = async (values: Substractions) => {
    await substractions(values);
  };

  return (
    <>
      <Form
        name="elementary-substractions"
        initialValues={{
          pages: 1,
          minuendDigits: 5,
          subtrahendDigits: 5,
        }}
        onFinish={onFinish}
      >
        <Form.Item<Substractions> label="Páginas" name="pages">
          <InputNumber min={1} max={2} />
        </Form.Item>
        <Form.Item<Substractions>
          label="Digitos para el minuendo"
          name="minuendDigits"
        >
          <InputNumber min={1} max={5} />
        </Form.Item>
        <Form.Item<Substractions>
          label="Digitos para el sustraendo"
          name="subtrahendDigits"
        >
          <InputNumber min={1} max={5} />
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
