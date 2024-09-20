import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';

import { TableComponent } from './components/TableComponent';
import { AddRecordModal } from './components/AddRecordModal';

import { DataType, AddRecordValues } from './types/index';

import { toggleModal, addRecord, deleteRecord } from './store/slice';
import { RootState } from './store';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { dataSource, isModalOpen } = useSelector((state: RootState) => state.data);
  const [form] = Form.useForm();

  const showModal = () => dispatch(toggleModal(true));

  const handleCancel = () => {
    dispatch(toggleModal(false));
    form.resetFields();
  };

  const handleAdd = (values: AddRecordValues) => {
    const newRecord: DataType = {
      key: (dataSource.length + 1).toString(),
      name: values.name,
      age: values.age,
      address: values.address,
    };
    dispatch(addRecord(newRecord));
    handleCancel();
  };

  const handleDelete = (key: string) => {
    dispatch(deleteRecord(key));
  };

  return (
    <>
      <TableComponent dataSource={dataSource} onDelete={handleDelete} onShowModal={showModal} />
      <AddRecordModal isModalOpen={isModalOpen} onClose={handleCancel} onAdd={handleAdd} form={form} />
    </>
  );
};
