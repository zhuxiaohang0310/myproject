import React from 'react';
import Child from './Child'

export default class Life extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           count:0,
           name:'zhuxiaohang'
       };
   }


   handleAdd = ()=>{
        this.setState({        
            count : this.state.count + 1 
        })
   }

    render(){
        return (
        <div>
            <p>React生命周期介绍</p> 
            <button onClick = {this.handleAdd}>点击一下</button>
            {this.state.count}
            <Child name = {this.state.count}></Child>
        </div>
        )
    }
}

