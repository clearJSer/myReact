import React ,{Component} from 'react'

import { Menu, Icon } from 'antd';

import { Link } from 'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Left extends Component{
	state = {
    current: '1',
    openKeys: [],
  }
  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  }
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }
	render(){
		return (
			<div className= "left">
			  <Menu
		        onClick={this.handleClick}
		        style={{ width: 210 }}
		        defaultSelectedKeys={['1']}
		        defaultOpenKeys={['sub1']}
		        mode="inline"
		      >
		        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>系统资讯</span></span>}>
		          <MenuItemGroup key="g1" title="首页">
		            <Menu.Item key="1"><Link to="/center/home">待办事项</Link></Menu.Item>
		            <Menu.Item key="2"><Link to="/center/task">任务列表</Link></Menu.Item>
		            <Menu.Item key="3"><Link to="/center/comment">评论</Link></Menu.Item>
		            <Menu.Item key="5"><Link to="/center/flux">fluxDemo</Link></Menu.Item>
		            <Menu.Item key="4"><Link to="/center/todolist">todoList</Link></Menu.Item>
		          </MenuItemGroup>
		          
		        </SubMenu>
		        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>系统管理</span></span>}>
		          <Menu.Item key="5">集群系统管理</Menu.Item>
		          <Menu.Item key="6">影像扫描控件</Menu.Item>
		          <SubMenu key="sub3" title="Submenu">
		            <Menu.Item key="7">Option 7</Menu.Item>
		            <Menu.Item key="8">Option 8</Menu.Item>
		          </SubMenu>
		        </SubMenu>
		        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>用户管理</span></span>}>
		          <Menu.Item key="9">管理员</Menu.Item>
		          <Menu.Item key="10">作业中心用户</Menu.Item>
		          <Menu.Item key="11">总行用户</Menu.Item>
		          <Menu.Item key="12">分行用户</Menu.Item>
		        </SubMenu>
		      </Menu>
			</div>
		)
	}
}

export default Left;
