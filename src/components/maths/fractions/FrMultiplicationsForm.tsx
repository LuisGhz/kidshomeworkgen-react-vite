import { Form, InputNumber, Checkbox, Button } from "antd";
import { getPdfFile } from "../../../services/PdfFile.service";
import type { FrMultiplications } from "../../../types/maths/FractionsForm.type";
import { buildQueryString } from "../../../utils/buildQueryString.util";
import { DenominatorsSelect } from "../../inputs/DenominatorsSelect";

export const FrMultiplicationsForm = () => {
  const onFinish = async (values: FrMultiplications) => {
    const query = buildQueryString("/fractions/multiplications", values);
    await getPdfFile(query);
  };

  return (
    <>
      <Form
        name="fractions-multiplications"
        initialValues={{
          pages: 1,
          canHaveWholes: false,
          denominatorsType: "mixed",
        }}
        onFinish={onFinish}
      >
        <Form.Item<FrMultiplications> label="Páginas" name="pages">
          <InputNumber />
        </Form.Item>
        <Form.Item<FrMultiplications>
          label="Incluir fracciones impropias (Con enteros)"
          name="canHaveWholes"
          valuePropName="checked"
        >
          <Checkbox />
        </Form.Item>
        <DenominatorsSelect />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Generar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
