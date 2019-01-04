import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Weather from "./components/Weather";

const CLIENT_ID = "cc1a9d88aa5d0d5073352d0cf72b3a39";

class App extends Component {
  state = {
    weather: [],
    error:''
  };
  getData = async e => {
    e.preventDefault();
    const city = e.target.elements.weatherCity.value;
    const country = e.target.elements.weatherCountry.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${CLIENT_ID}&units=metric`
    );

    const data = await api_call.json();
    const x = JSON.stringify(data);
    localStorage.setItem("weather", x);
    if (data && city && country) {
      this.setState({
        weather: data
      });
    }
    else{
      this.setState({
        error: 'Please enter the values correctly!'
      })
    }


    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <div className="left" />
        <div className="right">
          <Header />
          <Form getData={this.getData} />
          <Weather weather={this.state.weather} error = {this.state.error} />
        </div>
      </div>
    );
  }
}

export default App;
