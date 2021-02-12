import '../App.css';
import React, {Component} from 'react';
import Display from './Display';

export default class Result extends Component{
  constructor(){
    super();
    this.state={
      weather:null
    }
  }
  componentDidMount(){
    let url = "https://api.openweathermap.org/data/2.5/find?q="
    let town = this.props.name
    let key = "&appid=Yourkeys"
    fetch(url+town+key)
      .then(response => response.json())
      .then(data => this.conroleQuery(data))
  }
  conroleQuery(data){
    if(data.cod==200 && data.count > 0 ){
      this.setState({
        weather:data
      })
    }
    console.log(data)
  }
  render(){
    return(
      <div className="text-center">
        {this.state.weather == null ? <p> We did not found {this.props.name}</p> : <Display weather ={this.state.weather.list}/> }
      </div>
    );
  }
}
