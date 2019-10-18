import React, { Component, Fragment } from 'react'
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'

import { downSort } from '../utils'

export default class index extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            todos: [   //? 任务数据表
                {
                    id: 1,
                    task: '任务一'
                },
                {
                    id: 2,
                    task: '任务二'
                },
                {
                    id: 3,
                    task: '任务三'
                },
            ]
        }
    }


    addTodoItem = ( task ) => {  //? 添加任务的方法
        const { todos } = this.state;
        this.setState( () => {
            todos.unshift( {  //? 给数据表添加一条数据
                id: downSort(todos) + 1,  //* 获取数据表中最大的ID值
                task: task
            } );
            return {
            todos
        }
        } );
        // console.log("张浩雨: index -> addTodoItem -> todos", todos)
        

    }
    modifyTodoItem=(id,task) => {   //? 修改数据表中的具体某一项
        const { todos } = this.state;
        this.setState(()=> {
            todos.forEach((elm)=>{
                if(elm.id === id){  //* 判断 算法应该修改哪一项 
                    elm.task = task;
                }
            });
            // console.log("张浩雨: index -> modifyTodoItem -> todos", todos)
            return {
                todos
            }
        })
    }
    removeTodoItem=( index ) => {  //? 删除数据表中的一条数据
        const {todos }= this.state;
        this.setState(() => {  //* 删除数据表中的 一条数据
            todos.splice(index,1 );
            return {
                todos
            }
        })
    }

    render () {
        return (
            <Fragment>

                {/* main-content */}
                <article className="container">


                    {/* input-part */}
                    <section className="row">
                        <TodoHeader addTodoItem={ this.addTodoItem }></TodoHeader>
                    </section>


                    {/* show-list-part */}
                    <section className="row">
                        <TodoList
                            {...this.state }
                            removeTodoItem={this.removeTodoItem}
                            modifyTodoItem= {this.modifyTodoItem}
                        ></TodoList>
                    </section>
                </article>
            </Fragment>
        )
    }
}
