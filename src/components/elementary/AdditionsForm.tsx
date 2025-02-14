import { Form, InputNumber, Checkbox, Button } from "antd";
import { getPdfFile } from "../../services/PdfFile.service";
import type { Additions } from "../../types/ElementaryMathsForm.type";
import { buildQueryString } from "../../utils/buildQueryString.util";

export const AdditionsForm = () => {
  const onFinish = async (values: Additions) => {
    const query = buildQueryString("/basic-maths/additions", values);
    await getPdfFile(query);
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
