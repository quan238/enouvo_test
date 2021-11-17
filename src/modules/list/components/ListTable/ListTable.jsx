import React, { useEffect, useState } from 'react';

import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import listAction from 'modules/list/actions/listAction';
import { useDispatch, useSelector } from 'react-redux';
import { SORT } from 'utils/ENUM';
import { history } from 'App/App';

const EditableCell = function ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`
            }
          ]}>
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ListTable = function () {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableChange, setTableChange] = useState({
    page: 1,
    orderBy: 'name',
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

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '18%',
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
    },
    {
      title: 'Edit',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8
              }}>
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      }
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
    <Form form={form} component={false}>
      <Table
        style={{ padding: '55px' }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              const { id } = data[rowIndex];
              history.push(`/vehicle/${id}`);
            } // click row
          };
        }}
        rowSelection={rowSelection}
        components={{
          body: {
            cell: EditableCell
          }
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        loading={isFetching}
        pagination={{ ...tableChange.page, total }}
        onChange={handleTableChange}
      />
    </Form>
  );
};

export default ListTable;
