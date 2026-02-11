import React from 'react'

const FormContainer = (props) => {
    console.log(props);
    const { handleSubmit, handleChange, course, trainer} = props
    
    return (
        <>
            <form onSubmit={handleSubmit} className='formBlock'>
                <h1>ENTER DETAILS</h1>
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
                <div className='btnBlock'>
                    <button>SUBMIT</button>
                </div>
            </form>
        </>
    )
}
export default FormContainer