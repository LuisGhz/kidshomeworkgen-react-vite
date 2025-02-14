import { Form, InputNumber, Button } from "antd";
import { getPdfFile } from "../../services/PdfFile.service";
import type { Substractions } from "../../types/ElementaryMathsForm.type";
import { buildQueryString } from "../../utils/buildQueryString.util";

export const SubstractionsForm = () => {
  const onFinish = async (values: Substractions) => {
    const query = buildQueryString("/basic-maths/substractions", values);
    await getPdfFile(query);
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
