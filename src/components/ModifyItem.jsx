import React, { Fragment } from 'react'

export default function ModifyItem ( props ) {

    function modify ( e ) {
        // console.log("张浩雨: modify -> e.keyCode", e.keyCode)
        if ( e.keyCode === 13 ) {
            props.changeFlag()
            props.modifyTodoItem( props.id, e.target.value )
            // console.log("张浩雨: modify -> e.target.value", e.target.value)
        }
    }
    return (
        <Fragment>
            <div className="form-group" style={{ width: '100%' }}>
                <input type="text" name="modify" defaultValue={props.task} onKeyUp={modify} className="form-control" placeholder="请输入修改的任务" />
            </div>
        </Fragment>
    )
}
