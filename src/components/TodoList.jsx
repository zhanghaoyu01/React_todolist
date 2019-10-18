import React, { Fragment } from 'react'
import TodoItem from './TodoItem'

const TodoList = ( props ) => {

    function renderItem () {
        // console.log('么么哒');
        return props.todos.map( ( item, index ) => <TodoItem key={item.id} index={ index } {...props} {...item}></TodoItem> )
    }

    return (
        <Fragment>
            <ul className="list-group" style={{ width: '100%' }}>
                {renderItem()}
            </ul>

        </Fragment>
    )
}

export default TodoList
