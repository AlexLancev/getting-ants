import React from 'react';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface TableComponentProps {
  dataSource: DataType[];
  onDelete: (key: string) => void;
  onShowModal: () => void;
}

export const TableComponent: React.FC<TableComponentProps> = ({ dataSource, onDelete, onShowModal }) => {
  const columns: ColumnsType<DataType> = [
    { title: 'Имя', dataIndex: 'name', key: 'name' },
    { title: 'Возраст', dataIndex: 'age', key: 'age' },
    { title: 'Адрес', dataIndex: 'address', key: 'address' },
    {
      title: 'Действие',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => onDelete(record.key)} type="primary" danger>
          Удалить
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={onShowModal}>
        Добавить запись
      </Button>
      <Table dataSource={dataSource} columns={columns} rowKey="key" />
    </div>
  );
};
