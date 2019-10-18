import React, { Component, Fragment } from 'react'

export default class TodoHeader extends Component {

    addItem = ( e ) => {  //? 输入框回车运行 Layout组件传入的添加数据表项目的事件
        if ( e.keyCode === 13 ) {  //* 当回车 时执行
            // console.log("张浩雨: TodoHeader -> addItem -> e.keyCode", e.keyCode)
            this.props.addTodoItem( e.target.value );
            e.target.value = ""
        }
    }
    render () {
        return (
            <Fragment>
                <section className="form-group" style={{ width: '100%' }}>
                    <label htmlFor="task">请输入要添加的任务事项</label>
                    <input type="text" className="form-control" onKeyUp={this.addItem} />
                </section>
            </Fragment>
        )
    }
}
