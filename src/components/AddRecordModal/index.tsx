import React from "react";
import { Modal, Form, Input, FormInstance } from "antd";

import { validationRules } from "../../utils/validationSchema";

interface AddRecordModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  onAdd: (values: { name: string; age: number; address: string }) => void;
  form: FormInstance;
}

export const AddRecordModal: React.FC<AddRecordModalProps> = ({
  isModalOpen,
  onClose,
  onAdd,
  form,
}) => (
  <Modal
    title="Добавить запись"
    open={isModalOpen}
    onCancel={onClose}
    onOk={() => form.submit()}
  >
    <Form form={form} layout="vertical" onFinish={onAdd}>
      <Form.Item
        name="name"
        label="Имя"
        rules={validationRules.name}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Возраст"
        rules={validationRules.age}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="address"
        label="Адрес"
        rules={validationRules.address}
      >
        <Input />
      </Form.Item>
    </Form>
  </Modal>
);
