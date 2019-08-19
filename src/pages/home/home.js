import React, { Component } from 'react'
import './home.less'
import {Switch,Route,Redirect} from 'react-router-dom'
import HomePage from '../index'
import RichText from '../richtext'
import UI from '../ui'
import Form from '../form'
import But from '../ui/buttons'
import Modals from '../ui/modals'

export default class home extends Component {
    render() {
        return (
            <div className = 'home'>
                <Switch>
                    {/* 路由重定向 */}
                    <Route path='/' exact render={()=> (
                        <Redirect to='/home'/>
                    )}/>
                    
                    <Route path='/home' component={HomePage}/>
                    <Route path="/rich" component={RichText}/>
                    <Route path="/ui" exact component={UI}/>
                    <Route path="/ui/buttons" component={But}/>
                    <Route path="/ui/modals" component={Modals}/>
                    <Route path="/form" exact component={Form}/>
                    
                </Switch>
            </div>
        )
    }
}
