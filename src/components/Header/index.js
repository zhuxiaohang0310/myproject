import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './index.less'
import {withRouter} from 'react-router-dom'

import Util from '../../utils/utils'

 class Header extends Component {

    componentWillMount(){
        this.setState({
            username:'欢迎 , 梅川酷酷'
        })

        setInterval(()=>{
           let sysTime =  new Date().toLocaleString( )
           this.setState({
               sysTime
           })
        },1000)

        

    }



    render() {
       
        return (
            <div className = 'header'>
                <Row className = 'header-top'>
                    <Col span={24} className = 'header-top-div'>
                        <span>{this.state.username}</span>
                        <a href='baudu'>退出</a>
                    </Col>
                </Row>

                <Row className = 'breadcrumb'>
                    <Col span={4} className = 'breadcrumb-title'>
                        {this.props.location.pathname}
                        <span className = 'd3'></span>
                    </Col>
                    <Col span={20} className = 'weather'>
                        <span className = 'date'>{this.state.sysTime}</span>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default withRouter(Header)