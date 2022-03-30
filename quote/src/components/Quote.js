import React, { Component } from 'react'
import axios from 'axios'
import './Quote.css'

export default class Quote extends Component {
    state = { advice: '' }
    componentDidMount() {
        this.fetchAdvice()
    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        const { advice } = this.state;
        return (
            
            <div className='conatiner'>
                <center>
                <div className='box' >
                    <h2>{this.state.advice}</h2>
                    <button className='btn' onClick={this.fetchAdvice}><span className='btntxt'>Quotes</span></button>
                </div>
                </center>
            </div>
        )
    }
}
