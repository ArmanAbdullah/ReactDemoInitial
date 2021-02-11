import { IMovieModel } from './../components/model';
import axios from "axios";

const baseUrl = "http://localhost:60671/api/"

const MovieApi = (url = baseUrl + 'movie/') =>{
    return{
        getAll: () => axios.get(url),
        create: (newMovie : IMovieModel) => axios.post(url, newMovie),
        update: (id: number, updateRecord : IMovieModel) => axios.put(url + id, updateRecord),
        delete: (id : number) => axios.delete(url + id)
    }
}

export default MovieApi;