import React from 'react';
import { Modal, Form, Input, FormInstance } from 'antd';

interface AddRecordModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  onAdd: (values: { name: string; age: number; address: string }) => void;
  form: FormInstance;
}

export const AddRecordModal: React.FC<AddRecordModalProps> = ({ isModalOpen, onClose, onAdd, form }) => (
  <Modal title="Добавить запись" open={isModalOpen} onCancel={onClose} onOk={() => form.submit()}>
    <Form form={form} layout="vertical" onFinish={onAdd}>
      <Form.Item name="name" label="Имя" rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Возраст" rules={[{ required: true, message: 'Пожалуйста, введите возраст!' }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name="address" label="Адрес" rules={[{ required: true, message: 'Пожалуйста, введите адрес!' }]}>
        <Input />
      </Form.Item>
    </Form>
  </Modal>
);
