import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

const CLIENT_ID = "cc1a9d88aa5d0d5073352d0cf72b3a39";

class App extends Component {
  state = {
    weather: []
  };
  getData = async e => {
    e.preventDefault();
    const city = e.target.elements.weatherCity.value;
    const country = e.target.elements.weatherCountry.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${CLIENT_ID}&units=metric`
    );
    const data = await api_call.json();
    if (api_call.length !== 0) {
      this.setState({
        weather: data
      });
    }
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <div className="left">

        </div>
        <div className="right">
          <Form getData={this.getData} />
        </div>
      </div>
    );
  }
}

export default App;
