import React, { Component } from 'react'
import { Menu, Icon, Switch } from 'antd';
import './index.less'
import MenuConfig from '../../resource/menuConfig'
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;



export default class NavLeft extends Component {

  componentDidMount(){
   const menuTreeNode =  this.renderMenu1(MenuConfig)
   this.setState({
     menuTreeNode
   })
  }
  
  //一级菜单渲染
  renderMenu1 = (data)=>{
  return  data.map( (item)=>
                    
                          <SubMenu
                              key={item.key}
                              title={
                                <Link to={item.key}>
                                  <span>
                                    <Icon type="appstore" />
                                    <span>{item.title}</span>
                                  </span>
                                </Link>
                                }
                          >
                            {item.children ? item.children.map( (item)=>{ return <Menu.Item key={item.key}> <Link to = {item.key}>{item.title}</Link> </Menu.Item> } )  : null }
                              
                          </SubMenu>
                     )
                  }
    render() {
        return (
            <div>
                <div className='logo'>
                    <img src= "assets/logo-ant.svg" />
                    <h1>Imoc MS</h1>        
                </div>    
                <div>
                <Menu>{this.state && this.state.menuTreeNode }</Menu>
                </div>
            </div>
        )
    }
}

