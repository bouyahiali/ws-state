import React from 'react';
import Counter from './Component/Counter'; 

class App extends React.Component {
  state = {show:true , counterApp:0 } 
componentDidMount() {
  setInterval(()=>{
  this.setState({counterApp:this.state.counterApp+1})}, 1000)
 }   

  render() { 
    return (
      <div className="container">
        <h1>{this.state.counterApp}</h1>
        <button className='al' 
        onClick={()=>this.setState({show:!this.state.show})}>
          {this.state.show?"heide":"show"}
          </button>
        {this.state.show? <Counter/> :null}
      </div>
    );
  }
}
 
export default App;