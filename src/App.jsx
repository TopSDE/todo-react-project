import React, { useState } from 'react'
import FormContainer from './FormContainer'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault()
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
        id: uuidv4()
    })

    return (
        <>
            <FormContainer
            handleSubmit={handleSubmit}
            course={formData.course}
            trainer={formData.trainer}
            handleChange={handleChange}
            />
        </>
    )
}

export default App