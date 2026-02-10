import React, { useState } from 'react'
import FormContainer from './FormContainer'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

const App = () => {
    
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault()

        //!pass the data in items array on submitting form
        if (formData.course === "" || formData.trainer === "") {
            alert("Kindly Enter the Details!!!")

        } else {
            setFormData({
                ...formData, //? prevent the over-riding within "state obj"
            items: [
                ...formData.items, //? prevent the over-riding within "item array"
                {
                    course: formData.course,
                    trainer: formData.trainer,
                    id: formData.id
                }
            ],
            course: "", //? converting "course input" back to empty
            trainer: "", //? converting "trainer input" back to empty
            id: uuidv4() //? to generate "unique ID" for next data
        })
    }
    
    }

    const handleChange = (event) => {
        console.log(event);
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]:value
            // if the data is present in a variable
            // and i want to make that variable as a key
            // then wrap that variable within [ ] in order to update
        })
    }

    const [formData, setFormData] = useState({
        items:[], // => to store multi set of data
        course:"", // => 1st input
        trainer:"", // => 2nd input
        id: uuidv4() // => to generate "unique id" for each set
    })

    //! ************ delete one set of data ************
    const handleDelete = (delId) => {
        console.log("Id of item to be deleted", delId);
        const filterVal = formData.items.filter((val) => {
            // console.log("within filter current val", val); // obj
            return val.id !== delId
        })
        console.log("remaining val", filterVal); // array
        setFormData({ ...formData, items: filterVal })
    }

    return (
        <>
            <FormContainer
            handleSubmit={handleSubmit}
            course={formData.course}
            trainer={formData.trainer}
            handleChange={handleChange}
            />
            <TodoList 
            items={formData.items} 
            handleDelete={handleDelete} />
        </>
    )
}
export default App