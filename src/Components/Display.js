import '../App.css';
import React, {Component} from 'react';

export default class Display extends Component{
  constructor(){
    super();
  }

  render(){
    const main = this.props.weather[0].main; // les températeur
    const weather = this.props.weather[0].weather[0]; // description & icon
    const iconLink = "http://openweathermap.org/img/wn/"+weather.icon+"@2x.png" // icon
    const sys = this.props.weather[0].sys;
    return(
      <div>
        <h1>{this.props.weather[0].name} , {sys.country}</h1>
        <img src = {iconLink}></img>
        <h1>Températeur : {Math.ceil(main.temp-272.15)}°</h1>
        <div className="d-flex justify-content-between pt-5">
            <h3>Min : {Math.ceil(main.temp_min-272.15)}°</h3>
            <h3>Max : {Math.ceil(main.temp_max-272.15)}°</h3>
        </div>
        <div className="pt-2">
            <h4>{(weather.description.toUpperCase())}</h4>
        </div>
      </div>
    );
  }
}
