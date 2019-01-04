import React, { Component } from "react";

class Form extends Component {
  render() {
    const { getData } = this.props;
    return (
      <div className="weather_form_section">
        <form className="weather_form" onSubmit={getData}>
          <input
            className="weather_form_city_input one"
            name="weatherCity"
            placeholder="Enter City "
            type="text"
          />
          <span className="comma"> , </span>
          <input
            className="weather_form_country_input two"
            name="weatherCountry"
            placeholder="Enter Country "
            type="text"
          />
          <br />
          <button className="weather_form_button">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
