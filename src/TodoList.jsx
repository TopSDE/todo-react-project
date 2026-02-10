import React, { Fragment } from 'react'

const TodoList = (props) => {
    console.log(props);
    const { items, handleDelete } = props;

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>COURSE</th>
                        <th>TRAINER</th>
                        <th>MORE OPTION</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 && items.map((val) => {
                        // console.log("current val", val); //obj
                        return (
                            <Fragment key={val.id}>
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.course}</td>
                                    <td>{val.trainer}</td>
                                    <td>
                                        <button>EDIT</button>
                                        <button onClick={() => {
                                            handleDelete(val.id)
                                        }}>DELETE</button>
                                    </td>
                                </tr>
                            </Fragment>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}
export default TodoList