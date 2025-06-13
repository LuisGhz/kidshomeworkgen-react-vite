import { Form, InputNumber, Button } from "antd";
import type { Multiplications } from "types/maths/ElementaryMathsForm.type";
import { useBasics } from "hooks/maths/useBasics";

export const MultiplicationsForm = () => {
  const { multiplications } = useBasics();

  const onFinish = async (values: Multiplications) => {
    await multiplications(values);
  };

  return (
    <>
      <Form
        name="elementary-multiplications"
        initialValues={{
          pages: 1,
          multiplicandDigits: 5,
          multiplierDigits: 5,
        }}
        onFinish={onFinish}
      >
        <Form.Item<Multiplications> label="Páginas" name="pages">
          <InputNumber min={1} max={4} />
        </Form.Item>
        <Form.Item<Multiplications>
          label="Digitos para el multiplicando"
          name="multiplicandDigits"
        >
          <InputNumber min={1} max={5} />
        </Form.Item>
        <Form.Item<Multiplications>
          label="Digitos para el multiplicador"
          name="multiplierDigits"
        >
          <InputNumber min={1} max={3} />
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
