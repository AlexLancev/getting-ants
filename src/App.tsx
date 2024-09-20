import React, { useState, useCallback } from 'react';
import { Form } from 'antd';

import { TableComponent } from './components/TableComponent';
import { AddRecordModal } from './components/AddRecordModal';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const initialData: DataType[] = [
  {
    key: '1',
    name: 'Aleksei Vavulo',
    age: 36,
    address: 'Russia',
  },
];

export const App: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataType[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [form] = Form.useForm();

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleAdd = useCallback((values: { name: string; age: number; address: string }) => {
    const newRecord: DataType = {
      key: (dataSource.length + 1).toString(),
      name: values.name,
      age: values.age,
      address: values.address,
    };
    setDataSource(prev => [...prev, newRecord]);
    form.resetFields();
    handleCancel();
  }, [dataSource, form, handleCancel]);

  const handleDelete = useCallback((key: string) => {
    setDataSource(prev => prev.filter(item => item.key !== key));
  }, []);

  return (
    <>
      <TableComponent dataSource={dataSource} onDelete={handleDelete} onShowModal={showModal} />
      <AddRecordModal isModalOpen={isModalOpen} onClose={handleCancel} onAdd={handleAdd} form={form} />
    </>
  );
};
