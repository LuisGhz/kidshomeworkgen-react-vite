import { Form, InputNumber, Button } from "antd";
import type { Additions } from "types/maths/ElementaryMathsForm.type";
import { useBasics } from "hooks/maths/useBasics";
import { useContext } from "react";
import { AppContext } from "context/AppContext";

export const AdditionsForm = () => {
  const { isLoading } = useContext(AppContext)
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
          <InputNumber min={1} max={2} />
        </Form.Item>
        <Form.Item<Additions>
          label="Digitos para el primer numero"
          name="firstAddendDigits"
        >
          <InputNumber min={1} max={5} />
        </Form.Item>
        <Form.Item<Additions>
          label="Digitos para el segundo numero"
          name="secondAddendDigits"
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
