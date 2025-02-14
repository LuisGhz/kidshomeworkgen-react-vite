import { Form, InputNumber, Checkbox, Button } from "antd";
import { getPdfFile } from "../../../services/PdfFile.service";
import type { FrSubstractions } from "../../../types/maths/FractionsForm.type";
import { buildQueryString } from "../../../utils/buildQueryString.util";
import { DenominatorsSelect } from "../../inputs/DenominatorsSelect";

export const FrSubstractionsForm = () => {
  const onFinish = async (values: FrSubstractions) => {
    const query = buildQueryString("/fractions/substractions", values);
    await getPdfFile(query);
  };

  return (
    <>
      <Form
        name="fractions-substractions"
        initialValues={{
          pages: 1,
          canHaveWholes: false,
          denominatorsType: "mixed",
        }}
        onFinish={onFinish}
      >
        <Form.Item<FrSubstractions> label="Páginas" name="pages">
          <InputNumber />
        </Form.Item>
        <Form.Item<FrSubstractions>
          label="Incluir decimales"
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
