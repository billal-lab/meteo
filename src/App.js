import './App.css';
import React, {Component} from 'react';
import Result from './Components/Result';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      time:new Date(), 
      town:"",
      isSubmitted:false
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.reset = this.reset.bind(this)
    this.tick = this.tick.bind(this)

  }
  onChangeHandler= (event) =>{
    this.reset();
    this.setState({
      town: event.target.value
    })
  }

  componentDidMount(){

    setInterval(this.tick, 1000);

  }

  onSubmitHandler= (event) =>{
    this.setState({
      isSubmitted: true
    })
    event.preventDefault();
  }

  tick(){
    this.setState({
      time: new Date()
    })
  }
  reset(){
    this.setState({
      isSubmitted:false
    })
  }

  render(){
    return(
      <div>
          <div  className = "d-flex justify-content-center mt-3">
            <h2>Time : {this.state.time.toLocaleTimeString()}</h2>
          </div>
        <div className="d-flex justify-content-center mt-4">
          {/* <h1>{this.state.isSubmitted==true ? "true" : "false"}</h1> */}
          <form className="form-inline" onSubmit= {this.onSubmitHandler}>
            <div className="input-group mb-3">
              <input className="form-control" type = "text" value={this.state.town} onChange={this.onChangeHandler}/>
              <div className="input-group-append">
                <input className="btn btn-info" value="Search" type= "submit"/>
              </div>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center mt-1">
          {this.state.isSubmitted?  <Result name={this.state.town} /> : <h5>Please enter your location</h5>}
        </div>
      </div>
    );
  }
}
