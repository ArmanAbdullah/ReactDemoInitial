import React,{useState, useEffect} from 'react';
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";
import MovieForm from './movieForm';
import axios from 'axios';
import { IMovieModel } from "./model";

const MovieList = ()=>{
    const [values , setValues] = useState<IMovieModel[]>([])
    useEffect(() => {
        newFunction(setValues);  
    }, [])//componentDidMount

    return (
        <Paper elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <MovieForm onSubmitSuccess={() => newFunction(setValues)} />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead >
                                <TableRow>
                                    <TableCell>Movie Name</TableCell>
                                    <TableCell>Direcctor</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    values.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.name}</TableCell>
                                            <TableCell>{record.director}</TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default MovieList;

function newFunction(setValues: React.Dispatch<React.SetStateAction<IMovieModel[]>>) {
    axios.get<IMovieModel[]>('http://localhost:60671/api/movie')
        .then(response => {
            setValues(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
