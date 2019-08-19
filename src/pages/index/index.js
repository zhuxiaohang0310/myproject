import React from 'react';

import './index.less';
import { Table } from 'antd';

const columns = [{
  title: '已选中3个文件',
  dataIndex: 'name',
  render: text => <a href="#"><img src={pictures[0].url}/></a>,
}];

const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
  ];

export default class Homepage extends React.Component {
  state = {
    selectedRowKeys: [],
  };
  selectRow = (record) => {
    console.log("record---", record);
    const selectedRowKeys = [...this.state.selectedRowKeys];
    if (selectedRowKeys.indexOf(record.key) >= 0) {
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
    } else {
      selectedRowKeys.push(record.key);
    }
    this.setState({ selectedRowKeys });
  }
  onSelectedRowKeysChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectedRowKeysChange,
    };
    return (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={pictures}
        onRow={(record) => ({
          onClick: () => {
            this.selectRow(record);
          },
        })}
        
      >

         
      </Table>
    );
  }
}
