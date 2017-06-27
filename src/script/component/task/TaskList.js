import React from 'react'
import { Input } from 'antd';
import { DatePicker } from 'antd';
import { Button } from 'antd';

import { Table, Icon } from 'antd';
export default class TaskList extends React.Component{
	
	render(){
		function onChange(date, dateString) {
		  console.log(date, dateString);
		}
		const columns = [{
		  title: 'Name',
		  dataIndex: 'name',
		  key: 'name',
		  render: text => <a href="#">{text}</a>,
		}, {
		  title: 'Age',
		  dataIndex: 'age',
		  key: 'age',
		}, {
		  title: 'Address',
		  dataIndex: 'address',
		  key: 'address',
		}, {
		  title: 'Action',
		  key: 'action',
		  render: (text, record) => (
		    <span>
		      <a href="#">Action 一 {record.name}</a>
		      <span className="ant-divider" />
		      <a href="#">Delete</a>
		      <span className="ant-divider" />
		      <a href="#" className="ant-dropdown-link">
		        More actions <Icon type="down" />
		      </a>
		    </span>
		  ),
		}];
		
		const data = [{
		  key: '1',
		  name: 'John Brown',
		  age: 32,
		  address: 'New York No. 1 Lake Park',
		}, {
		  key: '2',
		  name: 'Jim Green',
		  age: 42,
		  address: 'London No. 1 Lake Park',
		}, {
		  key: '3',
		  name: 'Joe Black',
		  age: 32,
		  address: 'Sidney No. 1 Lake Park',
		}];		
		return (
		<div>
			<section className="searchTask">
			    名称:<Input placeholder="Basic usage" style={{width:'200px'}} />
			    名称:<Input placeholder="Basic usage" style={{width:'200px'}} />
			    名称:<Input placeholder="Basic usage" style={{width:'200px'}} />
			    时间:<DatePicker onChange={onChange} />{' '}
			    <Button type="primary">查询</Button>{' '}
    			<Button>重置</Button>
			</section>
			<section className="grid">
				<Table columns={columns} dataSource={data} />
			</section>
		</div>)
	}
}


