import React,{useState,useEffect} from 'react'
import { IMovieModel } from './model';

const useForm = (initialFieldValues  : IMovieModel) => {
    const [values,setValues] = useState(initialFieldValues);

    const handleChange = (e : any) =>{
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        })
    }
    const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
    }
    return {
        values,
        setValues,
        handleChange,
        resetForm
    }
}

export default useForm