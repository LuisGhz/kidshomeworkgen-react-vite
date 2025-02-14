import { Form, Select } from "antd";

export const DenominatorsSelect = () => {
  return (
    <Form.Item name="denominatorsType" label="Tipo de denominadores">
      <Select>
        <Select.Option value="same">Mismo</Select.Option>
        <Select.Option value="different">Diferente</Select.Option>
        <Select.Option value="mixed">Mixto</Select.Option>
      </Select>
    </Form.Item>
  );
};
