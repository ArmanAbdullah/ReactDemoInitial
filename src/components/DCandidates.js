import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import Table from './table';
import * as actions from '../actions/dCandidate';
import DeCandidateForm from './DCandidateForm';

const DeCandidates= (props) => {
    useEffect(()=>{
        props.fetchAllDCandidates()
    },[])

    const tabRow =() =>{
        return props.dCandidateList.map(function(object, i){  
            return <Table obj={object} key={i} />;  
        });  
    }
    return (
    <div>  
        <h2 align="center">Movie List</h2>  
        <table className="table table-striped" style={{ marginTop: 10, marginBottom : 50 }}>  
          <thead>  
            <tr>  
              <th>Movie</th>  
              <th>Director</th> 
              <th colSpan="4">Action</th>  
            </tr>  
          </thead>  
          <tbody>  
           { tabRow() }   
          </tbody>  
        </table>
        <DeCandidateForm/>
      </div> )
}

const mapStateToProps = state=>{
    return {
        dCandidateList: state.dCandidate.list
    }
}
const mapActionToProps = {
        fetchAllDCandidates: actions.fetchAll
}
export default connect(mapStateToProps,mapActionToProps) (DeCandidates);