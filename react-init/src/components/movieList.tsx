import React,{useState, useEffect} from 'react';
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";
import MovieForm from './movieForm';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IMovieModel } from "./model";
import EditMovie from "./editMovie";

const initialFieldValues : IMovieModel = {
    id: 0,
    name: '',
    director: ''
}
const MovieList = ()=>{
    const [values , setValues] = useState<IMovieModel[]>([])
    const [currentId, setCurrentId] = useState<number>(0)
    const [movieData, setMovieData] = useState<IMovieModel>(initialFieldValues)

    useEffect(() => {
        newFunction(setValues);  
    }, [])//componentDidMount

    const handleEdit=(record: IMovieModel)=>{
        setCurrentId(record.id);
        setMovieData(record);
    }

    const onDelete = (id : Number) => {
        if (window.confirm('Are you sure to delete this record?')){
            axios.delete('http://localhost:60671/api/movie/'+id)
            .then(res=> newFunction(setValues))
            .catch(err => console.log(err));
        }
            // props.deleteDCandidate(id,()=>addToast("Deleted successfully", { appearance: 'info' }))
    }

    const editSuccess =()=>{
        newFunction(setValues);
        setCurrentId(0);
    }

    // const onEdit = (id : Number) => {
    //     console.log(id);
    //     axios.put('http://localhost:60671/api/movie/'+id)
    //     .then(res=> console.log(res))
    //     .catch(err => console.log(err));
    //         // props.deleteDCandidate(id,()=>addToast("Deleted successfully", { appearance: 'info' }))
    // }

    return (
        <Paper elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    {
                    (currentId==0)?
                    <MovieForm onSubmitSuccess={() => newFunction(setValues)}/>
                :
                     <EditMovie onSubmitSuccess={() => editSuccess()} movieData = {movieData}/>
                 }
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead >
                                <TableRow>
                                    <TableCell>Movie Name</TableCell>
                                    <TableCell>Direcctor</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    values.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.name}</TableCell>
                                            <TableCell>{record.director}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    editMovie
                                                    
                                                        <Button><EditIcon color="primary"
                                                            onClick={ () => { handleEdit(record) } } /></Button>
                                                        <Button><DeleteIcon color="secondary"
                                                            onClick={() => onDelete(record.id)} /></Button>
                                                </ButtonGroup>
                                            </TableCell>
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
