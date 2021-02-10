import React, { useState, useEffect } from "react";import axios from 'axios'; 
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import CommonForm from "./commonForm";
import { IMovieModel } from "./model";

const initialFieldValues : IMovieModel = {
    id: 0,
    name: '',
    director: ''
}

type TProps = {

    onSubmitSuccess: () => void;
    movieData:IMovieModel;
}

const EditMovie = (props: TProps) =>{
    debugger;
    const {
        values,
        setValues,
        handleChange,
        resetForm
     } = CommonForm(initialFieldValues)

     useEffect(() => {
        setValues(props.movieData)  
    }, [])

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.put("http://localhost:60671/api/movie/"+props.movieData.id, values)
        .then(res => {
            console.log("output"+res.data +"done");
            props.onSubmitSuccess();
            resetForm()
        })
        .catch(err=> console.log(err))
     }

     return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="name"
                        variant="outlined"
                        label="Movie Name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    <TextField
                        name="director"
                        variant="outlined"
                        label="Director"
                        value={values.director}
                        onChange={handleChange}
                    />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );

}

export default EditMovie;
