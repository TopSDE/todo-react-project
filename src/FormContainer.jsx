import React from 'react'

const FormContainer = (props) => {
    console.log(props);
    const { handleSubmit, handleChange, course, trainer} = props
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='cname'>COURSE </label>
                    <input 
                    type='text' 
                    id='cname' 
                    name="course"
                    value={course}
                    onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='cname'>TRAINER </label>
                    <input 
                    type='text' 
                    id='cname'
                    name="trainer"
                    value={trainer}
                    onChange={handleChange}></input>
                </div>
                <button>SUBMIT</button>
            </form>
        </>
    )
}
export default FormContainer