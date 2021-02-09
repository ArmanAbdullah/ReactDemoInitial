import React, { Component } from 'react';  

class Table extends Component {  
    constructor(props) {  
      super(props);  
      }  
      render() {  
        return (  
            <tr>  
              <td align="center">  
                {this.props.obj.name}  
              </td>  
              <td align="center">  
                {this.props.obj.director}  
              </td> 
            </tr>  
        );  
      }  
    }  
      
    export default Table;  