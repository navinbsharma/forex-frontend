import React, { Component } from 'react'

export class HomePage extends Component {
    render() {
        return (
            <div className = "bg-banner"  >
                <section className ="bg-banner">
                <h2  className="heading" style={{color: "#ffffff" }}>
                How can we help you?
                </h2>
                <p className = "intro">
                Our team is dedicated to making your life decisions a whole lot easier. We compare virtually ! We’re 100% free and independently owned (not by a bank or an insurance company). We’re on your side!
                </p>  
                </section>
            </div>
        )
    }
}

export default HomePage
