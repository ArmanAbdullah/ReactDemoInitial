import React,{useState, useEffects} from 'react'

const useForm = (initialFieldValues) => {
    const [values,setValues] = useState(initialFieldValues);

    const handleChange = e =>{
        const {name,value}=e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return {
        values,
        setValues,
        handleChange
    }
}

export default useForm
