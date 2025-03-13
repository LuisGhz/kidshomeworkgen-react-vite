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
          multiplicandDitis: 5,
          multiplierDigits: 5,
        }}
        onFinish={onFinish}
      >
        <Form.Item<Multiplications> label="Páginas" name="pages">
          <InputNumber />
        </Form.Item>
        <Form.Item<Multiplications>
          label="Digitos para el multiplicando"
          name="multiplicandDitis"
        >
          <InputNumber />
        </Form.Item>
        <Form.Item<Multiplications>
          label="Digitos para el multiplicador"
          name="multiplierDigits"
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
