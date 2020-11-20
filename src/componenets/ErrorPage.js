import React, { Component } from 'react';
import '../App.css';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
export class errorPage extends Component {
    render() {
        return (
            <div className = "bg"  >
                <section className ="bg">
                <h1  className="error" style={{color: "#ffffff" , }}>
                Sorry No Data Found 
                </h1>
                <ErrorTwoToneIcon style={{ fontSize: 300 , color:  '#ffffff'}}/>
                </section>
            </div>
        )
    }
}
export default errorPage
