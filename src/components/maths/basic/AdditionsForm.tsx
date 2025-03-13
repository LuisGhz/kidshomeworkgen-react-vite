import { Form, InputNumber, Checkbox, Button } from "antd";
import type { Additions } from "types/maths/ElementaryMathsForm.type";
import { useBasics } from "hooks/maths/useBasics";

export const AdditionsForm = () => {
  const { additions } = useBasics();

  const onFinish = async (values: Additions) => {
    await additions(values);
  };

  return (
    <>
      <Form
        name="elementary-additions"
        initialValues={{
          pages: 1,
          firstAddendDigits: 5,
          secondAddendDigits: 5,
          includeDecimals: false,
        }}
        onFinish={onFinish}
      >
        <Form.Item<Additions> label="Páginas" name="pages">
          <InputNumber />
        </Form.Item>
        <Form.Item<Additions>
          label="Digitos para el primer numero"
          name="firstAddendDigits"
        >
          <InputNumber />
        </Form.Item>
        <Form.Item<Additions>
          label="Digitos para el segundo numero"
          name="secondAddendDigits"
        >
          <InputNumber />
        </Form.Item>
        <Form.Item<Additions>
          label="Incluir decimales"
          name="includeDecimals"
          valuePropName="checked"
        >
          <Checkbox />
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
