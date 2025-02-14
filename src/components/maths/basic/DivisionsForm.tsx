import { Form, InputNumber, Button, Checkbox } from "antd";
import { getPdfFile } from "../../../services/PdfFile.service";
import type { Divisions } from "../../../types/maths/ElementaryMathsForm.type";
import { buildQueryString } from "../../../utils/buildQueryString.util";

export const DivisionsForm = () => {
  const onFinish = async (values: Divisions) => {
    const query = buildQueryString("/basic-maths/divisions", values);
    await getPdfFile(query);
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
          <InputNumber />
        </Form.Item>
        <Form.Item<Divisions>
          label="Digitos para el dividendo"
          name="dividendDigits"
        >
          <InputNumber />
        </Form.Item>
        <Form.Item<Divisions>
          label="Digitos para el divisor"
          name="divisorDigits"
        >
          <InputNumber />
        </Form.Item>
        <Form.Item<Divisions>
          label="Incluir decimales"
          name="canHaveRemainder"
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
