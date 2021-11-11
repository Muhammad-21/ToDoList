import randomColor from 'randomcolor';
import React, { Component } from 'react'
import Draggable from 'react-draggable';
import './List.css';
export default class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            input:"",
            items:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delete = this.delete.bind(this);
    }    
    
    delete(id) {
        const newArray = [...this.state.items].filter((item,index) =>  index !== id)
        this.setState({
            input:this.state.input,
            items:newArray
        });
    }

    handleChange(event) {
            this.setState({
                input: event.target.value
            });
    }
    
    handleSubmit(event) {
        event.preventDefault();
            this.setState({
                input:'',
                items:[...this.state.items,this.state.input]
            });
    }

    render() {
        const styles = {
            color:"whitesmoke"
        }
        return (
            <div>
                <h1 style={styles}>To Do List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        required={true}
                        className="input"
                        placeholder="Enter something..." 
                        value={this.state.input} 
                        onChange={this.handleChange}
                    />
                    <button className="enter" type="submit">ENTER</button>
                </form>
                    {this.state.items.map((item,index) => (
                        <Draggable key={index}>
                            <div className="todo__item" style={{backgroundColor:`${randomColor({luminosity:"light"})}`}}>
                                {item}
                            <button
                                onClick={() => this.delete(index)} 
                                className="delete"
                            >
                                x
                            </button>
                            </div>
                        </Draggable>
                    ))}
                
            </div>
        );
    }
}
