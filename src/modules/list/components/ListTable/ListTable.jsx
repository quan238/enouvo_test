/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';

import { Table } from 'antd';
import listAction from 'modules/list/actions/listAction';
import { useDispatch, useSelector } from 'react-redux';
import { SORT } from 'utils/ENUM';
import { history } from 'App/App';

const ListTable = function () {
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableChange, setTableChange] = useState({
    page: 1,
    orderBy: 'id',
    order: SORT.ASC
  });

  const dispatch = useDispatch();

  const handleTableChange = ({ current }) => {
    setTableChange({ page: current });
  };

  const fetchStoreList = () => {
    dispatch({
      type: listAction.FETCH_STORE_LIST,
      payload: {
        page: tableChange.page,
        orderBy: tableChange.orderBy
      }
    });
  };

  const { data: dataStore, total, isFetching } = useSelector((state) => state.list.list);

  useEffect(() => {
    fetchStoreList();
  }, [tableChange]);

  useEffect(() => {
    if (dataStore) {
      setData(dataStore);
    }
  }, [dataStore]);

  const isEditing = (record) => record.key === editingKey;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      sorter: true,
      onHeaderCell: ({ dataIndex }) => {
        return {
          onClick: () => {
            setTableChange({ orderBy: dataIndex });
          }
        };
      },
      editable: true
    },
    {
      title: 'City',
      dataIndex: 'city',
      width: '15%',
      sorter: true,
      editable: true,
      onHeaderCell: ({ dataIndex }) => {
        return {
          onClick: () => {
            setTableChange({ orderBy: dataIndex });
          }
        };
      }
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      width: '10%',
      sorter: true,
      editable: true,
      onHeaderCell: ({ dataIndex }) => {
        return {
          onClick: () => {
            setTableChange({ orderBy: dataIndex });
          }
        };
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '25%',
      sorter: true,
      editable: true,
      onHeaderCell: ({ dataIndex }) => {
        return {
          onClick: () => {
            setTableChange({ orderBy: dataIndex });
          }
        };
      }
    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      width: '20%',
      editable: true
    }
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });

  const onSelectChange = (rowKey) => {
    setSelectedRowKeys(rowKey);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        }
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        }
      }
    ]
  };

  return (
    <Table
      style={{ padding: '55px', paddingBottom: '100px' }}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            const { id } = data[rowIndex];
            history.push(`/store/${id}`);
          } // click row
        };
      }}
      rowSelection={rowSelection}
      bordered
      dataSource={data}
      columns={mergedColumns}
      loading={isFetching}
      pagination={{ ...tableChange.page, total }}
      onChange={handleTableChange}
    />
  );
};

export default ListTable;
