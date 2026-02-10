import React, { useState } from 'react'
import FormContainer from './FormContainer'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

const App = () => {
    
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault()

        if (formData.course === "" || formData.trainer === "") {
            alert("Kindly Enter the Details!!!")

        } else {
            setFormData({
                ...formData,
            items: [
                ...formData.items,
                {
                    course: formData.course,
                    trainer: formData.trainer,
                    id: formData.id
                }
            ],
            course: "",
            trainer: "",
            id: uuidv4()
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

    return (
        <>
            <FormContainer
            handleSubmit={handleSubmit}
            course={formData.course}
            trainer={formData.trainer}
            handleChange={handleChange}
            />
            <TodoList items={formData.items} />
        </>
    )
}
export default App