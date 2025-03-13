import { Form, InputNumber, Button } from "antd";
import type { Substractions } from "types/maths/ElementaryMathsForm.type";
import { useBasics } from "hooks/maths/useBasics";

export const SubstractionsForm = () => {
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
          <InputNumber />
        </Form.Item>
        <Form.Item<Substractions>
          label="Digitos para el minuendo"
          name="minuendDigits"
        >
          <InputNumber />
        </Form.Item>
        <Form.Item<Substractions>
          label="Digitos para el sustraendo"
          name="subtrahendDigits"
        >
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Generar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
