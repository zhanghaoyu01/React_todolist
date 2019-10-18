import React, { Component, Fragment } from 'react'
import ModifyItem from './ModifyItem';

export default class TodoItem extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            flag: false
        }
    }

    changeFlag=() => {
        const { flag } = this.state;
        this.setState({
            flag:!flag
        })
    }

    render () {
        const { task, id, removeTodoItem } = this.props;
        const { flag } = this.state;
        return (
            <Fragment>
                <li className="list-group-item">
                    <p>{task}</p>
                    {flag && <ModifyItem changeFlag={ this.changeFlag } {...this.props}></ModifyItem>}
                    <section style={{ textAlign: 'right' }}>
                        <button className="btn btn-success" 
                            onClick={this.changeFlag}
                        style={{ marginRight: '10px' }}> 修改</button>
                        <button className="btn btn-danger" onClick={() => {
                            removeTodoItem( id )
                        }}> 删除</button>
                    </section>
                </li>
            </Fragment>
        )
    }
}
