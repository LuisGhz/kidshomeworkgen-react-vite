import { Form, InputNumber, Checkbox, Button } from "antd";
import { getPdfFile } from "../../../services/PdfFile.service";
import type { FrAdditions } from "../../../types/maths/FractionsForm.type";
import { buildQueryString } from "../../../utils/buildQueryString.util";
import { DenominatorsSelect } from "../../inputs/DenominatorsSelect";

export const FrAdditionsForm = () => {
  const onFinish = async (values: FrAdditions) => {
    const query = buildQueryString("/fractions/additions", values);
    await getPdfFile(query);
  };

  return (
    <>
      <Form
        name="fractions-additions"
        initialValues={{
          pages: 1,
          canHaveWholes: false,
          denominatorsType: "mixed",
        }}
        onFinish={onFinish}
      >
        <Form.Item<FrAdditions> label="Páginas" name="pages">
          <InputNumber />
        </Form.Item>
        <Form.Item<FrAdditions>
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
