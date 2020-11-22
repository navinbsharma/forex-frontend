import React, { Component } from 'react';
import '../App.css';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
export class errorPage extends Component {
    render() {
        return (
            <div className="bg"  >
                <section className="bg">
                    <ErrorTwoToneIcon style={{ fontSize: 200, color: '#ffffff' }} />
                    <h1 className="error" style={{ color: "#ffffff", }}>
                        Sorry No Data Found
                     </h1>
                    <h2 className="error-msg">
                        There are thousands of banks in the world – we haven’t gotten to them all yet.
                     </h2>
                    <p className="error-txt">There are thousands of banks in the world – we haven’t gotten to them all yet.
                        Sorry – we can’t show you that comparison. It’s either because we don’t have reliable information from the provider, you searched for a route we don’t support, or the amount you entered is above the maximum quote we can collect.
                    </p>

                </section>
            </div>
        )
    }
}
export default errorPage
