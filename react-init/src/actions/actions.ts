import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { IMovieModel } from './../components/model';
import { useDispatch } from "react-redux";
import MovieApi from "./apiConstants";
import Store from '../components/store'
export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    GET_ALL: 'GET_ALL'
}
export type AppDispatch = typeof Store.dispatch

export interface IDispatch{

}
export const getAll= () => (dispatch : Dispatch)=>{
    MovieApi().getAll()
    .then(response => {
        dispatch({
            type: ACTION_TYPES.GET_ALL,
            payload: response.data
        })
    })
}

export const create = (data : IMovieModel)  => (dispatch : Dispatch) =>{
    MovieApi().create(data)
    .then(response=>{
        dispatch({
            type:ACTION_TYPES.CREATE,
            payload:response.data
        })
    })
}

export const update = (id : number, data : IMovieModel) => (dispatch : Dispatch) =>{
    MovieApi().update(id, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: { ...data } //id parameter removed payload: { id, ...data }
            })
        })
        .catch(err => console.log(err))
}

export const Delete = (id: number) => (dispatch : Dispatch) => {
    MovieApi().delete(id)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
        })
        .catch(err => console.log(err))
}