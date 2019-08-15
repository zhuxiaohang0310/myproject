import  React, { Component } from 'react'

export default class Child extends Component {

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    componentWillMount(){
        console.log('will mount')
    }

    componentDidMount(){
        console.log('did mount')
    }

    componentWillReceiveProps(newprops){
        console.log('will props' + newprops.name)
    }
    shouldComponentUpdate(){
        console.log('should update')
        return true
    }
    componentWillUpdate(){
        console.log('will update')
    }
    componentDidUpdate(){
        console.log('did update')
    }

 
    render() {
        return (
            <div>
                这里是子组件
                <p>{this.props.count}</p>   
            </div>
        )
    }
}
