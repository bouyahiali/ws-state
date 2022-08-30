import React from "react";

class Counter extends React.Component {
    state = { counter: 0 , text :""}
    componentDidMount() {
        setInterval(()=>{
        this.setState({counter:this.state.counter+1})}, 1000)
       }   
    render() { 
        return (
            <div><h1>{this.state.counter} </h1> counter
            <input type="text" onChange={(e)=>this.setState({text:e.target.value})} />
            <h1>{this.state.text}</h1></div>
        );
    }
}
 
export default Counter;