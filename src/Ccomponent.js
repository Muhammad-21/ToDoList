import React, { Component } from 'react'

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            input:"",
            items:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    
    
    
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            input:this.state.input,
            items:[...this.state.items,this.state.input]
        });
    }
    
    render() {
        const styles = {
            color:"white"
        }
        return (
            <div>
                <h1 style={styles}>To Do List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}></input>
                    <button style={{border:"0", backgroundColor:"green"}} type="submit">submit</button>
                </form>
                <ul>
                    {this.state.items.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                
                </ul>   
            </div>
        );
    }
}
