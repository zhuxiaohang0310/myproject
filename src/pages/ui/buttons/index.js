import React, { Component } from 'react'
import './index.less'
import { Button } from 'antd';

export default class Buttons extends Component {
    render() {
        return (
            <div className = 'buttons'>
                <div>
                    <Button type="primary">航少</Button>
                    <Button >Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                </div>
            </div>
        )
    }
}
