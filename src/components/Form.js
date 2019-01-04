import React, { Component } from "react";

class Form extends Component {
  render() {
    const {getData} = this.props;
    return (
      <div className="weather_form_section">
        <form className="weather_form" onSubmit = {getData}>
          <input
            className="weather_city"
            name="weatherCity"
            placeholder="Enter City "
            type="text"
          />
          <input
            className="weather_country"
            name="weatherCountry"
            placeholder="Enter Country "
            type="text"
          />
          <br/>
          <button className="weather_form_button">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
