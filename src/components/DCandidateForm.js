import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap'; 
import React,{useState, useEffect} from 'react';
import * as actions from '../actions/dCandidate';
import useForm from './useForm';
import { connect } from 'react-redux';

const initialFieldValues = {
    name: '',
    director: ''
} 

const DeCandidateForm= (props) => {
    //const [values, setValues] = useState(initialFieldValues)

    const {
        values,
        setValues,
        handleChange
     } = useForm(initialFieldValues)

     const handleSubmit = e =>{
         debugger;
         e.preventDefault()
         console.log(values)
         props.createDCandidate(values,()=>{window.alert('inserted')})
     }
    

    return (
        <Container >  
        <h4 className="PageHeading">Enter Movie Informations</h4>  
        <Form className="form">  
        <Col>  
            <FormGroup row>  
            <Label for="name" sm={2}>Name</Label>  
            <Col sm={10}>  
                <Input type="text" name="name" onChange={handleChange} value={values.name} placeholder="Enter Movie Name" />  
            </Col>  
            </FormGroup>  
            <FormGroup row>  
            <Label for="director" sm={2}>Director Name</Label>  
            <Col sm={10}>  
                <Input type="text" name="director" onChange={handleChange} value={values.director} placeholder="Enter Director Name" />  
            </Col>  
            </FormGroup>
        </Col>  
        <Col>  
            <FormGroup row>  
            <Col sm={5}>  
            </Col>  
            <Col sm={1}>  
            <Button type="button" onClick={handleSubmit} className="btn btn-success">Submit</Button>  
            </Col>  
            <Col sm={1}>  
                <Button color="danger">Cancel</Button>{' '}  
            </Col>  
            <Col sm={5}>  
            </Col>  
            </FormGroup>  
        </Col>  
        </Form>  
        </Container>  
    )
}

const mapStateToProps = state=>{
    return {
        dCandidateList: state.dCandidate.list
    }
}
const mapActionToProps = {
        createDCandidate: actions.createMovie
}

export default connect(mapStateToProps,mapActionToProps)(DeCandidateForm);